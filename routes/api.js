// const { response } = require("express");
const express = require("express");
// const { Db } = require("mongodb");
const Game = require("../src/lib/game");
const router = express.Router();
const UserModel = require('../models/user')

router.get("/", (req, res) => {
  res.send("Hello World")
});

// USER ROUTES ----------------------------------

router.post("/signup", (req, res, next) => {
  const user = new UserModel({
    username: "Kostas",
    password: "123456"
  })
  
  user.save()
     .then(doc => {
       console.log(doc)
     })
     .catch(err => {
       console.error(err)
     })
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
