const Game = require('../lib/game');


describe('Game', () => {

  beforeEach(() => {
    this.newGame = new Game();
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
});
