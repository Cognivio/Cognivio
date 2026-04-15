import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Head from '@docusaurus/Head';

// Global state to persist across navigations/re-mounts
let globalHasInitialized = false;

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(globalHasInitialized);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Position state (we use Refs for performance to avoid re-renders)
  const mousePos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) return;

    // Detect mobile/tablet
    const isMobile = window.matchMedia('(max-width: 1024px)').matches;
    if (isMobile) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!globalHasInitialized) {
        globalHasInitialized = true;
        setIsVisible(true);
        // Sync initial positions to prevent jump
        dotPos.current = { x: e.clientX, y: e.clientY };
        ringPos.current = { x: e.clientX, y: e.clientY };
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer';
        
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver);

    // Animation Loop
    let animationId: number;
    const animate = () => {
      // Smooth following for ring (Lerp)
      const lerpFactor = 0.15;
      
      // Dot follows immediately
      dotPos.current.x = mousePos.current.x;
      dotPos.current.y = mousePos.current.y;

      // Ring follows with lag
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerpFactor;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerpFactor;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <>
          {/* @ts-ignore - Docusaurus <Head> types can be restrictive with root attributes */}
          <Head
            htmlAttributes={{ class: 'custom-cursor-active' }}
            bodyAttributes={{ class: 'custom-cursor-active' }}
          >
            {null}
          </Head>
          <div className={clsx('custom-cursor', {
            'custom-cursor--hover': isHovering,
            'custom-cursor--clicking': isClicking
          })}>
            <div ref={dotRef} className="custom-cursor__dot" />
            <div ref={ringRef} className="custom-cursor__ring" />
          </div>
        </>
      )}
    </>
  );
}
