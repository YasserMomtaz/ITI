const express = require("express");
const controller=require("./../Controllers/teacherController")
const { checkAdmin } = require("../Middlewares/authenticationMiddleware");
const router = express.Router();

router.route("/teachers")
    .all(checkAdmin)
    .get(controller.getAllTeachers)
    .post(express.json(),controller.AddTeacher)
    .put(express.json(),controller.updateTeacher)
      .delete(controller.deleteTeacher);


      router.route("/teachers/:id")
      .all(checkAdmin)
      .get(controller.getTeacherByID)
        .delete(controller.deleteTeacher);

  module.exports=router;