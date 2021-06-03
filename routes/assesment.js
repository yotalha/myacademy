const express = require('express');
const catchAsync = require('../utils/catchAsync');
const { assesmentSchema } = require('../schemas');


const {
  createAssesment,
  readAssesment,
  updateAssesment,
  deleteAssesment,
  getSingleAssesment,
} = require('../controllers/assesmentsController');


const validateAssesment = (req, res, next) => {
  const {error} = assesmentSchema.validate(req.body);

  if(error){
    const msg = error.details.map(el => el.message).join(',')
    throw new ExpressError(msg, 400)
  }
  else{
    next();
  }
}

const router = express.Router();

router.route("/").get(readAssesment).post(validateAssesment, catchAsync(createAssesment));

router.route("/:id").get(getSingleAssesment).put(validateAssesment, catchAsync(updateAssesment)).delete(deleteAssesment);


module.exports = router;  