const Level = require('../models/Level')

const createLevel = async (req, res, next) => {
    const { xp, perks } = req.body
    try {
        const level = await Level.create(
            { id: userId },
            { xp: 0 },
            { perks : [] },
            { lastConnected: Date.now()}
            );
        
    } catch (error) {
        console.log(error.message);
    }
}

const getLevel = async (req, res, next) => {
    try {
        const levelInfo = await Level.findById(req.body);
        res.send(levelInfo);
    } catch (error) {
        console.log(error.message);        
    }
}
const updateLevel = async (req, res, next) => {
    Level.findOneAndUpdate(
        { id: req.body.id },
        { xp: req.body.xp },
        { perks : req.body.perks },
        { new: true },
        { lastConnected: Date.now()}
    );
    Level.save();
}
module.exports = {
    getLevel,
    updateLevel,
    createLevel
}
