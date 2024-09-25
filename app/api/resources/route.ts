import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma'; 
import { getAuth } from '@clerk/nextjs/server'; 
import { NextApiRequest } from 'next';


export async function POST(request: NextApiRequest) {
    const { title, description, link, categoryId } = await request.body()// Changed to categoryId
    const { userId } = getAuth(request);

    if (!userId) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const newResource = await prisma.resource.create({
        data: {
            userId: userId,
            title,
            description,
            link,
            categoryId, // Use categoryId instead of category
        },
    });

    return NextResponse.json(newResource, { status: 201 });
}

export async function GET(request: NextRequest) {
    const { userId } = getAuth(request);

    if (!userId) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const resources = await prisma.resource.findMany({
        where: { userId: userId },
        include: { category: true }, // Include category in the response
    });

    return NextResponse.json(resources);
}

export async function PUT(request: NextApiRequest) {
    const { id, title, description, link, categoryId } = await request.body(); // Changed to categoryId
    const { userId } = getAuth(request);

    if (!userId) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const resource = await prisma.resource.findUnique({
        where: { id: id },
    });

    if (!resource || resource.userId !== userId) {
        return NextResponse.json({ message: 'Resource not found or unauthorized' }, { status: 404 });
    }

    const updatedResource = await prisma.resource.update({
        where: { id: id },
        data: { title, description, link, categoryId }, // Use categoryId instead of category
    });

    return NextResponse.json(updatedResource);
}

export async function DELETE(request: NextApiRequest) {
    const { id } = await request.body();
    const { userId } = getAuth(request);

    if (!userId) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const resource = await prisma.resource.findUnique({
        where: { id: id },
    });

    if (!resource || resource.userId !== userId) {
        return NextResponse.json({ message: 'Resource not found or unauthorized' }, { status: 404 });
    }

    await prisma.resource.delete({
        where: { id: id },
    });

    return NextResponse.json({ message: 'Resource deleted' });
}