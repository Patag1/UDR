import { NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'

interface IParams {
  id?: string
}

export async function PUT(req: Request, { params }: { params: IParams }) {
  try {
    const { id } = params

    if (!id) {
      return NextResponse.json({ error: 'Not Found' }, { status: 404 })
    }

    const idInt = parseInt(id)

    const { name, email, message } = await req.json()

    await prisma.comment.update({
      where: {
        id: idInt,
      },
      data: {
        name,
        email,
        message,
      },
    })

    return NextResponse.json({ message: 'Actualizado!' }, { status: 200 })
  } catch (_error) {
    return NextResponse.json({ error: 'ISE' }, { status: 500 })
  }
}

export async function DELETE(_req: Request, { params }: { params: IParams }) {
  try {
    const { id } = params

    if (!id) {
      return NextResponse.json({ message: 'Not Found' }, { status: 404 })
    }

    const idInt = parseInt(id)

    await prisma.comment.delete({
      where: {
        id: idInt,
      },
    })

    return NextResponse.json({ message: 'Borrado!' }, { status: 200 })
  } catch (_error) {
    return NextResponse.json({ error: 'ISE' }, { status: 500 })
  }
}
