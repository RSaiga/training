function counter(count: number) {

  let fifteenResult = count % 15;
  if(fifteenResult === 0) {
    return "FizzBuzz"
  }

  let threeResult = count % 3;
  if(threeResult === 0){
    return "Fizz"
  }

  let fiveResult = count % 5;
  if(fiveResult === 0){
    return "Buzz"
  }

}

describe('test', () => {
  it('Fizz valid', function () {
    const actual = counter(3);
    expect(actual).toBe("Fizz")
  });
  it('Buzz valid', function () {
    const actual  = counter(5);
    expect(actual).toBe("Buzz")
  });
  it('FizzBuzz valid', function () {
    const actual = counter(15);
    expect(actual).toBe("FizzBuzz")
  });
})