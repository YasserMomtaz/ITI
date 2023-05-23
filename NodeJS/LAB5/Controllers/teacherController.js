const mongoose=require("mongoose");
require("./../Models/teacherModel");
const bcrypt = require("bcrypt");
const TeacherSchema=mongoose.model("teachers");
const saltRounds = 5;

exports.getAllTeachers=function(request,response,next){


    TeacherSchema.find({})
                    .then(data=>{
                        response.status(200).json({data});

                    })
                    .catch(error=>{
                        next(error);
                    })
   
}
exports.getTeacherByID=function(request,response,next){

    TeacherSchema.findOne({_id:request.params.id})
                    .then(Teacher=>{
                      if(Teacher==null)
                      {
                        throw new Error("Teacher not exists...");
                      }
                      response.status(200).json(Teacher);

                    }).catch(error=>next(error))
   
}

exports.AddTeacher=async function(request,respsone,next){
  let encrypted_password = await bcrypt.hash(request.body.password , saltRounds)
    let object=new TeacherSchema({
      fullName:request.body.name,
      E_mail:request.body.E_mail,
      password:encrypted_password,
      image:request.body.image
    });

    object.save()
    .then(data=>{
      respsone.status(201).json({data})

    })
    .catch(error=>next(error))


  }

exports.updateTeacher=async function (request,respsone,next){
  let encrypted_password = await bcrypt.hash(request.body.password , saltRounds)
    TeacherSchema.updateOne({
      _id:request.body.id
    },{
      $set:{
        fullName:request.body.name,
        E_mail:request.body.E_mail,
        password:encrypted_password,
        image:request.body.image
      }
    })
    .then(data=>{
        respsone.status(200).json({data:"updated"});

    })
    .catch(error=>next(error))

  }

exports.deleteTeacher=(request,respsone)=>{
    TeacherSchema.deleteOne({_id:request.params.id})
    respsone.status(200).json({message:"delete Teachers "+request.params.id})
}