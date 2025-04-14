// VVI
"use server";

// This error occurs when a "use server" file exports a value that is not an async function. It might happen when you unintentionally export something like a configuration object, an arbitrary value, or missed the async keyword in the exported function declaration.
import { PrismaClient } from "@prisma/client";
const globalForPrisma = global as unknown as { prisma: PrismaClient };
 const prisma =
  globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;


export async function Post({username, password}:{username:string, password:string}) {
    if (!username || !password || username.trim() === "" || password.trim() === "") {
        return ("Username and password are required");
      }
    try{
        const post = await prisma.user.create({
            data: {
                username: username,
                password: password,
            },
        });
        return({
            message: 'User created successfully',
            user:post
        });
}
    catch (error) {
        console.error(error);
        return ({ error: 'Error creating user' });
    }}