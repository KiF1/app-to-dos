'use client'

import * as Tabs from '@radix-ui/react-tabs';
import { CalendarCheck, CalendarClock, ClipboardList } from 'lucide-react';

export function TabsTeam(){
  return(
    <Tabs.Root className="w-full flex flex-col" defaultValue="Em Andamento">
      <Tabs.List className="w-full grid grid-cols-1 sm:grid-cols-3 xl:flex flex-shrink-0" aria-label="Atividades">
        <Tabs.Trigger className="bg-white px-5 h-11 flex justify-center items-center flex-1 text-black text-center text-sm font-bold border-2 rounded-lg sm:border-t-0 sm:border-l-0 sm:border-r-0 sm:rounded-none sm:border-b-2 border-b-gray-200 data-[state=active]:text-red data-[state=active]:border-red sm:data-[state=active]:border-b-red" value="Em Andamento">Em Andamento</Tabs.Trigger>
        <Tabs.Trigger className="bg-white px-5 h-11 flex justify-center items-center flex-1 text-black text-center text-sm font-bold border-2 rounded-lg sm:border-t-0 sm:border-l-0 sm:border-r-0 sm:rounded-none sm:border-b-2 border-b-gray-200 data-[state=active]:text-red data-[state=active]:border-red sm:data-[state=active]:border-b-red" value="Finalizado">Finalizado</Tabs.Trigger>
        <Tabs.Trigger className="bg-white px-5 h-11 flex justify-center items-center flex-1 text-black text-center text-sm font-bold border-2 rounded-lg sm:border-t-0 sm:border-l-0 sm:border-r-0 sm:rounded-none sm:border-b-2 border-b-gray-200 data-[state=active]:text-red data-[state=active]:border-red sm:data-[state=active]:border-b-red" value="A Fazer">A Fazer</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className="w-full data-[state=active]:py-8 flex flex-col gap-4" value="Em Andamento">
        <div className='w-full flex items-center gap-2'>
          <CalendarClock className='w-4 h-4' />
          <strong className='text-sm font-normal text-gray-400'>Finalizar tela de login do aplicativo</strong>
        </div>
      </Tabs.Content>
      <Tabs.Content className="w-full data-[state=active]:py-8 flex flex-col gap-4" value="Finalizado">
        <div className='w-full flex items-center gap-2'>
          <CalendarCheck className='w-4 h-4' />
          <strong className='text-sm font-normal text-gray-400'>Finalizar tela de pedido app</strong>
        </div>
      </Tabs.Content>
      <Tabs.Content className="w-full data-[state=active]:py-8 flex flex-col gap-4" value="A Fazer">
        <div className='w-full flex items-center gap-2'>
          <ClipboardList className='w-4 h-4' />
          <strong className='text-sm font-normal text-gray-400'>Finalizar tela de pedido app</strong>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  )
}