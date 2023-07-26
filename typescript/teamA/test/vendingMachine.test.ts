function vendingMachineTest(value: string, money: number) {
  if(inputMoney(money) === false)
  const drinkname = selectDrinkName(value)
  // const waterMoney = 100;
  // const kohlerMoney = 120;
  // if(value === "水") {
  //   money = money - waterMoney
  // } else if (value === "コーラ") {
  //   money = money - kohlerMoney
  // }
  // const hoge = { drink: value, money: money }
  // return hoge
}

function inputMoney(money: number) {
  if ([1,5,5000,10000].includes(money)) {
    return false
  }
  return money
}

function selectDrinkName(drinkName: string) {
  return drinkName
}

describe('自動販売機', () => {
  // お金投入
  it('金額を返す', () => {
    const value = inputMoney(100)
    expect(value).toBe(100)
  })

  it('1円投入', () => {
    const value = inputMoney(1)
    expect(value).toBe(false)
  })

  it('5円投入', () => {
    const value = inputMoney(5)
    expect(value).toBe(false)
  })

  it('5000円投入', () => {
    const value = inputMoney(5000)
    expect(value).toBe(false)
  })

  it('10000円投入', () => {
    const value = inputMoney(10000)
    expect(value).toBe(false)
  })

  // ドリンク名選択
  it('水選択', () => {
    const value = selectDrinkName("水")
    expect(value).toBe("水")
  })

  it('コーラ選択', () => {
    const value = selectDrinkName("コーラ")
    expect(value).toBe("コーラ")
  })

  // 購入したい
  it('水購入', () => {
    const value = vendingMachineTest("水", 100)
    // 選んだドリンク
    expect(value.drink).toBe("水")
    // お釣り
    expect(value.money).toBe(0)
  })

  // it('コーラ購入', () => {
  //   const value = vendingMachineTest("コーラ", 120)
  //   expect(value.drink).toBe("コーラ")
  //   expect(value.money).toBe(0)
  // })
})