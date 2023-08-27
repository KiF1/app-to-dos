import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest){
  const { origin } = new URL(request.url);
  
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    const cookie = request.cookies.get('code-verified')?.value
    if(!cookie){
      return NextResponse.redirect(`${origin}/code`, {
        headers: {
          'Set-Cookie': `redirectTo=${request.url}; Path=/; HttOnly; max-age=20;`,
        }
      })
    }
    return NextResponse.next()
  }
 
  if (request.nextUrl.pathname.startsWith('/code')) {
    const cookie = request.cookies.get('token')?.value
    if(!cookie){
      return NextResponse.redirect(origin, {
        headers: {
          'Set-Cookie': `redirectTo=${request.url}; Path=/; HttOnly; max-age=20;`,
        }
      })
    }
    return NextResponse.next()
  }
}

// export const config = {
//   matcher: '/dashboard/:path*'
// }