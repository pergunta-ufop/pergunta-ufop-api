const express = require('express');
const router = express.Router();
const chatbotService = require('../services/chatbotService.js');

router.get('/start', chatbotService.start);
router.get('/', chatbotService.query);

module.exports = router;
