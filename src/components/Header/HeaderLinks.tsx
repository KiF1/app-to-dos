'use client'

import Link from "next/link";
import { BarChart3, LayoutDashboard, LogOut, Users } from "lucide-react";
import { usePathname } from 'next/navigation';

export function HeaderLinks(){
  const currentRoute = usePathname();
  const dashboardRouteActive: boolean = currentRoute === '/dashboard' 
  const statisticsRouteActive: boolean = currentRoute === '/dashboard/statistics' 
  const teamsRouteActive: boolean = currentRoute === '/dashboard/teams'

  return(
    <div className="w-full hidden lg:flex flex-col gap-4">
      <Link href="/dashboard" data-active={dashboardRouteActive} className="w-full flex items-center px-4 py-4 rounded-lg font-bold data-[active=true]:bg-white gap-4 text-white data-[active=true]:text-red ">
        {dashboardRouteActive ? <LayoutDashboard color="#FF0000" /> : <LayoutDashboard color="#ffffff" />  } 
        Dashboard
      </Link>
      <Link href="/dashboard/statistics" data-active={statisticsRouteActive} className="w-full flex items-center px-4 py-4 rounded-lg font-bold data-[active=true]:bg-white gap-4 text-white data-[active=true]:text-red ">
      {statisticsRouteActive ? <BarChart3 color="#FF0000" /> : <BarChart3 color="#ffffff" />  } 
        Estatísticas
      </Link>
      <Link href="/dashboard/teams" data-active={teamsRouteActive} className="w-full flex items-center px-4 py-4 rounded-lg font-bold data-[active=true]:bg-white gap-4 text-white data-[active=true]:text-red ">
        {teamsRouteActive ? <Users color="#FF0000" /> : <Users color="#ffffff" />  }
        Equipes
      </Link>
      <Link href="/api/logout" className="w-full flex items-center px-4 py-4 rounded-lg  gap-4 text-white ">
        <LogOut color="#ffffff" />
        Sign Up
      </Link>
    </div>
  )
}