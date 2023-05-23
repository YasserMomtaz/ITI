const express = require("express");
const controller=require("./../Controllers/childController")
const {checkTeacher,checkAdmin} = require("./../Middlewares/authenticationMiddleware")
const router = express.Router();

router.route("/children")
    .get(checkAdmin,controller.getAllchildren)
    .post(checkAdmin,controller.AddChild)
    .put(checkAdmin,controller.updateChild);


      router.route("/children/:id")
      .get(controller.getChildByID)
        .delete(controller.deleteChild);

  module.exports=router;