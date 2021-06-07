const express = require('express');
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const verify = require('../Auth/verifyUser');
const { userSchema } = require('../schemas');
const {
  registerUser,
  loginUser,
  jwtTest,
  readUser,
  updateUser,
  deleteUser,
  getSingleUser
} = require('../controllers/usersController');


const validateUser = (req, res, next) => {
  const {error} = userSchema.validate(req.body);

  if(error){
    const msg = error.details[0].message;
    throw new ExpressError(msg, 400)
  }
  else{
    next();
  }
}

const router = express.Router();

router.route("/register").post(validateUser, registerUser);
router.route("/login").post(loginUser);
router.route("/test").get(verify, jwtTest);

router.route("/").get(readUser);

router.route("/:id").get(getSingleUser).put(validateUser, catchAsync(updateUser)).delete(deleteUser);



module.exports = router;