const { request, response } = require("express");
const mongoose=require("mongoose");
require("./../Models/classModel");
require("./../Models/childModel");

const classeschema=mongoose.model("classes");
const TeacherSchema=mongoose.model("teachers");
const childrenchema=mongoose.model("children");

exports.getAllclasses=function(request,response,next){


    classeschema.find({})
                    .populate({path:"supervisor",select:{name:1}})
                    .populate({path:"children",select:{Fullname:1}})
                    .then(data=>{
                        response.status(200).json({data});

                    })
                    .catch(error=>{
                        next(error);
                    })
   
}
exports.getClassByID=function(request,response,next){

    classeschema.findOne({_id:request.params.id})
                    .then(Class=>{
                      if(Class==null)
                      {
                        throw new Error("Class not exists...");
                      }
                      response.status(200).json(Class);

                    }).catch(error=>next(error))   
}

exports.AddClass=(request,respsone,next)=>{

    TeacherSchema.findOne({_id:request.body.supervisor})
    .then(teacher=>{
        if(teacher==null)
        throw new Error("Teacher not exists");
    })

    childrenchema.find({_id :request.children})
 
    .then(child=>{
         if(child==null)
         throw new Error("Child not exists");
         
         let object=new classeschema({
            name:request.body.name,
            supervisor:request.body.supervisor,
            children:request.body.children
          });
        return object.save()      
    })

    .then(data=>{
      respsone.status(201).json({data})

    })
    .catch(error=>next(error))
  }

exports.updateClass=(request,respsone,next)=>{
  
    classeschema.updateOne({
      _id:request.body.id
    },{
      $set:{
        name:request.body.name,
      supervisor:request.body.supervisor,
        children:request.body.children
      }
    })
    .then(data=>{
        respsone.status(200).json({data:"updated"});

    })
    .catch(error=>next(error))

  }

exports.deleteClass=(request,respsone)=>{
  classeschema.findOne({_id:request.params.id})
  .then(Class=>{
    if(Class==null)
    {
      throw new Error("Class Doesn't Exist...");
    }
    classeschema.deleteOne({_id:request.params.id})
    .then(data=>{
      respsone.status(200).json({message:"delete class "+request.params.id})
    })
    
  })
}

exports.classTeacher=(request,response)=>{
    classeschema.findOne({_id:request.params.id})
                    .populate({path:"supervisor",select:{name:1}})
                    .then(data=>{
                        response.status(200).json(data.supervisor);

                    })
                    .catch(error=>{
                        next(error);
                    })
}
exports.classchildren=(request,response)=>{
    classeschema.findOne({_id:request.params.id})
                    .populate({path:"children",select:{Fullname:1}})
                    .then(data=>{
                        response.status(200).json(data.children);

                    })
                    .catch(error=>{
                        next(error);
                    })
}