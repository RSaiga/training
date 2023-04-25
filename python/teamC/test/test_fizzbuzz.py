from teamC.src.fizzbuzz import fizzbuzz

class TestFizzbuzz:
  def test_fizzbuzz(self):
    assert fizzbuzz(1) == 1
    assert fizzbuzz(3) == 'Fizz'
    assert fizzbuzz(5) == 'Buzz'
    assert fizzbuzz(15) == 'FizzBuzz'
