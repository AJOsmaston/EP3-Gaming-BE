const Game = require('../lib/game');

describe('Game', () => {

  beforeEach(() => {
    this.newGame = new Game();
    jest.spyOn(global.Math, 'random').mockRestore()
  });

  describe('#score', () => {
    it('has a default score', () => {
      expect(this.newGame.score).toBe(0);
    })
  });

  describe('#attack', () => {
    it('increases score', () => {
      this.newGame.attack();

      expect(this.newGame.score).toBeGreaterThan(0);
    });

    it('increase score by a random amount', () => {
      jest.spyOn(global.Math, 'random').mockReturnValue(0.1);
      this.newGame.attack();

      expect(this.newGame.score).toBe(10);
    });
  });

  describe('#takeDamage', () => {
    it('decreases player health', () => {
      let maxHealth = 1000;
      this.newGame.takeDamage();
  
      expect(this.newGame.health).toBeLessThan(maxHealth);
    })

    it('decreases players health by a random amount', () => {
      jest.spyOn(global.Math, 'random').mockReturnValue(0.2);
      this.newGame.takeDamage();

      expect(this.newGame.health).toBe(995);
    });

  });

  describe('#killPlayer', () => {
    it('Kills the player', () => {
      this.newGame.killPlayer();

      expect(this.newGame.health).toBe(0);
    })
  })

  describe('#checkDead', () => {
    it('returns false if health > 0', () => {
      expect(this.newGame.checkDead()).toBe(false);
    });

    it('returns true if health = 0', () => {
      jest.spyOn(global.Math, 'random').mockReturnValue(1);
      for (let i = 0; i < 40; i++) {
        this.newGame.takeDamage();
      }      

      expect(this.newGame.health).toBe(0);
      expect(this.newGame.checkDead()).toBe(true);
    });
  });
});
