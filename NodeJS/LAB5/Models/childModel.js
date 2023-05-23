const mongoose = require("mongoose");
const { AutoIncrementID } = require("@typegoose/auto-increment");
const schema = new mongoose.Schema({
    _id:Number,
    Fullname:String,
    age:Number,
    level :{ 
        type:String ,
        enum:["PreKG","KG1","KG2"]
    },
    address : {
        city : String ,
        street : String ,
        building : String
    },
    somefield:Number
});

schema.plugin(AutoIncrementID,{})
const model = mongoose.model("children",schema);
const doc = model.create({somefield:10});



