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
    let hit = this.#destroy()
    this.health < hit ? this.health -= this.health : this.health -= hit
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

  #destroy() {
    return 1000000000000;
  }

}

module.exports = Game;