"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [showFullLogo, setShowFullLogo] = useState(false);

  useEffect(() => {
    // Switch to full logo after 2 seconds (when background transition finishes)
    const timer = setTimeout(() => {
      setShowFullLogo(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans min-h-screen flex justify-center items-center animate-bg-fade">
      <div className="flex justify-center items-center animate-fade-in-float">
        {!showFullLogo ? (
          <Image 
            src="/brand/cognivio-eagle.svg" 
            alt="Cognivio Eagle Logo"
            width={200} 
            height={200}
            priority
            className="animate-fade-in-out"
          />
        ) : (
          <Image 
            src="/brand/cognivio-full.svg" 
            alt="Cognivio Full Logo" 
            width={300} 
            height={200}
            priority
            className="animate-pop-in"
          />
        )}
      </div>
    </div>
  );
}