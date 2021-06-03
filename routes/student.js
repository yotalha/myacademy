const express = require('express');
const catchAsync = require('../utils/catchAsync');
const { studentSchema } = require('../schemas');

const {
  createStudent,
  readStudent,
  updateStudent,
  deleteStudent,
  getSingleStudent,
} = require('../controllers/studentsController');


const validateStudent = (req, res, next) => {
  const {error} = studentSchema.validate(req.body);

  if(error){
    const msg = error.details.map(el => el.message).join(',')
    throw new ExpressError(msg, 400)
  }
  else{
    next();
  }
}

const router = express.Router();

router.route("/").get(readStudent).post(validateStudent, catchAsync(createStudent));

router.route("/:id").get(getSingleStudent).put(validateStudent, catchAsync(updateStudent)).delete(deleteStudent);


module.exports = router;