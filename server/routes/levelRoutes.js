const express = require('express');
const { getLevel, updateLevel, createLevel } = require('../controllers/level')
const router = express.Router();

router.get('/:id', getLevel);
router.put('/:id', updateLevel);
router.post('/:id', createLevel);
module.exports = router;