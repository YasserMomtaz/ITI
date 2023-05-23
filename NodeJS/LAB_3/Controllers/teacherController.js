exports.getAllTeachers=function(request,response){
    response.json({message:"Get All Teachers"})
}

exports.AddTeacher=function(request,response){
    response.json({message:"add New Teacher"+request.body.id+request.body.name})
}

exports.updateTeacher=function(request,response){
    response.json({message:"update Teacher user Data"+request.body.name})
}

exports.deleteTeacher=function(request,response){
    response.json({message:"delete Teacher"+request.params.id})
}

exports.getTeacherByID=function(request,response){
    response.json({message:"get teacher : "+request.params.id})
}