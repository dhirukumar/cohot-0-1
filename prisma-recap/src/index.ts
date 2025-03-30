import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//create user and todo
// async function insertUser(username: string, password: string, firstName: string, lastName: string,email: string) {
//   const res = await prisma.user.create({
//     data:{
//         username,
//         password,
//         firstName,
//         lastName,
//         email
//     }
//   })
    // const ress = await prisma.todo.create({
    //     data:{
    //         title: "Learn Prisma",
    //         done: false,
    //         userId: 2   }
    // })
//   console.log(res);
// }

// insertUser("admssin1", "12sss3456", "sdhiru", "sisngh","opsp@gmail.com")

//fetch user and todo without joins this is bad way
// async function getTodos(userId: number) {
//     const todos = await prisma.todo.findMany({
//         where: {
//         userId: userId,
//         },
//     });
//     console.log(todos);
// }
// getTodos(1); 

// async function getuser(userId: number) {
//     const todos = await prisma.user.findMany({
//         where: {
//         id: userId,
//         },
//     });
//     console.log(todos);
// }

// getuser(2); 

//fetch user and todo with joins this is good way
// async function getTodosAndUserDetails(userId: number, ) {
//     const todos = await prisma.todo.findMany({
//         where: {
//             userId: userId,
//         },
//         select: {
//             user: true, //you can see todo shema that every todo has user object so we can select user object
//             title: true,
//             done: true
//         }
//     });
//     console.log(todos);
// }

// getTodosAndUserDetails(2);