const express = require("express");
const controller=require("./../Controllers/teacherController")
const router = express.Router();

router.route("/teachers")
    .get(controller.getAllTeachers)
    .post(express.json(),controller.AddTeacher)
    .put(express.json(),controller.updateTeacher)
      .delete(controller.deleteTeacher);


      router.route("/teachers/:id")
      .get(controller.getTeacherByID)
        .delete(controller.deleteTeacher);

  module.exports=router;