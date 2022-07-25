const express = require('express');
const router = express.Router()
const { createFoodItem } = require('../controllers/foodItem');

router.post("/", createFoodItem)

module.exports = router;