def fizz_buzz(input_value):
  if isFizzBuzz(input_value):
    return 'FizzBuzz'
  elif isFizz(input_value):
    return 'Fizz'
  elif isBuzz(input_value):
    return 'Buzz'
  return input_value

def isFizzBuzz(input_value):
  return input_value % 15 == 0

def isFizz(input_value):
  return input_value % 3 == 0

def isBuzz(input_value):
  return input_value % 5 == 0
