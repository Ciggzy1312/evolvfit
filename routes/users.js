const express = require('express');
const router = express.Router()
const { createUser, createUserMeal, updateUserMeal } = require('../controllers/user');
const { optimizedMeal } = require('../controllers/foodItem');

router.post("/", createUser)
router.post("/:id", createUserMeal)
router.patch("/:id/:mealIndex", updateUserMeal)

router.get("/optimizedmeal", optimizedMeal)

module.exports = router;