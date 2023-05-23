const mongoose = require("mongoose");
const { AutoIncrementID } = require("@typegoose/auto-increment");

const schema = new mongoose.Schema({
    _id:Number,
    name:String,
    supervisor:{type:Number,ref:"teachers"},
    children:{type:Array,ref:"children"},
    somefield:Number
});


schema.plugin(AutoIncrementID,{})
const model = mongoose.model("classes",schema);
const doc = model.create({somefield:10});