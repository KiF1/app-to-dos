'use client'

import * as Tabs from '@radix-ui/react-tabs';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function FilterByData(){
const data = [
  { name: 'Page A', uv: 5000, pv: 2400, amt: 2400, },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, }, 
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, }, 
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, }, 
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181, }, 
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500, }, 
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100, },
];
  return(
    <Tabs.Content className="w-full data-[state=active]:py-8 flex flex-col gap-4" value="Data">
      <h1 className="text-sm font-bold text-black m-0">Escolha um intervalo entre as datas</h1>
      <div className='w-full grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-20'>
        <input type='date' className='w-full bg-grayBack text-black text-sm px-4 py-2 rounded-lg' />
        <input type='date' className='w-full bg-grayBack text-black text-sm px-4 py-2 rounded-lg' />
      </div>
      <div className='w-full h-[300px] mt-8'>
        <ResponsiveContainer width="100%" height="100%" >
          <BarChart width={150} height={40} data={data}>
            <Bar dataKey="uv" fill="#FF0000" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Tabs.Content>
  )
}