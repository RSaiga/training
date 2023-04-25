def fizzbuzz(number):
    msg = ''

    # 3の倍数か否か
    if number % 3 == 0:
        msg += 'Fizz'

    # 5の倍数か否か
    if number % 5 == 0:
        msg += 'Buzz'

    if msg != '':
        return msg

    return number
