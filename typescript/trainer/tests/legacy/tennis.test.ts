import {TennisGame} from "../../src/legacy";

describe('example', () => {
  it('should ', () => {
    const tennisGame = new TennisGame('p1', 'p2');
    tennisGame.wonPoint('p1');
    expect(tennisGame.getScore()).toBe('Love-Fifteen')
  });
})