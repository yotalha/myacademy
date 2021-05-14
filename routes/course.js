const express = require('express');

const {
  createCourse,
  readCourse,
  updateCourse,
  deleteCourse,
  getSingleCourse,
} = require('../controllers/coursesController');



const router = express.Router();

router.route("/").get(readCourse).post(createCourse);

router.route("/:id").get(getSingleCourse).put(updateCourse).delete(deleteCourse);


module.exports = router;  