class VendingMachine {
    private machineMoney: number;

    constructor() {
        this.machineMoney = 0;
    }

    postMoney(money: number) {
        const noHnadleMoney = [1, 5, 5000, 10000];
        if (noHnadleMoney.includes(money)){
            return false
        }
        this.machineMoney += money;
        return true;
    }
    displayMoney() {
        return this.machineMoney;
    }
}

describe('VendingMachineTest', () => {
// お金の投入
    it('お金が投入できる', () => {
        const machine = new VendingMachine();
        expect(machine.postMoney(100)).toBe(true)
    })
    it('投入金額を表示できる', () => {
        const machine = new VendingMachine();
        machine.postMoney(100);
        expect(machine.displayMoney()).toBe(100)
    })
    it('投入金額の総計を表示できる', () => {
        const machine = new VendingMachine();
        machine.postMoney(100);
        machine.postMoney(100);
        expect(machine.displayMoney()).toBe(200)
    })
    it('扱えないお金は入金されない', () => {
        const machine = new VendingMachine();
        expect(machine.postMoney(1)).toBe(false);
        expect(machine.postMoney(5)).toBe(false);
        expect(machine.postMoney(5000)).toBe(false);
        expect(machine.postMoney(10000)).toBe(false);
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
//
// 購入
// 購入する



