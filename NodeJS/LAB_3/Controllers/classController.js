exports.getAllClasses=function(request,response){
    response.json({message:"Get All classes"})
}

exports.AddClass=function(request,response){
    response.json({message:"add New Classes"+request.body.id+request.body.name})
}

exports.updateClass=function(request,response){
    response.json({message:"update Classes user Data"+request.body.name})
}

exports.deleteClass=function(request,response){
    response.json({message:"delete Class"+request.params.id})
}

exports.getClassByID=function(request,response){
    response.json({message:"get Class : "+request.params.id})
}