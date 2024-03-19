from src.legacy.tennis import TennisGame1


class TestTennis:
  def test_sample(self):
    game = TennisGame1('p1', 'p2')
    game.won_point('p1')
    assert game.score() == 'Fifteen-Love'
