exports.getAllChildren=function(request,response){
    response.json({message:"Get All Children"})
}

exports.AddChild=function(request,response){
    response.json({message:"add New Child"+request.body.id+request.body.name})
}

exports.updateChild=function(request,response){
    response.json({message:"update Child user Data"+request.body.name})
}

exports.deleteChild=function(request,response){
    response.json({message:"delete Child"+request.params.id})
}

exports.getChildByID=function(request,response){
    response.json({message:"get Child : "+request.params.id})
}