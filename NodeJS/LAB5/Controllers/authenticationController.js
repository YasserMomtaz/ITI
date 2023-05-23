const mongoose = require ("mongoose");
const jwt = require("jsonwebtoken");
require("./../Models/teacherModel");
require("./../Models/childModel");
const teacherSchema = mongoose.model("teachers")

exports.login = function (request , response , next)
{
    if ( request.body.email == "yasser@yahoo.com" && request.body.password == "123")
    {
        const token = jwt.sign({

            id : 1 ,
            role : "admin" , 
            username : "yasser" 
        },"ITI");

        response.status(200).json({data : "Ok",token})
    }
    else
    {
        teacherSchema.findOne({email: request.body.email,
                              password : request.body.password})
            
        .then(user=>{
            if(bcrypt.compare(request.body.password,user.password))
            {
                if ( user == null )
                {
                    throw new Error ("Username or Password not correct ...");
                }
                const token = jwt.sign({

                id : user._id ,
                role : "teacher"  
                },"ITI");
                response.status(200).json({data : "Ok",token})
            }
        })
        .catch(error=>{
            next(error);
        })                      

    }
}