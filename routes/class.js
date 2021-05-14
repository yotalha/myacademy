const express = require('express');

const {
  createClass,
  readClass,
  updateClass,
  deleteClass,
  getSingleClass,
} = require('../controllers/classesController');



const router = express.Router();

router.route("/").get(readClass).post(createClass);

router.route("/:id").get(getSingleClass).put(updateClass).delete(deleteClass);


module.exports = router;  