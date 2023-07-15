import { HeaderBig } from "@/components/Header/HeaderBig";
import { HeaderDashBoard } from "@/components/Header/HeaderDashboard";
import { TeamBox } from "@/components/teams/TeamBox";

export default function Teams(){
  return (
    <div className="w-full grid grid-cols-1 mt-[150px] lg:mt-0 lg:grid-cols-[0.2fr_1fr] gap-8 lg:h-screen">
      <HeaderBig />
      <div className="h-full flex relative lg:overflow-y-scroll py-4">
        <div className="w-full absolute flex flex-col gap-12 p-4 lg:pr-8 pb-12">
          <HeaderDashBoard title="Equipes - Atividades" icon="users" />
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TeamBox />
          </div>
        </div>
      </div>
    </div>
  )
}