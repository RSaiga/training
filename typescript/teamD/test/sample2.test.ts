class VendingMachine {
  mn: Money = new Money;
  dk: Drink = new Drink;
  // お金投入
  put(money: any) {
    try {
      // 1、5、5000、10000円投入不可
      if (!this.mn.check(money)) {
        throw new Error("1、5、5000、10000円は投入できません")
      }
      this.mn.total += money;
    } catch (ex: any) {
      if (ex.message == "1、5、5000、10000円は投入できません") {
        throw new Error("1、5、5000、10000円は投入できません")
      } else {
        throw new Error("硬貨以外は投入できません")
      }
    }
  }
  // お釣り返却
  change(): number {
    return this.mn.total;
  }
  // 在庫入庫
  store(item: string) {

  }
  // 購入
  purchase(item: string) {
    if (item == "Cola" && this.dk.COLA <= this.mn.total) {
      this.mn.total -= this.dk.COLA;
      return "Cola";
    }
    if (item == "Water" && this.dk.WATER <= this.mn.total) {
      this.mn.total -= this.dk.WATER;
      return "Water";
    }
    return false;
  }

}
class Drink {
  COLA: number = 120;
  WATER: number = 100;
}
class Money {
  total:number = 0;
  store(digit: number) {
    if (!this.check(digit)) {
      return 0;
    }
    this.total += digit;
    return this.total;
  }
  // checkIfCoin(digit: any) {
  //   if (!Number(digit)) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
  check(digit: any) {
    if (digit === 1) {
      return false;
    } else if(digit === 5) {
      return false;
    } else if(digit === 5000) {
      return false;
    } else if(digit === 10000) {
      return false;
    } else {
      return true;
    }
  }
}

describe('SampleTest', () => {
  it('InsertMoney100', () => {
    const total = new Money().store(100);
    expect(total).toBe(100)
  })
  it('InsertMoney50', () => {
    const total = new Money().store(50);
    expect(total).toBe(50)
  })
  it('InsertMoney10', () => {
    const total = new Money().store(10);
    expect(total).toBe(10)
  })
  it('InsertMoneySum', () => {
    const mn = new Money();
    mn.store(10);
    mn.store(50);
    const total = mn.store(100);
    expect(total).toBe(160)
  })
  it('InsertMoney1', () => {
    const total = new Money().check(1);
    expect(total).toBe(false)
  })
  it('InsertMoney5', () => {
    const total = new Money().check(5);
    expect(total).toBe(false)
  })
  it('InsertMoney5000', () => {
    const total = new Money().check(5000);
    expect(total).toBe(false)
  })
  it('InsertMoney10000', () => {
    let vm = new VendingMachine();
    try {
      vm.put(10000);
    } catch(ex: any) {
      expect(ex.message).toBe("1、5、5000、10000円は投入できません")
    }
  })
  // 硬貨投入 - 硬貨チェック
  it('InsertMoney', () => {
    let vm = new VendingMachine();
    try {
      vm.put("abc");
    } catch(ex: any) {
      expect(ex.message).toBe("硬貨以外は投入できません")
    }
  })
  it('DrinkSelectColaLow', () => {
    let vm = new VendingMachine();
    vm.put(100);
    const drink = vm.purchase("Cola");
    expect(drink).toBe(false)
  })
  it('DrinkSelectColaJust', () => {
    let vm = new VendingMachine();
    vm.put(120);
    const drink = vm.purchase("Cola");
    expect(drink).toBe("Cola")
  })
  it('DrinkSelectColaOver', () => {
    let vm = new VendingMachine();
    vm.put(180);
    const drink = vm.purchase("Cola");
    expect(drink).toBe("Cola")
  })
  it('DrinkSelectWaterLow', () => {
    let vm = new VendingMachine();
    vm.put(50);
    const drink = vm.purchase("Water");
    expect(drink).toBe(false)
  })
  it('DrinkSelectWaterJust', () => {
    let vm = new VendingMachine();
    vm.put(100);
    const drink = vm.purchase("Water");
    expect(drink).toBe("Water")
  })
  it('DrinkSelectWaterOver', () => {
    let vm = new VendingMachine();
    vm.put(50);
    vm.put(100);
    const drink = vm.purchase("Water");
    expect(drink).toBe("Water")
  })
  //投入金額の総計
  it('MoneySum', () => {
    let vm = new VendingMachine();
    vm.put(10);
    vm.put(50);
    vm.put(100);
    const total = vm.mn.total;
    expect(total).toBe(160)
  })
  //お釣り
  it('ChangeMoney', () => {
    let vm = new VendingMachine();
    vm.put(10);
    vm.put(50);
    vm.put(100);
    vm.purchase("Water");
    const total = vm.mn.total;
    expect(total).toBe(60);
  })
})