const express = require('express');
const catchAsync = require('../utils/catchAsync');
const { classSchema } = require('../schemas');

const {
  createClass,
  readClass,
  updateClass,
  deleteClass,
  getSingleClass,
} = require('../controllers/classesController');


const validateClass = (req, res, next) => {
  const {error} = classSchema.validate(req.body);

  if(error){
    const msg = error.details.map(el => el.message).join(',')
    throw new ExpressError(msg, 400)
  }
  else{
    next();
  }
}

const router = express.Router();

router.route("/").get(readClass).post(validateClass, catchAsync(createClass));

router.route("/:id").get(getSingleClass).put(validateClass, catchAsync(updateClass)).delete(deleteClass);


module.exports = router;  