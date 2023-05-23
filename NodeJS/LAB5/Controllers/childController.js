const mongoose=require("mongoose");
require("./../Models/childModel");

const childrenchema=mongoose.model("children");

exports.getAllchildren=function(request,response,next){


    childrenchema.find({})
                    .then(data=>{
                        response.status(200).json({data});

                    })
                    .catch(error=>{
                        next(error);
                    })
   
}
exports.getChildByID=function(request,response,next){

    childrenchema.findOne({_id:request.params.id})
                    .then(Child=>{
                      if(Child==null)
                      {
                        throw new Error("Child not exists...");
                      }
                      response.status(200).json(Child);

                    }).catch(error=>next(error))   
}

exports.AddChild=(request,respsone,next)=>{

    let object=new childrenchema({
      Fullname:request.body.name,
      age:request.body.age,
        level:request.body.level,
        address:request.body.address
    });


    object.save()
    .then(data=>{
      respsone.status(201).json({data})

    })
    .catch(error=>next(error))
  }

exports.updateChild=(request,respsone,next)=>{
  
    childrenchema.updateOne({
      _id:request.body.id
    },{
      $set:{
        Fullname:request.body.name,
      age:request.body.age,
        level:request.body.level,
        address:request.body.address
      }
    })
    .then(data=>{
        respsone.status(200).json({data:"updated"});

    })
    .catch(error=>next(error))

  }

exports.deleteChild=(request,respsone)=>{
  childrenchema.findOne({_id:request.params.id})
  .then(Child=>{
    if(Child==null)
    {
      throw new Error("Child not exists...");
    }
    childrenchema.deleteOne({_id:request.params.id})
    .then(child=>{
      respsone.status(200).json({message:"delete Child "+request.params.id})
  }) 
  })
    
    .catch(error=>{
      next(error);
  })
}