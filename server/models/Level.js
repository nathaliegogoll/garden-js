const mongoose = require('mongoose');

const LevelSchema = new mongoose.Schema({
    id: mongoose.SchemaTypes.ObjectId,
    username: String,
    level: Number,
    uuid: String,
    xp: Number,
    carrotNumber: Number,
    perks: [],
    lastConnected: Date
});
  
  
const Level = mongoose.model('Level', LevelSchema);

module.exports = Level;
