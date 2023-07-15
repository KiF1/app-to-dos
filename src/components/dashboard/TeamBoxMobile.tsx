'use client'

import { useState, useEffect } from "react";
import * as Progress from '@radix-ui/react-progress';
import { MonitorSmartphone } from "lucide-react";

export function TeamBoxMobile(){
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return(
    <div className="w-full flex lg:hidden flex-col gap-4 border-b-2 border-b-gray-200 pb-4">
      <div className="w-full">
        <strong className="text-lg text-red font-bold relative float-left mr-2">Equipe:</strong>
        <div className="w-fit flex items-center gap-2">
          <MonitorSmartphone />
          <span className="text-lg text-black font-normal">Design</span>
        </div>
      </div>
      <div className="w-fit">
        <strong className="text-lg text-red font-bold relative float-left mr-2">Membros:</strong>
        <span className="text-lg text-black font-normal">Jhon Doe, Jhon, Steve</span>
      </div>
      <div className="w-full">
        <Progress.Root className="ProgressRoot w-full" value={progress}>
          <Progress.Indicator className="ProgressIndicator" style={{ transform: `translateX(-${100 - progress}%)` }} />
        </Progress.Root>
      </div>
    </div>
  )
}