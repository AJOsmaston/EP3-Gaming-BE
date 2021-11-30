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


  describe('#damage', () => {

    it('decreases player health', () => {
      this.newGame.takeDamage();
  
      expect(this.newGame.health).toBeLessThan(100);
    })

    it('decreases players health by a random amount', () => {
      jest.spyOn(global.Math, 'random').mockReturnValue(0.2);
      this.newGame.takeDamage();

      expect(this.newGame.health).toBe(80);
    });

  });

});
