const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController.js');
const chatbotController = require('../controllers/chatbotController.js');

// Home route
router.use('/home', homeController);
router.use('/chatbot', chatbotController);

module.exports = router;
