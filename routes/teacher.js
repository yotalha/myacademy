const express = require('express');
const catchAsync = require('../utils/catchAsync');
const { teacherSchema } = require('../schemas');

const {
  createTeacher,
  readTeacher,
  updateTeacher,
  deleteTeacher,
  getSingleTeacher,
} = require('../controllers/teachersController');

const validateTeacher = (req, res, next) => {
  const {error} = teacherSchema.validate(req.body);

  if(error){
    const msg = error.details.map(el => el.message).join(',')
    throw new ExpressError(msg, 400)
  }
  else{
    next();
  }
}

const router = express.Router();

router.route("/").get(readTeacher).post(validateTeacher, catchAsync(createTeacher));

router.route("/:id").get(getSingleTeacher).put(validateTeacher, catchAsync(updateTeacher)).delete(deleteTeacher);


module.exports = router;