class FizzBuzz {
    check(digit: number) {
        if (digit % 3 == 0 && digit % 5 == 0) {
            return "FizzBuzz";
        } else if(digit % 3 == 0) {
            return "Fizz";
        } else if (digit % 5 == 0) {
            return "Buzz";
        }
        return digit;
    }
}

describe('SampleTest', () => {
    it('fizzBuzz1', () => {
        const digit = new FizzBuzz().check(1);
        expect(digit).toBe(1)
    })
    it('fizzBuzz2', () => {
        const digit = new FizzBuzz().check(2);
        expect(digit).toBe(2)
    })
    it('fizzBuzz3', () => {
        const digit = new FizzBuzz().check(3);
        expect(digit).toBe("Fizz")
    })
    it('fizzBuzz4', () => {
        const digit = new FizzBuzz().check(4);
        expect(digit).toBe(4)
    })
    it('fizzBuzz5', () => {
        const digit = new FizzBuzz().check(5);
        expect(digit).toBe("Buzz")
    })
    it('fizzBuzz9', () => {
        const digit = new FizzBuzz().check(9);
        expect(digit).toBe(9)
    })
    it('fizzBuzz15', () => {
        const digit = new FizzBuzz().check(15);
        expect(digit).toBe("FizzBuzz")
    })
    it('fizzBuzz30', () => {
        const digit = new FizzBuzz().check(30);
        expect(digit).toBe("FizzBuzz")
    })
})