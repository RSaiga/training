class FizzBuzz {
  convert(number: number) {
    if (number === 3) {
      return "Fizz"
    }
    return String(number)
  }
}

describe('FizzBuzz',() => {
  it('渡された数字を返す', function () {
    let actual = new FizzBuzz().convert(1)
    expect(actual).toBe("1")
  });
  it('渡された数字を返す_2を入れたら2を返す', function () {
    let actual = new FizzBuzz().convert(2)
    expect(actual).toBe("2")
  });
  it('渡された数字を返す_3を入れたらFizzを返す', function () {
    let actual = new FizzBuzz().convert(3)
    expect(actual).toBe("Fizz")
  });
})