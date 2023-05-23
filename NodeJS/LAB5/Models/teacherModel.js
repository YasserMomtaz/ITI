const mongoose=require("mongoose");
const { AutoIncrementID } = require("@typegoose/auto-increment");




const schema=new mongoose.Schema({
    _id:Number,
    fullName:String,
    E_mail:{type:String, unique:true},
    password:String,
    image:String,
    somefield:Number
});



schema.plugin(AutoIncrementID,{})
const model = mongoose.model("teachers",schema);
const doc = model.create({somefield:10});
