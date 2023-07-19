'use client'

import * as Dialog from '@radix-ui/react-dialog';
import { AlignJustify, X } from 'lucide-react';
import { HeaderLinkMobile } from './HeaderLinkMobile';

export function HeaderMobile(){
  return(
    <div className='flex lg:hidden'>
      <Dialog.Root>
        <Dialog.Trigger asChild className='w-full'>
          <AlignJustify className='w-12 h-12 ml-auto' color='#ffff' />
        </Dialog.Trigger>
        <Dialog.Portal className='w-full h-screen'>
          <Dialog.Content className="w-full h-full bg-black top-0 fixed z-[100] focus-visible:outline-0 transition-all">
              <div className='w-full justify-between flex items-center gap-8 top-4 h-[150px] p-4 sm:p-8'>
                <Dialog.Close asChild>
                    <X className="w-12 h-12 right-4 cursor-pointer ml-auto" color='#ffff' aria-label="Close"/>
                </Dialog.Close>
              </div>
            <HeaderLinkMobile />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}