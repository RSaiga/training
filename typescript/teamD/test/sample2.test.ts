class Drink {
  cola: number = 120;
  select(item: string, total: number) {
    if (item == "Cola" && this.cola <= total) {
      return "Cola";
    }
  }
}
class Money {
  total:number = 0;
  insert(digit: number) {
    if (!this.check(digit)) {
      return 0;
    }
    this.total += digit;
    return this.total;
  }
  check(digit: any) {
    if (!Number(digit)) {
      return false;
    } else if (digit === 1) {
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
    const total = new Money().insert(100);
    expect(total).toBe(100)
  })
  it('InsertMoney50', () => {
    const total = new Money().insert(50);
    expect(total).toBe(50)
  })
  it('InsertMoney10', () => {
    const total = new Money().insert(10);
    expect(total).toBe(10)
  })
  it('InsertMoneySum', () => {
    let total = new Money().insert(10);
    total = new Money().insert(50);
    total = new Money().insert(100);
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
    const total = new Money().check(10000);
    expect(total).toBe(false)
  })
  it('InsertMoney', () => {
    const total = new Money().check("abc");
    expect(total).toBe(false)
  })
  it('DrinkSelectColaLow', () => {
    let total = new Money().insert(100);
    const selected = new Drink().select("Cola", total);
    expect(selected).toBe(false)
  })
  it('DrinkSelectColaJust', () => {
    const total = new Money().insert(120);
    const selected = new Drink().select("Cola", total);
    expect(selected).toBe("Cola")
  })
  it('DrinkSelectColaOver', () => {
    const total = new Money().insert(180);
    const selected = new Drink().select("Cola", total);
    expect(selected).toBe("Cola")
  })
  it('DrinkSelectWaterLow', () => {
    const digit = new Drink().select("Water", 50);
    expect(digit).toBe(false)
  })
  it('DrinkSelectWaterJust', () => {
    const digit = new Drink().select("Water", 100);
    expect(digit).toBe("Water")
  })
  it('DrinkSelectWaterOver', () => {
    const digit = new Drink().select("Water", 150);
    expect(digit).toBe("Water")
  })
  //お釣りが出る
  it('ChangeMoney', () => {
    let ms = new Money();
    ms.insert(10);
    ms.insert(50);
    ms.insert(100);
    const total = ms.total;
    expect(total).toBe(160)
  })
})