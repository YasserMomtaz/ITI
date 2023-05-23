const express = require("express");
const controller=require("./../Controllers/classController")
const {checkAdmin} = require("./../Middlewares/authenticationMiddleware")
const router = express.Router();

router.route("/classes")
    .all(checkAdmin)
    .get(controller.getAllclasses)
    .post(express.json(),controller.AddClass)
    .put(express.json(),controller.updateClass)
      ;


      router.route("/classes/:id")
      .all(checkAdmin)
      .get(controller.getClassByID)
      .delete(controller.deleteClass);
      router.route("/classchildren/:id")
      .get(controller.classchildren)
      router.route("/classteacher/:id")
      .get(controller.classTeacher);

  module.exports=router;