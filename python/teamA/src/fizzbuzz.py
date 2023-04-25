class Fizzbuzz:
    def fizzbuzz(num):
        # 入力値をチェックする
        if not type(num) == 'int':
            print(num)
            return
        # 3、5で割り切れる場合、FizzBuzzと表示
        # 3の場合、Fizzと表示
        # 5で割り切れる場合、Buzzと表示
        # 上記以外は入力値を表示
        if num % 3 == 0 and num % 5 == 0:
            print('FizzBuzz')
        elif num % 3 == 0:
            print('Fizz')
        elif num % 5 == 0:
            print('Buzz')
        else:
            print(num)



