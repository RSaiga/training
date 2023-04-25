class TestSample:
  def test_3の倍数かつ5の倍数でないならFizzを返す(self):
    assert fiz_buz(3) == "Fizz"

  def test_5の倍数かつ3の倍数でないならBuzzを返す(self):
    assert fiz_buz(5) == "Buzz"

  def test_15の倍数ならFizzBuzzを返す(self):
    assert fiz_buz(15) == "FizzBuzz"

  def test_3でも5でもで割り切れないもの(self):
    assert fiz_buz(2) == 2
