class FizzBuzz {
  public exec(val: number):string {
    if (val %3 == 0 && val %5 == 0) {
      return 'FizzBuzz'
    }
    if (val % 3 == 0) {
      return 'Fizz'
    }
    if (val %5 == 0) {
      return 'Buzz'
    }
    return val.toString();
  }
}

describe('FizzBussTest', () => {
  //for (let i = 0; i < 100; i++) {
  //  if ($)

  //}
  it('3だとFizz', () => {
    expect(new FizzBuzz().exec(3)).toBe('Fizz')
  })
  it('6だとFizz', () => {
    expect(new FizzBuzz().exec(6)).toBe('Fizz')
  })
  it('5だとBuzz', () => {
    expect(new FizzBuzz().exec(5)).toBe('Buzz')
  })
  it('10だとBuzz', () => {
    expect(new FizzBuzz().exec(10)).toBe('Buzz')
  })
  it('15だとFizzBuzz', () => {
    expect(new FizzBuzz().exec(15)).toBe('FizzBuzz')
  })
})

