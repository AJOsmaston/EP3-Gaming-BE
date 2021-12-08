class Game {
  constructor() {
    this.score = 0; //player score
    this.health = 1000; //player health
  }

  attack() {
    this.score += this.#randomNumber();
  }

  takeDamage() {
    let hit = this.#randomNumber()
    this.health < hit ? this.health -= this.health : this.health -= hit
  }

  checkDead() {
    return this.health <= 0 ? true : false
  }

  #randomNumber() {
    return Math.floor(Math.random()*100);
  }

}

module.exports = Game;