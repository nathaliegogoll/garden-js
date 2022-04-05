const express = require('express');
const { questions, questionsWithId } = require('../controllers/question')

const router = express.Router();

router.get('/', questions);
router.get('/:id', questionsWithId);
module.exports = router;