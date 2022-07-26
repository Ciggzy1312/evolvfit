const express = require('express');
const router = express.Router()
const { createUser, createUserMeal, updateUserMeal } = require('../controllers/user');

router.post("/", createUser)
router.post("/:id", createUserMeal)
router.patch("/:id/:mealIndex", updateUserMeal)

module.exports = router;