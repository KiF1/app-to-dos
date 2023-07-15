'use client'

import { HeaderBig } from "@/components/Header/HeaderBig";
import { HeaderDashBoard } from "@/components/Header/HeaderDashboard";
import { FilterByData } from "@/components/statistics/Tabs/FilterByData";
import * as Tabs from '@radix-ui/react-tabs';

export default function Statistics(){
  return(
    <div className="w-full grid grid-cols-1 mt-[150px] lg:mt-0 lg:grid-cols-[0.2fr_1fr] gap-8 lg:h-screen">
      <HeaderBig />
      <div className="h-full flex relative lg:overflow-y-scroll py-4">
        <div className="w-full absolute flex flex-col gap-12 p-4 lg:pr-8 pb-12">
          <HeaderDashBoard title="Estatísticas" icon="users" />
          <div className="w-full flex flex-col gap-6">
            <div className="w-full flex flex-col bg-white p-6 gap-4 shadow-lg rounded-lg">
              <h1 className="text-lg font-bold text-black m-0">Cadastros concluídos</h1>
              <Tabs.Root className="w-full flex flex-col" defaultValue="Data">
                <Tabs.List className="w-full grid grid-cols-1 sm:grid-cols-2 xl:flex flex-shrink-0" aria-label="Filtro">
                  <Tabs.Trigger className="bg-white px-5 h-11 flex justify-center items-center flex-1 text-black text-center text-sm font-bold border-2 rounded-lg sm:border-t-0 sm:border-l-0 sm:border-r-0 sm:rounded-none sm:border-b-2 border-b-gray-200 data-[state=active]:text-red data-[state=active]:border-red sm:data-[state=active]:border-b-red" value="Data">Filtrar por data específica</Tabs.Trigger>
                  <Tabs.Trigger className="bg-white px-5 h-11 flex justify-center items-center flex-1 text-black text-center text-sm font-bold border-2 rounded-lg sm:border-t-0 sm:border-l-0 sm:border-r-0 sm:rounded-none sm:border-b-2 border-b-gray-200 data-[state=active]:text-red data-[state=active]:border-red sm:data-[state=active]:border-b-red" value="Semana">Semana atual</Tabs.Trigger>
                  <Tabs.Trigger className="bg-white px-5 h-11 flex justify-center items-center flex-1 text-black text-center text-sm font-bold border-2 rounded-lg sm:border-t-0 sm:border-l-0 sm:border-r-0 sm:rounded-none sm:border-b-2 border-b-gray-200 data-[state=active]:text-red data-[state=active]:border-red sm:data-[state=active]:border-b-red" value="Mes">Mês atual</Tabs.Trigger>
                  <Tabs.Trigger className="bg-white px-5 h-11 flex justify-center items-center flex-1 text-black text-center text-sm font-bold border-2 rounded-lg sm:border-t-0 sm:border-l-0 sm:border-r-0 sm:rounded-none sm:border-b-2 border-b-gray-200 data-[state=active]:text-red data-[state=active]:border-red sm:data-[state=active]:border-b-red" value="Ano">Ano Atual</Tabs.Trigger>
                </Tabs.List>
                <FilterByData />
              </Tabs.Root>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}