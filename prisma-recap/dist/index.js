"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
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
function getuser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const todos = yield prisma.user.findMany({
            where: {
                id: userId,
            },
        });
        console.log(todos);
    });
}
getuser(2);
//fetch user and todo with joins this is good way
// async function getTodosAndUserDetails(userId: number, ) {
//     const todos = await prisma.todo.findMany({
//         where: {
//             userId: userId,
//         },
//         select: {
//             user: true,
//             title: true,
//             done: true
//         }
//     });
//     console.log(todos);
// }
// getTodosAndUserDetails(2);
