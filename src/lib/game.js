class Game {
  constructor() {
    this.score = 0 //player score
    this.health = 100 //player health
  }

  attack() {
    this.score += this.#randomNumber()
  }

  takeDamage() {
    this.health -= this.#randomNumber()
  }

  #randomNumber() {
    return Math.floor(Math.random()*100)
  }

}

module.exports = Game;