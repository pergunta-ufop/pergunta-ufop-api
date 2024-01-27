const express = require('express');
const router = express.Router();
const chatbotService = require('../services/chatbotService.js');

router.get('/start', chatbotService.start);
router.get('/', chatbotService.query);
router.get('/commands', chatbotService.commands);

module.exports = router;
