const express = require("express");
const controller=require("./../Controllers/classController")
const router = express.Router();

router.route("/classes")
    .get(controller.getAllClasses)
    .post(express.json(),controller.AddClass)
    .put(express.json(),controller.updateClass)
      ;


      router.route("/classes/:id")
      .get(controller.getClassByID)
        .delete(controller.deleteClass);

  module.exports=router;