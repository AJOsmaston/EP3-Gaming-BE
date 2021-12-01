const { response } = require("express");
const express = require("express");
const Game = require("../src/lib/game");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World")
});

// USER ROUTES ----------------------------------

router.post("/signup", (req, res, next) => {
  console.log(req.body.username); // Now the username and password from the body need to go to the db
  res.json(req.body); // What do we return?
})

// GAME ROUTES ----------------------------------
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

module.exports = router;
