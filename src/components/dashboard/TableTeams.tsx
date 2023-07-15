'use client'

import { useState, useEffect } from "react";
import { MonitorSmartphone, Smartphone } from "lucide-react";
import * as Progress from '@radix-ui/react-progress';

export function TableTeams(){
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return(
    <div className="w-full hidden lg:flex overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="p-[0.2rem]">
            <th className="p-2 border-b-2 border-b-gray-200 font-normal text-gray-400 text-lg text-start">Equipe</th>
            <th className="p-2 border-b-2 border-b-gray-200 font-normal text-gray-400 text-lg text-start">Membros</th>
            <th className="p-2 border-b-2 border-b-gray-200 font-normal text-gray-400 text-lg text-start">Atividades</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-2 border-b-gray-200">
            <td className="py-4 px-2 text-gray-400 font-normal flex items-center gap-2">
              <MonitorSmartphone />
              Front-End
            </td>
            <td className="py-4 px-2 text-gray-400 font-normal">Jhon Doe, Jhon, Steve</td>
            <td>
              <Progress.Root className="ProgressRoot w-full" value={progress}>
                <Progress.Indicator className="ProgressIndicator" style={{ transform: `translateX(-${100 - progress}%)` }} />
              </Progress.Root>
            </td>
          </tr>
          <tr className="border-b-2 border-b-gray-200">
            <td className="py-4 px-2 text-gray-400 font-normal flex items-center gap-2">
              <Smartphone />
              Mobile
            </td>
            <td className="py-4 px-2 text-gray-400 font-normal">Jhon Doe, Jhon, Steve</td>
            <td>
              <Progress.Root className="ProgressRoot w-full" value={progress}>
                <Progress.Indicator className="ProgressIndicator" style={{ transform: `translateX(-${100 - progress}%)` }} />
              </Progress.Root>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}