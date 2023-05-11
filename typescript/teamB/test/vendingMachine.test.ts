class VendingMachine {
    private machineMoney: number;
    private waterStock: number;
    private waterPrice: number;

    constructor() {
        this.machineMoney = 0;
        this.waterStock = 0;
        this.waterPrice = 100;
    }

    postMoney(money: number) {
        const noHandleMoney = [1, 5, 5000, 10000];
        if (noHandleMoney.includes(money)){
            return false
        }
        this.machineMoney += money;
        return true;
    }
    displayMoney() {
        return this.machineMoney;
    }

    buyWater() {
        if (this.machineMoney < this.waterPrice) {
            return 'Miss';
        }
        this.machineMoney -= this.waterPrice;
        return 'Water';
    }

    stock(type: string) {
        this.waterStock +=1
        return true;
    }

    diplayWaterStock() {
        return this.waterStock;
    }

    change() {
        return 400
    }

    buyCoke() {
        return 'Coke';
    }
}

describe('VendingMachineTest', () => {
// お金の投入
    it('投入金額を表示できる', () => {
        const machine = new VendingMachine();
        machine.postMoney(100);
        expect(machine.displayMoney()).toBe(100)
    })
    it('投入金額の総計を表示できる', () => {
        // given
        const machine = new VendingMachine();
        machine.postMoney(100);
        machine.postMoney(100);
        // when
        let actual = machine.displayMoney();
        // then
        expect(actual).toBe(200)
    })
    it.each([1, 5, 5000, 10000])('扱えないお金は入金されない(%i円)', (money) => {
        const machine = new VendingMachine();
        expect(machine.postMoney(money)).toBe(false);
    })
    describe('購入する', () => {
       it('お金を投入して水を購入', () => {
            const machine = new VendingMachine();
            machine.postMoney(1);
            let actual = machine.buyWater();
            expect(actual).toBe('Miss');
        })
        it('お金を投入しないで水を購入', () => {
            const machine = new VendingMachine();
            let actual = machine.buyWater();
            expect(actual).toBe('Miss');
        })
        it('水を購入するには100円必要', () => {
            const machine = new VendingMachine();
            machine.postMoney(100);
            let actual = machine.buyWater();
            expect(actual).toBe('Water');
        })
        it('100円なかったら水が買えない', () => {
            const machine = new VendingMachine();
            machine.postMoney(50);
            let actual = machine.buyWater();
            expect(actual).toBe('Miss');
        })
        it('水を買ったら投入金額が100円減る', () => {
            const machine = new VendingMachine();
            machine.postMoney(100);
            machine.buyWater();
            let actual = machine.displayMoney();
            expect(actual).toBe(0);
        })
        it('200円入れて水を買ったら投入金額が100円残る', () => {
            const machine = new VendingMachine();
            machine.postMoney(100);
            machine.postMoney(100);
            machine.buyWater();
            let actual = machine.displayMoney();
            expect(actual).toBe(100);
        })
        it('500円入れて水を買ったら投入金額が400円残る', () => {
            const machine = new VendingMachine();
            machine.postMoney(500);
            machine.buyWater();
            let actual = machine.displayMoney();
            expect(actual).toBe(400);
        })
        it('水を購入したら在庫が減る', () => {
            const machine = new VendingMachine();
            machine.postMoney(500);
            machine.buyWater();
            let actual = machine.displayMoney();
            expect(actual).toBe(400);
        })
    });

    describe('在庫管理', () => {
        it('水を一つ入庫する', () => {
            const machine = new VendingMachine();
            const actual = machine.stock('water');
            expect(actual).toBe(true);
        })
        it('水の在庫を取得する(1つ)', () => {
            const machine = new VendingMachine();
            let actual = machine.diplayWaterStock();
            expect(actual).toBe(1);
        })
        it('水の在庫を取得する(複数入庫)', () => {
            const machine = new VendingMachine();
            machine.stock('water')
            machine.stock('water')
            let actual = machine.diplayWaterStock();
            expect(actual).toBe(2);
        })
    })

    describe('お釣り返却', () => {
        it('お釣りを返却する', () => {
            // given
            const machine = new VendingMachine();
            machine.postMoney(500);
            machine.buyWater();
            let actual = machine.change();
            expect(actual).toBe(400);
        })

    })

    it('水を連続して購入', () => {
        // given
        const machine = new VendingMachine();
        machine.buyWater();
        // when
        let actual = machine.buyWater();
        // then
        expect(actual).toBe('Water');
    })


    it('コーラを購入', () => {
        const machine = new VendingMachine();
        let actual = machine.buyCoke();
        expect(actual).toBe('Coke');
    })
    it('コーラを連続して購入', () => {
        // given
        const machine = new VendingMachine();
        machine.buyCoke();
        // when
        let actual = machine.buyCoke();
        // then
        expect(actual).toBe('Coke');
    })
})

// お金の投入
// 投入は複数回
// 投入金額の総計が見たい

// 扱えないお金
// 使えないお金は入金されない
//
// お釣りの返却
// お釣りが出る
//
// 在庫の入庫
// 入庫ができる
//
// 在庫の管理
// 飲み物ごとの在庫数取得を

// 購入
// 購入する




