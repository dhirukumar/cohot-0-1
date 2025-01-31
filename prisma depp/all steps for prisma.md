//if you want to read from prisma to how to set up project from scratch  
This is a [Click here](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch) to visit the website.

//1.)you need to install json file in which you store your all depandency by (npm init -y)

//2.)you need a ts.config file for that (npx tsc --init)

//3.)and then install prisma by (npm install prisma)

//4.)and install prisma client by (npm install @prisma/client)

//5.)and you need a .env and prisma shema file for that (npx prisma init)

//6.)in those file you want to use prisma schema you need to import prisma client like (import { PrismaClient } from '@prisma/client';) and initialised it const prisma = new PrismaClient()

// 7.) and also make the async/await in CRUD opration 
