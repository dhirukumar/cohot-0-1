//try-catch is used on those place when you doubt if the code throw an error so you put thos code inside try block and other code that you want to run after the try block you put inside catch block and extra code put outside try-catch block

//if try block code is fine then it work and in this case catch block not print 
try{
    let a;
    console.log(a.length)
    console.log("if this line printed means try block is fine in this case catch block not printed")
}
catch(error){
    console.log("try block is wrong that's why catch block printed if try block is fine then catch block is not printed")
    
}
console.log("all extra code past hear outside of try-catch block always work ")

//if you put wronge code outside of try block then is stop hear and throw an error 
// let p;
// console.log(p.length)
