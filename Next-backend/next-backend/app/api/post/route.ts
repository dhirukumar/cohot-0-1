import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const body = await req.json();  //get the data from frontend
    
    if (!body.username || !body.password || body.username.trim() === "" || body.password.trim() === "") {
        return NextResponse.json(
          { message: "Username and password are required" },
          { status: 400 }
        );
      }
    try{
        const post = await prisma.user.create({
            data: {
                username: body.username,
                password: body.password,
            },
        });
        return NextResponse.json({
            message: 'User created successfully',
            user:post
        });
}
    catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error creating user' }, { status: 500 });
    }}