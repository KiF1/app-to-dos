import { MonitorSmartphone } from "lucide-react";
import { TabsTeam } from "./TabsTeam";

export function TeamBox(){
  return(
    <div className="w-full flex flex-col bg-white p-6 gap-4 shadow-lg rounded-lg">
      <div className="flex items-center gap-2">
        <MonitorSmartphone />
        <strong className="text-lg sm:text-xl font-bold text-black">Design</strong>
      </div>
      <div className="flex items-center gap-2">
        <strong className="text-sm sm:text-lg font-bold text-black">Equipe:</strong>
        <span className="text-sm sm:text-lg font-normal text-black">Jhon Doe, Steve, Arnold</span>
      </div>
      <TabsTeam />
    </div>
  )
}