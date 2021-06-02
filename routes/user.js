const express = require('express');
const catchAsync = require('../utils/catchAsync');
const { userSchema } = require('../schemas');
const {
  createUser,
  readUser,
  updateUser,
  deleteUser,
  getSingleUser
} = require('../controllers/usersController');


const validateUser = (req, res, next) => {
  const {error} = userSchema.validate(req.body);

  if(error){
    const msg = error.details.map(el => el.message).join(',')
    throw new ExpressError(msg, 400)
  }
  else{
    next();
  }
}

const router = express.Router();

router.route("/").get(readUser).post(validateUser, catchAsync(createUser));

router.route("/:id").get(getSingleUser).put(validateUser, catchAsync(updateUser)).delete(deleteUser);



module.exports = router;