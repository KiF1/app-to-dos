import { Login } from '@/components/Login/Login'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default function Home() {
  const isAuthenticated = cookies().get('token_code')?.value
  const tokenCokiee = cookies().get('token')?.value
  const value = isAuthenticated?.split('|');
  const token = value !== undefined ? value[0] : ''
  const code = value !== undefined ? value[1] : ''

  if(token && code === 'true') {
    redirect('/dashboard')
  }
  return(
    <Login />
  )
}
