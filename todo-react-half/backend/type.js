const zod=require("zod");

const todoshema=zod.object({
    title:zod.string(),
    discreption:zod.string()
   
})

const updateshema=zod.object({
  id:zod.string()
})

module.exports=({todoshema,updateshema})