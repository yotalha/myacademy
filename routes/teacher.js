const express = require('express');

const {
  createTeacher,
  readTeacher,
  updateTeacher,
  deleteTeacher,
  getSingleTeacher,
} = require('../controllers/teachersController');



const router = express.Router();

router.route("/").get(readTeacher).post(createTeacher);

router.route("/:id").get(getSingleTeacher).put(updateTeacher).delete(deleteTeacher);


module.exports = router;