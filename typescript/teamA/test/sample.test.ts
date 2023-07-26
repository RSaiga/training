import {fizzBuzzTest} from "./fizzbuzz.test";

describe('SampleTest', () => {
    it('sample', () => {
        expect(1 + 1).toBe(2)
    })

    it('returnNumber1', () => {
        const num = fizzBuzzTest(1);
        expect(num).toBe(1)
    })

    it('returnNumber2', () => {
        const num = fizzBuzzTest(2);
        expect(num).toBe(2)
    })

    it('returnFizz', () => {
        const value = fizzBuzzTest(3);
        expect(value).toBe("Fizz")
    })

    it('returnBuzz', () => {
        const value = fizzBuzzTest(5);
        expect(value).toBe("Buzz")
    })

    it('returnFizzBuzz1', () => {
        const value = fizzBuzzTest(15);
        expect(value).toBe("FizzBuzz")
    })

    it('returnFizzBuzz2', () => {
        const value = fizzBuzzTest(30);
        expect(value).toBe("FizzBuzz")
    })
})

// # FizzBuzz
//
// 1から順番に数を入力し、その数を表示する関数を作成する
//
// ただし、
//
// その数が3で割り切れるなら"Fizz"
//
// その数が5で割り切れるなら"Buzz"
//
// 両方で割り切れるなら"FizzBuzz"を返す