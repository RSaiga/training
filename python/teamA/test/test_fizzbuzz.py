from ..src.fizzbuzz import fizzbuzz

class TestFizzBuzz:
    def test_fizzbuzz(self):
        assert fizzbuzz(1) == 1
        assert fizzbuzz(3) == 'Fizz'
        assert fizzbuzz(5) == 'Buzz'
        assert fizzbuzz(15) == 'FizzBuzz'





# FizzBuzz
# 1から順番に数を入力し、その数を表示する関数を作成する
# ただし、
# その数が3で割り切れるなら"Fizz"
# その数が5で割り切れるなら"Buzz"
# 両方で割り切れるなら"FizzBuzz"を返す