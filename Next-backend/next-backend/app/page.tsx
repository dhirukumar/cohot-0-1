//in react we use clint side rendering(CSR) but in next we use server side rendering(SSR)

//next is not only just frontend framework but also a backend framework
// import Image from "next/image";
// import axios from "axios";

// Comprehensive Guide to Using Prisma ORM with Next.js

//this logic only use when you are in your dev mode
import { PrismaClient } from "@prisma/client";
const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const prisma =
  globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// this abhove code is used to create a singleton instance of PrismaClient if you want to know you can ckeck the documentation here https://www.prisma.io/docs/orm/more/help-and-troubleshooting/nextjs-help or check with harkirat's logic https://projects.100xdevs.com/tracks/nextjs-2/next-2-11
async function getData() {
// const res=await axios.get("http://localhost:3000/api/user");
// return res.data;

//VVI:-here i put the logic to get the data from databasein frontend while i don't need to do this backend call because in next.js you can use server side rendering

  //here you can use any database to get the data
   const prisma = new PrismaClient();
  const user = await prisma.user.findFirst(); 
  return({username:user?.username,
         password:user?.password})
        }

//in next you have to allow use async function in the component because it is server side rendering
//if this file is "use client" then you can not use async function
export default async function Home() {
  
  const userdetail=await getData();
  return (
    <div className="flex flex-col justify-center h-screen">
    <div className="flex justify-center">
        <div className="border p-8 rounded">
            <div>
             username: {userdetail?.username}
            </div>
            password: {userdetail?.password}
        </div>
       
    </div>
</div>
  )
}


