import React, {type ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useAlternatePageUtils} from '@docusaurus/theme-common/internal';
import {useHistorySelector} from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import type {Props} from '@theme/NavbarItem/LocaleDropdownNavbarItem';

function useLocaleUtils() {
  const {
    i18n: {localeConfigs},
  } = useDocusaurusContext();
  const alternatePageUtils = useAlternatePageUtils();
  const search = useHistorySelector((history) => history.location.search);
  const hash = useHistorySelector((history) => history.location.hash);

  return {
    getURL: (locale: string) => {
      const url = alternatePageUtils.createUrl({
        locale,
        fullyQualified: false,
      });
      return `${url}${search}${hash}`;
    },
    getLabel: (locale: string) => localeConfigs[locale]!.label,
  };
}

export default function LocaleDropdownNavbarItem({
  mobile,
  ...props
}: Props): ReactNode {
  const {
    i18n: {currentLocale, locales},
  } = useDocusaurusContext();
  const utils = useLocaleUtils();

  if (mobile) {
    return (
       <div className="menu__list-item border-t border-slate-800/50 mt-4 pt-4 px-4">
         <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Language</div>
         <div className="flex gap-2">
           {locales.map((locale) => {
             const isActive = locale === currentLocale;
             return (
               <a
                 key={locale}
                 href={isActive ? undefined : utils.getURL(locale)}
                 target="_self"
                 className={clsx(
                   'flex-1 text-center py-2 rounded-xl text-xs font-bold transition-all no-underline hover:no-underline',
                   isActive 
                    ? 'bg-[#E5B351] text-white shadow-lg shadow-[#E5B351]/20' 
                    : 'bg-slate-800 text-slate-400 border border-slate-700'
                 )}
                 onClick={(e) => {
                   if (isActive) e.preventDefault();
                 }}
               >
                 {locale.toUpperCase()}
               </a>
             );
           })}
         </div>
       </div>
    );
  }

  return (
    <div className="navbar__item flex items-center ml-2">
      <div className="relative flex bg-slate-100 rounded-full p-1 border border-slate-200 shadow-inner overflow-hidden">
        {/* Sliding Indicator (Pure CSS) */}
        <div 
          className={clsx(
            "absolute inset-y-1 bg-white rounded-full shadow-md transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
            currentLocale === 'en' ? "left-1 w-[38px]" : "left-[43px] w-[38px]"
          )}
        />
        
        {locales.map((locale) => {
          const isActive = locale === currentLocale;
          return (
            <a
              key={locale}
              href={isActive ? undefined : utils.getURL(locale)}
              target="_self"
              className={clsx(
                "relative z-10 px-3 py-1 text-[11px] font-bold transition-colors duration-300 no-underline hover:no-underline uppercase tracking-tight",
                isActive ? "text-[#E5B351]" : "text-slate-400 hover:text-slate-600"
              )}
              onClick={(e) => {
                if (isActive) e.preventDefault();
              }}
            >
              {locale}
            </a>
          );
        })}
      </div>
    </div>
  );
}
