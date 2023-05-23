const express = require("express");

const router = express.Router();

router.route("/classes")
    .get((request,respsone)=>{
        respsone.json({message:"Get All Classes"})
      })
    .post((request,respsone)=>{
        respsone.json({message:"add New Class"})
      })
    .put((request,respsone)=>{
        respsone.json({message:"update Class user Data"})
      })
      .delete((request,respsone)=>{
        respsone.json({message:"delete Class"})
    });

    module.exports=router;