'use client'

import { HeaderDashBoard } from "@/components/Header/HeaderDashboard";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { api } from "../lib/api";

const validationCodeFormSchema = z.object({
  code: z.string().min(1, { message: 'Informe um Código válido' }).max(4, {message: 'O código possui apenas 4 números'}),
});

type validationFormData = z.infer<typeof validationCodeFormSchema>

export default function Dashboard(){
  const token = Cookies.get('token');
  const [error, setError] = useState(false);
  const { handleSubmit, register, formState: { isSubmitting, errors } } = useForm<validationFormData>({
    resolver: zodResolver(validationCodeFormSchema)
  });
  const router = useRouter()

  async function handleCode(data: validationFormData){
    await api.get(`users/verify-code-pass/${data.code}`, { headers: {'Authorization': `Bearer ${token}` }}).then(() => {
      const combinedValue =  token + '|' + true
      Cookies.set('token_code', combinedValue, { expires: 1, path: '/' })
      router.push('/dashboard');
    }).catch(() => setError(true))  
  }

  return(
    <div className="w-full flex flex-col gap-8 h-screen px-4 py-8">
      <HeaderDashBoard icon="code" title="Código" />
      <form onSubmit={handleSubmit(handleCode)} className="w-full flex flex-col gap-4">
        <div className="w-full flex flex-col gap-2">
          <input {...register('code')} type="number" className="w-full p-4 border-black border-2 text-black rounded-lg placeholder:text-black bg-gray-100" placeholder="Insira o Código" />
          {errors.code && <span className="text-sm text-black font-normal">{errors.code.message}</span>}
        </div>
        {error && <span className="w-full text-sm text-black font-normal">Código inválido</span>}
        <button disabled={isSubmitting} data-disabled={isSubmitting} type='submit' className='w-full px-8 py-3 bg-black text-white rounded-lg text-lg font-bold font-serif text-center data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-75'>Verificar Código</button>
      </form>
    </div>
  )
}