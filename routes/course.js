const express = require('express');
const catchAsync = require('../utils/catchAsync');
const { courseSchema } = require('../schemas');

const {
  createCourse,
  readCourse,
  updateCourse,
  deleteCourse,
  getSingleCourse,
} = require('../controllers/coursesController');


const validateCourse = (req, res, next) => {
  const {error} = courseSchema.validate(req.body);

  if(error){
    const msg = error.details.map(el => el.message).join(',')
    throw new ExpressError(msg, 400)
  }
  else{
    next();
  }
}


const router = express.Router();

router.route("/").get(readCourse).post(validateCourse, catchAsync(createCourse));

router.route("/:id").get(getSingleCourse).put(validateCourse, catchAsync(updateCourse)).delete(deleteCourse);


module.exports = router;  