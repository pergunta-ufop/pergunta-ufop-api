const express = require('express');
const router = express.Router();
const homeService = require('../services/homeService.js');

router.get('/', homeService.home);

module.exports = router;
