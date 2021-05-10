const express = require('express');

const {
  createUser,
  readUser,
  updateUser,
  deleteUser,
  getSingleUser,
} = require('../controllers/usersController');



const router = express.Router();

router.route("/").get(readUser).post(createUser);

router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);


module.exports = router;