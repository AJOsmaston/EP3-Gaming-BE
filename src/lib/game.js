class Game {
  constructor() {
    this.score = 0
  }

  attack() {
    this.score += this.#randomNumber()
  }

  #randomNumber() {
    return Math.floor(Math.random()*100)
  }

}

module.exports = Game;