const express = require('express');

const {
  createResult,
  readResult,
  updateResult,
  deleteResult,
  getSingleResult,
} = require('../controllers/resultsController');



const router = express.Router();

router.route("/").get(readResult).post(createResult);

router.route("/:id").get(getSingleResult).put(updateResult).delete(deleteResult);


module.exports = router;  