const mongoose = require('mongoose')
const Level = require('../models/Level')
const ErrorResponse = require('../utils/errorResponse')

const createLevel = async (req, res, next) => {
    try {
        const level = await Level.create(
            { xp: 0 ,
            carrotNumber: 5,
            perks : [],
            lastConnected: Date.now()
        });
        res.json({level});
    } catch (error) {
        console.log(error.message);
    }
}

const getLevel = async (req, res, next) => {
    try {
        const levelInfo = await Level.findById(req.params.id);
        res.send(levelInfo);
    } catch (error) {
        console.log(error.message);
    }
}

const updateLevel = async (req, res, next) => {
    const { id } = req.params;
    const { xp, carrotNumber, perks } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return next(new ErrorResponse("no valid id", 404));
    } 
    const updateLevel = {
        xp,
        carrotNumber,
        perks,
        lastConnected: Date.now(),
        _id: id
    }
    await Level.findByIdAndUpdate(id, updateLevel, { new: true });
    res.json(updateLevel);
}

module.exports = {
    getLevel,
    updateLevel,
    createLevel
}