//global catch when the user type any type of wrong input then  middelwere is called it contain 4 parametar and all of time it define at the end of your code  it is anothe way for input validation like ZOD
let errorcount=0;
app.use((err,req,res,next)=>{
    errorcount++;
    console.log(errorcount);
    res.send("something wrong with your input")
})