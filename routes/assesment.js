const express = require('express');

const {
  createAssesment,
  readAssesment,
  updateAssesment,
  deleteAssesment,
  getSingleAssesment,
} = require('../controllers/assesmentsController');



const router = express.Router();

router.route("/").get(readAssesment).post(createAssesment);

router.route("/:id").get(getSingleAssesment).put(updateAssesment).delete(deleteAssesment);


module.exports = router;  