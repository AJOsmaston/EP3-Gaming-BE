const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScoreboardSchema = new Schema({
  score: Number
})

const Scoreboard = mongoose.model("Scoreboard", ScoreboardSchema)

module.exports = Scoreboard

