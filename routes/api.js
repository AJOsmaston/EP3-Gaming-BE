const express = require("express");
const Game = require("../src/lib/game");
const router = express.Router();
const Scoreboard = require('../models/scoreboard')
const UserModel = require('../models/user')
const passport = require('passport');


router.get("/", (req, res) => {
  res.send("Hello World")
});

// USER ROUTES ----------------------------------

router.post("/signup", (req, res, next) => {
  UserModel.register(new Account({ username : req.body.username }), req.body.password, (err, account) => {
    if (err) {
      return res.render('register', { error : err.message });
    }
  })
})

router.post("/login", 
passport.authenticate('local', 
{ 
  successRedirect: '/start-game',
  failureRedirect: '/login' 
}), (req, res, next) => {
  req.session.save((err) => {
      if (err) {
          return next(err);
      }
      res.redirect('/');
  })
})

router.get('/logout', (req, res, next) => {
  req.logout();
  req.session.save((err) => {
      if (err) {
          return next(err);
      }
      res.redirect('/');
  });
})

// GAME ROUTES ----------------------------------

router.get("/start-game", (req, res, next) => {
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
