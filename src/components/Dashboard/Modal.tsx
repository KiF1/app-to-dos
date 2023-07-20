'use client'

import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { z } from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from 'axios';
import { useState } from 'react';

interface Props{
  domain: string
  ip: string;
}

const validationSetFormSchema = z.object({
  domain: z.string().min(1),
  ip: z.string().min(1),
});

type validationFormData = z.infer<typeof validationSetFormSchema>

export function Modal({ domain, ip }: Props){
  const [sucess, setSucess] = useState<boolean | undefined>(undefined);
  const { handleSubmit } = useForm<validationFormData>({
    resolver: zodResolver(validationSetFormSchema),
    defaultValues: { domain: domain, ip: ip },
  });

  async function handleRegisterDomain(data: validationFormData){
    try {
      await axios.post('http://64.52.80.144:3000/api/register-domain', data);
      await setSucess(true)
    } catch {
      setSucess(false)
    }
  }

  return(
    <Dialog.Root>
        <Dialog.Trigger asChild className='w-fit'>
          <button className='w-full sm:w-fit px-6 py-2 bg-black text-white text-lg font-bold rounded-xl'>Salvar</button>
        </Dialog.Trigger>
        <Dialog.Portal className='w-full h-screen'>
          <Dialog.DialogOverlay className="DialogOverlay" />
          <Dialog.Content className="w-[85%] sm:w-fit h-fit bg-black top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] fixed z-[100] focus-visible:outline-0 transition-all rounded-xl gap-8">
              <div className='w-full flex flex-col gap-8 p-8'>
                <Dialog.Close asChild>
                    <X className="w-12 h-12 right-4 cursor-pointer ml-auto" color='#ffff' aria-label="Close"/>
                </Dialog.Close>
                <strong className='text-lg text-white'>Deseja salvar o domínio: {domain}, nesse endereço IP: {ip} ?</strong>
                <div className='w-full grid grid-cols-2 gap-8'>
                  <form onSubmit={handleSubmit(handleRegisterDomain)}>
                    <button type='submit' className='w-full px-6 py-2 bg-white text-black text-lg font-bold rounded-xl'>Salvar</button>
                  </form>
                  <Dialog.Close asChild>
                    <button className='w-full px-6 py-2 bg-white text-black text-lg font-bold rounded-xl'>Cancelar</button>
                  </Dialog.Close>
                </div>
                {sucess ? (
                  <strong className='text-lg text-green-500'>Sucesso ao registrar IP</strong>
                ) : sucess === false ? (
                  <strong className='text-lg text-red'>Erro ao registrar IP</strong>
                ) : <></>}
              </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
  )
}