from teamD.src.fizz_buzz import fizz_buzz

class TestFizzBuzz:
  def test_fizz_buzz(self):
    # 3で割り切れる（Fizz）
    assert fizz_buzz(3) == 'Fizz'
    assert fizz_buzz(24) == 'Fizz'
    # 5で割り切れる（Buzz）
    assert fizz_buzz(5) == 'Buzz'
    assert fizz_buzz(100) == 'Buzz'
    # 3でも5で割り切れる（FizzBuzz）
    assert fizz_buzz(15) == 'FizzBuzz'
    assert fizz_buzz(30) == 'FizzBuzz'
    # 両方で割り切れない（inputの値）
    assert fizz_buzz(1) == 1
    assert fizz_buzz(61) == 61

