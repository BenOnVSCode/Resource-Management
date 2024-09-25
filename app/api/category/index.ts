import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma'; 
import { getAuth } from '@clerk/nextjs/server'; 
import { NextApiRequest } from 'next';

export async function POST(request: NextApiRequest) {
    const { name } = await request.body();
    const { userId } = getAuth(request);

    if (!userId) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const newCategory = await prisma.category.create({
        data: {
            userId: userId,
            name,
        },
    });

    return NextResponse.json(newCategory, { status: 201 });
}

export async function GET(request: NextApiRequest) {
    const { userId } = getAuth(request);

    if (!userId) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const categories = await prisma.category.findMany({
        where: { userId: userId },
    });

    return NextResponse.json(categories);
}

export async function PUT(request: NextApiRequest) {
    const { id, name } = await request.body();
    const { userId } = getAuth(request);

    if (!userId) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const category = await prisma.category.findUnique({
        where: { id: id },
    });

    if (!category || category.userId !== userId) {
        return NextResponse.json({ message: 'Category not found or unauthorized' }, { status: 404 });
    }

    const updatedCategory = await prisma.category.update({
        where: { id: id },
        data: { name },
    });

    return NextResponse.json(updatedCategory);
}

export async function DELETE(request: NextApiRequest) {
    const { id } = await request.body();
    const { userId } = getAuth(request);

    if (!userId) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const category = await prisma.category.findUnique({
        where: { id: id },
    });

    if (!category || category.userId !== userId) {
        return NextResponse.json({ message: 'Category not found or unauthorized' }, { status: 404 });
    }

    await prisma.category.delete({
        where: { id: id },
    });

    return NextResponse.json({ message: 'Category deleted' });
}