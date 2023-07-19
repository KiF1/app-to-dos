'use client'

import { HeaderLinks } from "./HeaderLinks";
import { HeaderMobile } from "./HeaderMobile";

export function HeaderBig(){
  return(
    <div className="w-full fixed z-50 top-0 lg:relative flex items-center justify-end lg:justify-start lg:flex-col gap-12 lg:gap-4 p-4 sm:p-8 lg:p-6 bg-black h-[150px] lg:h-full">
      <HeaderLinks />
      <HeaderMobile />
    </div>
  )
}