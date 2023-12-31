'use client'

import Link from "next/link";
import { LayoutDashboard, LogOut } from "lucide-react";
import { usePathname, useRouter } from 'next/navigation';
import Cookies from "js-cookie";
import { queryClient } from "@/app/lib/react-query";


export function HeaderBig(){
  const currentRoute = usePathname();
  const dashboardRouteActive: boolean = currentRoute === '/dashboard';
  const router = useRouter();

  async function signOut(){
    await Cookies.remove('token_code');
    await queryClient.removeQueries();
    router.push('/')
  }

  return(
    <div className="w-full mt-auto h-fit bg-gray-200 shadow-lg flex gap-4 justify-around items-center p-4">
       <Link href="/dashboard" data-active={dashboardRouteActive} className="w-fit flex items-center py-2 px-4 font-bold data-[active=true]:border-t-2 data-[active=true]:border-black">
        {dashboardRouteActive ? <LayoutDashboard color="black" /> : <LayoutDashboard color="gray" />  }
      </Link>
      <button onClick={() => signOut()}  className="w-fit flex items-center py-2 px-4  gap-4 text-white ">
        <LogOut color="gray" />
      </button>
    </div>
  )
}
