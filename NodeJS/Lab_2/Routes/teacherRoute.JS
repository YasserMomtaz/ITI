const express = require("express");

const router = express.Router();

router.route("/teachers")
    .get((request,respsone)=>{
        respsone.json({message:"Get All Teachers"})
      })
    .post((request,respsone)=>{
        respsone.json({message:"add New Teacher"})
      })
    .put((request,respsone)=>{
        respsone.json({message:"update Teacher user Data"})
      })
      .delete((request,respsone)=>{
        respsone.json({message:"delete Teacher"})
    });

  module.exports=router;