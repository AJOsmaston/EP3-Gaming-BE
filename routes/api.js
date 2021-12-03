const express = require("express");
const Game = require("../src/lib/game");
const router = express.Router();
const Scores = require('../models/scores')
const UserModel = require('../models/user');



router.get("/", (req, res) => {
  res.send("Hello World")
});

// USER ROUTES ----------------------------------

router.post("/signup", (req, res) => {
  const user = new UserModel({
    username: req.body.username,
    password: req.body.password
  })
  
  user.save()
     .then(doc => {
       console.log(doc)
     })
     .catch(err => {
       console.error(err)
     })
  res.json(req.body); // What do we return? Some sort of user session?
})

// GAME ROUTES ----------------------------------

router.get("/start-game", (req, res) => {
  newGame = new Game;

  let score = newGame.score
  let health = newGame.health
  let isDead = newGame.checkDead();
  
  res.status(200).json({ score: score, health: health, isDead: isDead })
})

router.get("/turn", (req, res) => {
  newGame.attack();
  newGame.takeDamage();

  let score = newGame.score
  let health = newGame.health
  let isDead = newGame.checkDead();

  res.status(200).json({ score: score, health: health, isDead: isDead })
})

router.get("/commit-score", (req, res) => {
  const addScore = async () => {
    const newScore = new Scores({ score: newGame.score })
    await newScore.save()
    console.log(`saved ${newScore}`)
  };
  addScore();

  res.status(200).json({ score: newGame.score })
})

router.get("/scoreboard", (req, res) => {
  const displayTenScore = async () => {
    const sortedScores = await Scores.find().sort({ score: -1 }).limit(10)
    res.status(200).json(sortedScores)
  }
  displayTenScore();
})

module.exports = router;
