
class VendingMachine {
    constructor() {
    }

    stock (stockDrink: number) {
        return true;
    }

    input (price: number) {
        return price;
    }

    buy (drinkName: string) {
        return drinkName;
    }

    change (drinkName: string) {
        return drinkName;
    }
}


describe('ストーリー', () => {
    it('水買う', () => {
        const v = new VendingMachine();
        v.stock(1);
        v.input(100);
        const actual = v.buy('water');
        const change = v.change();

        expect(actual).toBe("water");
        expect(change).toBe(0);
    })
})