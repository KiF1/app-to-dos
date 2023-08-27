'use client'

import Link from "next/link";
import { LayoutDashboard, LogOut } from "lucide-react";
import { usePathname } from 'next/navigation';


export function HeaderBig(){
  const currentRoute = usePathname();
  const dashboardRouteActive: boolean = currentRoute === '/dashboard';

  return(
    <div className="w-full mt-auto h-fit bg-gray-200 shadow-lg flex gap-4 justify-around items-center p-4">
       <Link href="/dashboard" data-active={dashboardRouteActive} className="w-fit flex items-center py-2 px-4 font-bold data-[active=true]:border-t-2 data-[active=true]:border-black">
        {dashboardRouteActive ? <LayoutDashboard color="black" /> : <LayoutDashboard color="gray" />  }
      </Link>
      <Link href="/api/logout" className="w-fit flex items-center py-2 px-4  gap-4 text-white ">
        <LogOut color="gray" />
      </Link>
    </div>
  )
}