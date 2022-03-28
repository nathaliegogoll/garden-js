const express = require('express');
const { questions } = require('../controllers/question')

const router = express.Router();

router.get('/', questions);

module.exports = router;