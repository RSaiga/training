function fizzBuzz(number: number): string {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'FizzBuzz'
  }
  if (number % 3 === 0) {
    return 'Fizz'
  }
  if (number % 5 === 0) {
    return 'Buzz'
  }
  return number.toString();
}



describe('FizzBuzz', () => {
  it('渡された数字を表示する', () => {
    expect(fizzBuzz(1)).toBe("1")
  })
  it('3で割り切れるならFizz', () => {
    expect(fizzBuzz(3)).toBe("Fizz")
  })
  it('5で割り切れるならBuzz', () => {
    expect(fizzBuzz(5)).toBe("Buzz")
  })
  it('3と5で割り切れるならFizzBuzz', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz")
  })
})