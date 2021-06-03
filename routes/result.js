const express = require('express');
const catchAsync = require('../utils/catchAsync');
const { resultSchema } = require('../schemas');

const {
  createResult,
  readResult,
  updateResult,
  deleteResult,
  getSingleResult,
} = require('../controllers/resultsController');


const validateResult = (req, res, next) => {
  const {error} = resultSchema.validate(req.body);

  if(error){
    const msg = error.details.map(el => el.message).join(',')
    throw new ExpressError(msg, 400)
  }
  else{
    next();
  }
}

const router = express.Router();

router.route("/").get(readResult).post(validateResult, catchAsync(createResult));

router.route("/:id").get(getSingleResult).put(validateResult, catchAsync(updateResult)).delete(deleteResult);


module.exports = router;  