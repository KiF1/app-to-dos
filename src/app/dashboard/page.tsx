import { HeaderBig } from "@/components/Header/HeaderBig";
import { HeaderDashBoard } from "@/components/Header/HeaderDashboard";
import { Activity } from "@/components/dashboard/Activity";
import { BoxGraphics } from "@/components/dashboard/BoxGraphics";
import { BoxStatistics } from "@/components/dashboard/BoxStatistics";

export default function Dashboard(){
  return(
    <div className="w-full grid grid-cols-1 mt-[150px] lg:mt-0 lg:grid-cols-[0.2fr_1fr] gap-8 lg:h-screen">
      <HeaderBig />
      <div className="h-full flex relative lg:overflow-y-scroll py-4">
        <div className="w-full absolute flex flex-col gap-12 p-4 lg:pr-8 pb-12">
          <HeaderDashBoard title="Dashboard" icon="home" />
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BoxStatistics />
          </div>
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-8">
            <BoxGraphics />
          </div>
          <Activity />
        </div>
      </div>
    </div>
  )
}