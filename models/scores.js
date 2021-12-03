const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScoresSchema = new Schema({
  score: Number
})

const Scores = mongoose.model("Scores", ScoresSchema)

module.exports = Scores;

