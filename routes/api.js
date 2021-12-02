const express = require("express");
const Game = require("../src/lib/game");
const router = express.Router();
const Scoreboard = require('../models/scoreboard')

router.get("/", (req, res) => {
  res.send("Hello World")
});

router.get("/startGame", (req, res, next) => {
  newGame = new Game;

  let score = newGame.score
  let health = newGame.health
  let isDead = newGame.checkDead();
  
  res.status(200).json({ score: score, health: health, isDead: isDead })
})

router.get("/turn", (req, res, next) => {
  newGame.attack();
  newGame.takeDamage();

  let score = newGame.score
  let health = newGame.health
  let isDead = newGame.checkDead();

  res.status(200).json({ score: score, health: health, isDead: isDead })
})

router.get("/commit-score", (req, res, next) => {

  res.send('attempting to post something to mongodb');

  const addScore = async () => {
    
    const newScore = new Scoreboard({ score: newGame.score })
    await newScore.save()
    console.log(`saved ${newScore}`)
    
   
  };

  addScore()
  

 

  //createAndSaveScoreboard()

})


module.exports = router;
