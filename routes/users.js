const express = require('express');
const router = express.Router()
const { createUser, updateUser, createUserMeal } = require('../controllers/user');

router.post("/", createUser)
router.post("/:id", createUserMeal)
router.patch("/:id", updateUser)

module.exports = router;