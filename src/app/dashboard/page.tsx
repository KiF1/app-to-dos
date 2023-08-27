'use client'

import { HeaderBig } from "@/components/Header/HeaderBig";
import { HeaderDashBoard } from "@/components/Header/HeaderDashboard";
import axios from "axios";
import { Check, X } from "lucide-react";

export default function Dashboard(){

  // useEffect(() => {
  //   if(date != null){
  //     const newDate = dayjs(date).format('DD-MM-YYYY');
  //     axios.get(`http://64.52.80.144/domain/domain.php?data=${newDate}`, { withCredentials: false }).then(response => setDomainRetorned(response.data));
  //   }
  // }, [date])

  return(
    <div className="w-full flex flex-col gap-4 h-screen">
      <div className="w-full pt-8 px-4">
        <HeaderDashBoard title="To-dos" icon="home" />
      </div>
      <div className="h-[85vh] flex relative overflow-y-scroll">
        <div className="w-full absolute flex flex-col gap-12 p-4 lg:pr-8 pb-12">
          <div className="w-full flex flex-col gap-4">
            <div className="w-full shadow-sm bg-white p-8 flex flex-col justify-center rounded-md items-center gap-2">
              <strong className="text-lg font-bold">Id: 1339-1094-1449-2</strong>
              <span className="text-lg font-bold">Código: 222030</span>
              <span className="text-lg font-bold">R$ 1200</span>
              <div className="w-full grid grid-cols-2 gap-4 mt-4">
                <button type="button" className="w-full border-0 rounded-lg text-center bg-red p-4"><X className="m-auto" color="white" /></button>
                <button type="button" className="w-full border-0 rounded-lg text-center bg-green-600 p-4"><Check className="m-auto" color="white" /></button>
              </div>
            </div>
            <div className="w-full shadow-sm bg-white p-8 flex flex-col justify-center rounded-md items-center gap-2">
              <strong className="text-lg font-bold">Id: 1339-1094-1449-2</strong>
              <span className="text-lg font-bold">Código: 222030</span>
              <span className="text-lg font-bold">R$ 1200</span>
              <div className="w-full grid grid-cols-2 gap-4 mt-4">
                <button type="button" className="w-full border-0 rounded-lg text-center bg-red p-4"><X className="m-auto" color="white" /></button>
                <button type="button" className="w-full border-0 rounded-lg text-center bg-green-600 p-4"><Check className="m-auto" color="white" /></button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <HeaderBig />
    </div>
  )
}