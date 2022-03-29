const express = require('express');
const { getLevel, updateLevel, createLevel } = require('../controllers/level')


const router = express.Router();

router.get('/level', getLevel);
router.post('/level', updateLevel);
// router.post('/level', createLevel);

module.exports = router;