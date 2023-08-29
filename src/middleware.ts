import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest){
  const { origin } = new URL(request.url);
  
  
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    const tokenAndCode = request.cookies.get('token_code')?.value
    if(!tokenAndCode){
      return NextResponse.redirect(`${origin}`, {
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