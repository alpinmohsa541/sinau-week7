const express = require('express');
const router = express.Router();
const { getUsers, getUserById } = require('../controllers/userController');

router.get('/users', getUsers); // Handles query
router.get('/users/:id', getUserById); // Handles params

module.exports = router;
