'use client'

import { Timer } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export function BoxGraphics(){
  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, }, 
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, }, 
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181, }, 
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500, }, 
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100, },
  ];

  return(
    <div className="w-full flex flex-col gap-8 bg-white p-6 min-h-[300px] rounded-xl">
      <ResponsiveContainer width="100%" height="100%" className="min-h-[300px]">
        <AreaChart width={500} height={400} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#FF0000" fill="#FF0000" />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex flex-col p-4">
        <h1 className="text-lg font-bold text-black m-0">Cadastros concluídos</h1>
        <h2 className="text-sm font-normal text-gray-400">Melhor performance nos últimos meses</h2>
        <div className="flex items-center gap-2 mt-8 pt-4 border-t-2 border-t-gray-200">
          <Timer className="w-5 h-5" color="rgb(106, 118, 138)" />
          <span className="text-sm text-gray-400">Atualizado há 2 minutos</span>
        </div>
      </div>
    </div>
  )
}