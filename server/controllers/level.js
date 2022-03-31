const mongoose = require('mongoose')
const Level = require('../models/Level')
const ErrorResponse = require('../utils/errorResponse')

const createLevel = async (req, res, next) => {
    try {
        const level = await Level.create(
            { xp: 0 ,
            level: 0,
            username: req.body.username,
            carrotNumber: 5,
            perks : [],
            lastConnected: Date.now(),
            uuid: req.params.id
        });
        res.json(level);
    } catch (error) {
        console.log(error.message);
    }
}

const getLevel = async (req, res, next) => {
    try {
        const levelInfo = await Level.findOne({ uuid: req.params.id});
        res.json(levelInfo);
    } catch (error) {
        console.log(error.message);
    }
}

const updateLevel = async (req, res, next) => {
    const { id } = req.params;
    const { xp, carrotNumber, perks, uuid, username } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return next(new ErrorResponse("no valid id", 404));
    } 
    const updateLevel = {
        _id: id,
        username,
        xp,
        carrotNumber,
        perks,
        lastConnected: Date.now(),
        uuid,
    }
    await Level.findByIdAndUpdate(id, updateLevel, { new: true });
    res.json(updateLevel);
}

module.exports = {
    getLevel,
    updateLevel,
    createLevel
}