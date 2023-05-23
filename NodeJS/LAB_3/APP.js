const express = require("express");
const morgan = require('morgan');
const teacherRoute=require("./Routes/teacherRoute");
const classRoute=require("./Routes/classRoute");
const childRoute=require("./Routes/childRoute");

const server = express();
server.listen(4040,()=>{
    console.log("server is Ready.....")
});




server.use(morgan('tiny'));

server.use(teacherRoute);
server.use(classRoute);
server.use(childRoute);

server.use((request,respsone)=>{
    respsone.status(404).json({message:"Page not Found"})    
});


server.use((error,request,response,next)=>{   

    response.status(500).json({message:" exception : "+error});
});