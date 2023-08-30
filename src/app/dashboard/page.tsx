'use client'

import { HeaderBig } from "@/components/Header/HeaderBig";
import { HeaderDashBoard } from "@/components/Header/HeaderDashboard";
import { Check, X } from "lucide-react";
import { api } from "../lib/api";
import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";
import ReactLoading from "react-loading";
import { useEffect, useState } from "react";

export interface Todo{
  id: number;
  cod: string;
  product_id: string;
  price: string;
}

export default function Dashboard(){
  const [errorMe, setErroMe] = useState<boolean>(false)
  const token = Cookies.get('token_code');

  const { data, refetch } = useQuery<Todo[]>(['todos-user'], async () => {
    try {
      const response = await api.post('/me', { headers: {'Authorization': `Bearer ${token}` }});
      const responseTodo = await api.post(`/to-dos/user/all/${response.data.id}`, { headers: {'Authorization': `Bearer ${token}` }})
      return responseTodo.data;
    } catch {
      setErroMe(true)
    }
  });

  async function setRed(id: number){
    await api.post(`/to-dos/setRed/${id}`, { headers: {'Authorization': `Bearer ${token}` }}).then(() => {
      refetch()
    })
  }

  async function setGreen(id: number){
    await api.post(`/to-dos/setGreen/${id}`, { headers: {'Authorization': `Bearer ${token}` }}).then(() => {
      refetch()
    })
  }

  useEffect(() => {
      if(errorMe){
        window.location.reload(); 
      }
  }, [errorMe])


  return(
    <div className="w-full flex flex-col gap-4 h-screen">
      <div className="w-full pt-8 px-4">
        <HeaderDashBoard title="To-dos" icon="home" />
      </div>
      <div className="h-[85vh] flex relative overflow-y-scroll">
        <div className="w-full absolute flex flex-col gap-12 p-4 lg:pr-8 pb-12">
          {data !== undefined ? (
            <div className="w-full flex flex-col gap-4">
              {data.map(item => (
                <div key={item.id} className="w-full shadow-sm bg-white p-8 flex flex-col justify-center rounded-md items-center gap-2">
                  <strong className="text-lg font-bold">Id: {item.product_id}</strong>
                  <span className="text-lg font-bold">Código: {item.cod}</span>
                  <span className="text-lg font-bold">R$ {item.price}</span>
                  <div className="w-full grid grid-cols-2 gap-4 mt-4">
                    <button onClick={() => setRed(item.id)} type="button" className="w-full border-0 rounded-lg text-center bg-red p-4"><X className="m-auto" color="white" /></button>
                    <button onClick={() => setGreen(item.id)} type="button" className="w-full border-0 rounded-lg text-center bg-green-600 p-4"><Check className="m-auto" color="white" /></button>
                  </div>
                </div>
              ))}
          </div>
          ) : (
            <div className="w-full h-[70vh] flex items-center justify-center">
              <ReactLoading className="w-fit" type="spinningBubbles" color="#000000" height='80px' width='100px' />
            </div>
          )}
        </div>
      </div>
      <HeaderBig />
    </div>
  )
}

