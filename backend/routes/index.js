// routes/index.js
const express = require('express');
const router = express.Router();
const { health } = require('../controllers/healthController');

router.get('/', (req, res) => res.send('Welcome to Backend API'));
router.get('/health', health);

module.exports = router;
