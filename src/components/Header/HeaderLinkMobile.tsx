'use client'

import Link from "next/link";
import { BarChart3, LayoutDashboard, LogOut, Users } from "lucide-react";
import { usePathname } from 'next/navigation';

export function HeaderLinkMobile(){
  const currentRoute = usePathname();
  const dashboardRouteActive: boolean = currentRoute === '/dashboard' 
  const statisticsRouteActive: boolean = currentRoute === '/dashboard/statistics' 
  const teamsRouteActive: boolean = currentRoute === '/dashboard/teams'

  return(
    <div className="w-full flex flex-col gap-4 p-4 sm:p-8">
      <Link href="/dashboard" data-active={dashboardRouteActive} className="w-full flex items-center px-4 py-4 rounded-lg font-bold data-[active=true]:bg-white gap-4 text-white data-[active=true]:text-black ">
        {dashboardRouteActive ? <LayoutDashboard color="black" /> : <LayoutDashboard color="#ffffff" />  } 
        DNS
      </Link>
      <Link href="/api/logout" className="w-full flex items-center px-4 py-4 rounded-lg  gap-4 text-white ">
        <LogOut color="#ffffff" />
        Sign Up
      </Link>
    </div>
  )
}