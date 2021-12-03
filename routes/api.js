const express = require("express");
const Game = require("../src/lib/game");
const router = express.Router();
const Scores = require("../models/scores");
const UserModel = require("../models/user");
const passport = require("passport");

router.get("/", (req, res) => {
  res.send("Hello World");
});

// USER ROUTES ----------------------------------

router.post("/signup", (req, res) => {
  Users=new UserModel({username : req.body.username});
  
  UserModel.register(Users, req.body.password, function(err, user) {
    if (err) {
      res.json({success:false, message:"Your account could not be saved. Error: ", err}) 
    }else{
      res.json({success: true, message: "Your account has been saved"})
    }
  });
})

router.post("/login", (req, res) => {
  if(!req.body.username){
    res.json({success: false, message: "Username was not given"})
  } else {
    if(!req.body.password){
      res.json({success: false, message: "Password was not given" })
    }else{
      passport.authenticate('local', function (err, user, info) { 
        if(err){
          res.json({success: false, message: err})
        } else{
          if (!user) {
            res.json({success: false, message: 'username or password incorrect'})
          } else{
            req.login(user, function(err){
              if(err){
                res.json({success: false, message: err})
              }else{
                res.json({success: true, message:"Authentication successful", user: req.user.id });
              }
            })
          }
        }
      })(req, res);
    }
  }
})

// GAME ROUTES ----------------------------------

router.get("/start-game", (req, res) => {
  newGame = new Game();

  let score = newGame.score;
  let health = newGame.health;
  let isDead = newGame.checkDead();

  res.status(200).json({ score: score, health: health, isDead: isDead });
});

router.get("/turn", (req, res) => {
  newGame.attack();
  newGame.takeDamage();

  let score = newGame.score;
  let health = newGame.health;
  let isDead = newGame.checkDead();

  res.status(200).json({ score: score, health: health, isDead: isDead });
});

router.get("/commit-score", (req, res) => {
  res.send("attempting to post something to mongodb");

  const addScore = async () => {
    const newScore = new Scores({ score: newGame.score });
    await newScore.save();
    console.log(`saved ${newScore}`);
  };

  addScore();

  //createAndSaveScoreboard()
});

module.exports = router;
