const Level = require('../models/Level')

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