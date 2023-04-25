
def fizzbuzz(num):
    if num == 0:
        return num
    elif num % 3 == 0 and num % 5 == 0:
        return 'fizzbuzz'
    elif num % 3 == 0:
        return 'fizz'
    elif num % 5 == 0:
        return 'buzz'
    return num
