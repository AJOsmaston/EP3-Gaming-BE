class Game {
  constructor() {
    this.score = 0; //player score
    this.health = 1000; //player health
  }

  attack() {
    this.score += this.#randomAttack();
  }

  takeDamage() {
    let hit = this.#randomDamage()
    this.health < hit ? this.health -= this.health : this.health -= hit
  }

  killPlayer() {
    this.health = 0;
  }

  checkDead() {
    return this.health <= 0 ? true : false
  }

  #randomAttack() {
    return Math.floor(Math.random()*100);
  }

  #randomDamage() {
    return Math.floor(Math.random()*25);
  }

}

module.exports = Game;