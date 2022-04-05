const mongoose = require('mongoose');

const LevelSchema = new mongoose.Schema({
    id: mongoose.SchemaTypes.ObjectId,
    username: String,
    level: Number,
    uuid: String,
    xp: Number,
    carrotNumber: Number,
    perks: [],
    lastConnected: Date,
    completedKatas: []
});
  
  
const Level = mongoose.model('Level', LevelSchema);

module.exports = Level;
