const express=require("express");
const app=express();

const reqfilter=(req,res,next)=>{
    if(!req.query.age){
        res.send("enter age")
    }
    else if(req.query.age<18){
        res.send("you are underage")
    }
    else{
        next()
    }
}

app.use(reqfilter)

app.get("/",(req,res)=>{
    res.end("hey")
})

app.listen(3000)