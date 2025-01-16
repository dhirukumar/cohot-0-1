//fetch and axios

//1.)fetch method with .then (this is not good way )

// function main(){
//     fetch("https://dummyjson.com/todos/random")
//         .then(async (okk)=>{
//             const tojson=await okk.json()
//             console.log(tojson)
//         })
//         }
//     main()



//2.)fetch without .then (this is littel more good way)

// async function main(){
// const data=await fetch("https://httpdump.app/dumps/d29a6c83-702f-4fae-9920-a4519caa8e11",{
//     method:"POST",//in fetch defult it is get method
//     body:JSON.stringify({//in fetch before send any body it must be in string
//         username:"dhiru",
//         password:"123"
//     }),
//     headers:{Authorization:"Barer 1234"}

// })
// const tojson=await data.json()//data.text or data.json according to url backend formate
// console.log(tojson)
// }
// main()



//axios this is super way to solve this problem

// const ax=require("axios");
// async function main(){
//     const dp=await ax.delete("https://httpdump.app/dumps/d29a6c83-702f-4fae-9920-a4519caa8e11",
//     {
// data:{username:"njnjss",password:"1234"}
//     }, //in axios the firest parameter is always a body or in get request you not need to send body to backend
// {
// headers:{Authorization:"Barer 123433"}
// })
//     console.log(dp.data)
// }
// main()



//In axios for delete you can not send body as second argument you neet to tell this is data or you can pass second aurgument directly as headers
const ax=require("axios");
async function main(){
    const dp=await ax.delete("https://httpdump.app/dumps/d29a6c83-702f-4fae-9920-a4519caa8e11?a=brr",
    {
data:{username:"njnjss",password:"1234"}
    }, //in axios the firest parameter is always a body or in get request you not need to send body to backend
{
headers:{Authorization:"Barer 123433"}
})
    console.log(dp.data)
}
main()



//axios for get method
// const ax=require("axios");
// async function main(){
//     const dp=await ax.get("https://httpdump.app/dumps/d29a6c83-702f-4fae-9920-a4519caa8e11",// in get request you not need to send body to backend
// {
// headers:{Authorization:"Barer 123433"}
// })
//     console.log(dp.data)
// }
// main()
