const express = require('express');

const {
  createStudent,
  readStudent,
  updateStudent,
  deleteStudent,
  getSingleStudent,
} = require('../controllers/studentsController');



const router = express.Router();

router.route("/").get(readStudent).post(createStudent);

router.route("/:id").get(getSingleStudent).put(updateStudent).delete(deleteStudent);


module.exports = router;