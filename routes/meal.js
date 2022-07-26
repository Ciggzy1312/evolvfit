const express = require('express');
const router = express.Router()
const { createMeal, updateMeal } = require('../controllers/meal');

router.post("/", createMeal)

router.patch("/:id", updateMeal)

module.exports = router;