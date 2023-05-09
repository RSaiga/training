class Fizz {
    private value: number;
    constructor(value: number) {
        this.value = value;

    }

    isValid() {
        if (this.value % 3 == 0){
            if (this.value % 5 == 0){
                return 'FizzBuzz';
            }
            return 'Fizz';
        }
        if (this.value % 5 == 0){
            return 'Buzz';
        }
        return this.value
    }
}

describe('FizzBuzzTest', () => {
    it('3で割り切れる', () => {
        expect(new Fizz(3).isValid()).toBe('Fizz')
    })
    it('5で割り切れる', () => {
        expect(new Fizz(5).isValid()).toBe('Buzz')
    })
    it('3と5両方で割り切れる', () => {
        expect(new Fizz(15).isValid()).toBe('FizzBuzz')
    })
    it('入力値返す', () => {
        expect(new Fizz(14).isValid()).toBe(14)
    })
})
