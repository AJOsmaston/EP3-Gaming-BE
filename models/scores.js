const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
  user: String,
  score: Number
})

const Scores = mongoose.model("scores", ScoreSchema)

module.exports = Scores;
