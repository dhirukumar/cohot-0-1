
//why you don't think that why i am create hhtp://localhost:3000/api/user to frontend if Next.js is working as backend and frontend so why you dont think that i put this logic to frontend


// this is for main root page rout 
import { PrismaClient } from '@prisma/client';
export async function GET(){
    //here you can use any database to get the data
     const prisma = new PrismaClient();
    const user = await prisma.user.findFirst();
    return(
        Response.json({
            username:user?.username,
           password:user?.password})

    )
}


