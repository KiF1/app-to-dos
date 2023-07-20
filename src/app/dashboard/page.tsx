'use client'

import { Modal } from "@/components/Dashboard/Modal";
import { HeaderBig } from "@/components/Header/HeaderBig";
import { HeaderDashBoard } from "@/components/Header/HeaderDashboard";
import axios from "axios";
import dayjs from "dayjs";
import { Timer } from "lucide-react";
import { useEffect, useState } from "react";
export default function Dashboard(){
  const [date, setDate] = useState<string | null>(null);
  const [domainRetorned, setDomainRetorned] = useState<string | null>(null);
  const [ip, setIp] = useState<string | null>(null)

  useEffect(() => {
    if(date != null){
      const newDate = dayjs(date).format('DD-MM-YYYY');
      axios.get(`http://64.52.80.144/domain/domain.php?data=${newDate}`, { withCredentials: false }).then(response => setDomainRetorned(response.data));
    }
  }, [date])

  return(
    <div className="w-full grid grid-cols-1 mt-[150px] lg:mt-0 lg:grid-cols-[0.2fr_1fr] gap-8 lg:h-screen">
      <HeaderBig />
      <div className="h-full flex relative lg:overflow-y-scroll py-4">
        <div className="w-full absolute flex flex-col gap-12 p-4 lg:pr-8 pb-12">
          <HeaderDashBoard title="DNS" icon="home" />
          <div className="w-full flex flex-wrap items-center gap-4">
            <Timer color="black" className="w-4 h-4" />
            <strong className="text-xl font-bold text-black">Insira a data desejada</strong>
            <input type='date' onChange={(e) => setDate(e.target.value)} className='w-full sm:w-fit bg-white border-2 border-black text-black text-sm px-8 py-2 rounded-lg' />
          </div>
          {domainRetorned != null && 
            <div className="flex flex-col gap-4">
              <span className="text-lg text-black">O dominío retornado para essa data é {domainRetorned}</span>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <input type='text' onChange={(e) => setIp(e.target.value)} placeholder="Insira o Ip para salvar" className='w-full sm:w-fit bg-white border-2 border-black text-black text-sm px-4 py-2 rounded-lg' />
                {ip != null && <Modal domain={domainRetorned} ip={ip} />}
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}