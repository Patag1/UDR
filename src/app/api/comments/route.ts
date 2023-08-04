import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'

export async function GET() {
  try {
    const comments = await prisma.comment.findMany()
    return NextResponse.json({ comments }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'ISE' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  const { data } = await req.json()

  console.log(data)

  try {
    await prisma.comment.create({
      data: {
        name: data.name,
        email: data.email,
        message: data.message,
      },
    })
    return NextResponse.json({ message: 'OK' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'ISE' }, { status: 500 })
  }
}
