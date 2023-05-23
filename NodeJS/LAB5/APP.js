const express = require("express");
const morgan = require('morgan');
const mongoose= require("mongoose");
const teacherRoute=require("./Routes/teacherRoute");
const classRoute=require("./Routes/classRoute");
const childRoute=require("./Routes/childRoute");
const loginRoute = require("./Routes/authenticationRoute");
const authMW = require("./Middlewares/authenticationMiddleware")

const server = express();

mongoose.connect("mongodb://127.0.0.1:27017/NurseryDB")
                .then(()=>{
                    console.log(" NurseryDB is Connected...");
                    server.listen(4040,()=>{
                        console.log("server is Ready.....")
                    });
                })
                .catch(error=>{
            
                    console.log("DB problem "+error);
                })



server.use(morgan('tiny'));
server.use(express.json());
server.use(loginRoute);
server.use(authMW);
server.use(teacherRoute);
server.use(childRoute);
server.use(classRoute);

server.use((request,respsone)=>{
    respsone.status(404).json({message:"Page not Found"})    
});


server.use((error,request,response,next)=>{   

    response.status(500).json({message:" exception : "+error});
});