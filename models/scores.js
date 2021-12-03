const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
  score: Number
})

const Scores = mongoose.model("Scoreboard", ScoreSchema)

module.exports = Scores;
