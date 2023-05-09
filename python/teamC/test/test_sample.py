def fizz_buzz(num):
  if num % 5 == 0 and num % 3 == 0:
    return "FizzBuzz"
  elif num % 3 == 0:
    return "Fizz"
  elif num % 5 == 0:
    return "Buzz"
  else:
    return num


class TestSample:
  def test_divide_3(self):
    assert fizz_buzz(3) == "Fizz"

  def test_divide_3_2(self):
    assert fizz_buzz(6) == "Fizz"

  def test_divide_3_3(self):
    assert fizz_buzz(9) == "Fizz"

  def test_divide_5_1(self):
    assert fizz_buzz(5) == "Buzz"

  def test_divide_5_2(self):
    assert fizz_buzz(10) == "Buzz"

  def test_divide_15(self):
    assert fizz_buzz(15) == "FizzBuzz"

  def test_not_divide_3_5(self):
    assert fizz_buzz(11) == 11
