from teamA.src.fizzbuzz import Fizzbuzz


class TestFizzbuzz:

    def test_input_3(self):
        fizbuzz = Fizzbuzz();
        assert fizbuzz.fizzbuzz(3) == 'Fizz'

  def test_input_5(self):
      assert fizzbuzz(5) == 'Buzz'

  def test_input_15(self):
      assert fizzbuzz(5) == 'FizzBuzz'

  def test_input_other_num(self):
      assert fizzbuzz(2) == 2

  def test_input_other_str(self):
      str = 'This is test !!'
      assert fizzbuzz(str)  == str