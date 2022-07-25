const express = require('express');
const router = express.Router()
const { createMeal } = require('../controllers/meal');

router.post("/", createMeal)

module.exports = router;