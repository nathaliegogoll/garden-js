const express = require('express');
const { getLevel, updateLevel, createLevel } = require('../controllers/level')
const router = express.Router();
router.get('/', getLevel);
router.put('/:id', updateLevel);
router.post('/', createLevel);
module.exports = router;