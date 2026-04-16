import React, {type ReactNode} from 'react';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import {translate} from '@docusaurus/Translate';
import IconClose from '@theme/Icon/Close';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

function CloseButton() {
  const mobileSidebar = useNavbarMobileSidebar();
  return (
    <button
      type="button"
      aria-label={translate({
        id: 'theme.docs.sidebar.closeSidebarButtonAriaLabel',
        message: 'Close navigation bar',
        description: 'The ARIA label for close button of mobile sidebar',
      })}
      className="clean-btn p-3 text-slate-400 hover:text-white transition-colors"
      onClick={() => mobileSidebar.toggle()}>
      <IconClose />
    </button>
  );
}

export default function NavbarMobileSidebarHeader(): ReactNode {
  return (
    <div className="flex items-center justify-between px-6 py-8 border-b border-white/5 bg-slate-900/50 backdrop-blur-sm">
      <Link to="/" className="flex items-center gap-3 no-underline group hover:no-underline">
        <div className="relative">
          <div className="absolute inset-0 bg-[#E5B351] blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
          <img 
            src={useBaseUrl('/img/cognivio-eagle.svg')} 
            alt="Cognivio Eagle" 
            className="w-10 h-10 relative z-10 drop-shadow-[0_0_10px_rgba(229,179,81,0.3)]"
          />
        </div>
        <span className="font-heading text-2xl font-bold tracking-tight text-white group-hover:text-[#E5B351] transition-colors">
          Cognivio
        </span>
      </Link>
      <CloseButton />
    </div>
  );
}
