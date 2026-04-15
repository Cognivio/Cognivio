import React, {type ComponentProps, type ReactNode} from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import {useNavbarSecondaryMenu} from '@docusaurus/theme-common/internal';
import Translate from '@docusaurus/Translate';

function SecondaryMenuBackButton(props: ComponentProps<'button'>) {
  return (
    <button 
      {...props} 
      type="button" 
      className="clean-btn flex items-center gap-2 px-6 py-4 text-[#E5B351] font-bold border-b border-white/5 w-full hover:bg-white/5 transition-colors"
    >
      <Translate
        id="theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel"
        description="The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)">
        ← Back to main menu
      </Translate>
    </button>
  );
}

export default function NavbarMobileSidebarSecondaryMenu(): ReactNode {
  const isPrimaryMenuEmpty = useThemeConfig().navbar.items.length === 0;
  const secondaryMenu = useNavbarSecondaryMenu();
  return (
    <div className="bg-slate-900/50 backdrop-blur-sm h-full">
      {!isPrimaryMenuEmpty && (
        <SecondaryMenuBackButton onClick={() => secondaryMenu.hide()} />
      )}
      <div className="p-4">
        {secondaryMenu.content}
      </div>
    </div>
  );
}
