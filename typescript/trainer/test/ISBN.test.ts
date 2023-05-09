// 10桁の数字
// 13桁の数字

class ISBN {
    private value: string;
    constructor(value: string) {
        this.value = value;

    }

    isValid() {
        return this.value.length == 10;
    }
}

describe("ISBN", ()=>{
    it('10桁の数字であれば正常であること', function () {
        expect(new ISBN("1234567890").isValid()).toBe(true)
    });
    it('11桁の数字であれば不正であること', function () {
        expect(new ISBN("12345678901").isValid()).toBe(false)
    });
    it('9桁の数字であれば不正であること', function () {
        expect(new ISBN("123456789").isValid()).toBe(false)
    });
})