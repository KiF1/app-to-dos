import { z } from "zod";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest){
  const authenticateBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  })
  const body = await request.json();
  const { email, password } = await authenticateBodySchema.parse(body);
  const { origin } = new URL(request.url);
  const prisma = new PrismaClient();

  const user = await prisma.user.findFirst({ where: { email, password } });
  if(!user){
    return NextResponse.json({ error: 'User not exists' }, { status: 401 })
  }

  const cookieExpiresInSeconds = 60 * 60 * 24 * 30
  return NextResponse.redirect(origin, {
    headers: {
      'Set-Cookie': `user-logged=true; Path=/; max-age=${cookieExpiresInSeconds};`,
    },
  })

  // cookies().set('user-logged', 'true', )
  // return NextResponse.json({ error: 'User Autheticated' }, { status: 200 })
}