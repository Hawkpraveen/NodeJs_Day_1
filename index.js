// 1 - importing part

import express from "express";

//2 - declaration/initialization

//initialize the express 
const app=express();
//setting port number
const PORT=4000;


//3 - middleware
app.use(express.json());

//routes
app.get('/',(req,res)=>{
   // res.status(200).json({message:'hi welcome to demo node js'})

   res.status(200).send(`<div > <h1 style="background-color:Aqua;color-black"> Hi welcome </h1></div>`)
})

//4 - running port
app.listen(PORT,()=>{
    console.log(`app listening on port = ${PORT}`);
    
})

