const express = require("express");

const router = express.Router();

router.route("/children")
    .get((request,respsone)=>{
        respsone.json({message:"Get All Children"})
      })
    .post((request,respsone)=>{
        respsone.json({message:"add New Child"})
      })
    .put((request,respsone)=>{
        respsone.json({message:"update Child user Data"})
      })
      .delete((request,respsone)=>{
        respsone.json({message:"delete Child"})
    });

    module.exports=router;