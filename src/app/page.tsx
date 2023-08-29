import { Login } from '@/components/Login/Login'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default function Home() {
  const isAuthenticated = cookies().get('token_code')?.value

  if(isAuthenticated) {
    redirect('/dashboard')
  }
  return(
    <Login />
  )
}
