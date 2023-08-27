import { Login } from '@/components/Login/Login'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default function Home() {
  const isAuthenticated = cookies().get('user-logged')?.value
  const isCodeVerified = cookies().get('code-verified')?.value
  if(isAuthenticated && isCodeVerified) {
    redirect('/dashboard')
  }else if(isAuthenticated){
    redirect('/code')
  }
  return(
    <Login />
  )
}
