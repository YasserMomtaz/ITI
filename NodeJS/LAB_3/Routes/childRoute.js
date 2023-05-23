const express = require("express");
const controller=require("./../Controllers/childController")
const router = express.Router();

router.route("/children")
    .get(controller.getAllChildren)
    .post(express.json(),controller.AddChild)
    .put(express.json(),controller.updateChild);


      router.route("/children/:id")
      .get(controller.getChildByID)
        .delete(controller.deleteChild);

  module.exports=router;