import { PrismaClient} from "@prisma/client";
const prisma=new PrismaClient({log:["info","query","error"]}) //this is how you debuge the code using clint
async function main(){

// await prisma.user.create({ //this is how you can create a new user in sql but in schema you define the email is @uniqu so you need to pass uniqu email at every time then run npm run queries
//     data: {
//       email: 'jgjg@a.io',
//       name: 'Elsa Prisma',
//     },
//   })

// await prisma.post.create({
//   data:{
//     title:"go to library",
//     content:"kndkndkd",
//     // author:{ //you can use this syntax for give the id of which user you want to add the todo
//     //   connect:{
//     //     id:4
//     //   }
//     // }
//     authorId:4//or you can use this for post at which user you want to push the post
//   }
// })

//you can alos pass two tabels in one queries 
// await prisma.user.create({
//   data: {
//     email: 'ag@gmail.com',
//     name: 'dhiru kumar',
//     posts:{
//       create:{
//         title:"nkdnkdnd",
//         content:"kmnkndkn"
//       }
//     }
//   },
 
// })

//now we know how to get from prisma
//this is how to get all user
// const u=await p 

//when you pass any condition in findmany
// const o=await pr 

//if you find a unque user not only there user table but also there post table for that you include post as true and get both user table related to there post table
// const u=await prisma.user.findUnique({
//   where:{
//     id:1
//   },
//   include:{ //when you give the post as true it gives you post table also
//     posts:true
//   }
// })
// console.log(u)

//here how to update in prisma 
// const u=await prisma.user.update({
//   where:{
//     id:1
//   },
//   data:{
//     name:"ankit kumar"
//   }
// })

//here how to delete the posts of any by ther user 
// await prisma.user.update({
//   where:{
//     id:1
//   },
//   data:{
//   posts:{
//     deleteMany:{ //delete many is use for delete a boll where this is deleted by ture or false
//       published:false,
//     }
//   }
//   }
// })

//this is how you delete the hole user 
// await prisma.user.delete({
//   where:{id:3}
// })

//this is how you delete the post 
// await prisma.post.delete({
//   where:{id:4}
// })

//delete using update we only delete and update using this update
// await prisma.user.update({
// where:{
//   id:3,
// },
// data:{
//   name:"kalu don"
// }
// })


//pagination in prisma (pagination means when we go to any site it show 10 option in 1st then you click to 2nd page then it show the another 10 option and skip the firest 10 option )
//this is how you get 2 post without skip any post at firest
const i=await prisma.post.findMany({
  take:2,
  skip:0
})
console.log(i)

//this is how pagination work in real world
// const page = 2; // Current page number
// const pageSize = 10; // Number of items per page

// const options = await prisma.post.findMany({
//   take: pageSize, // Limit to 10 items
//   skip: (page - 1) * pageSize, // Skip items based on the current page
// });
// console.log(options)

}

main()