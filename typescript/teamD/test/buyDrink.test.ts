type StockDrink = {
  water: {
    stock: number
    price: number
  },
  cola: {
    stock: number
    price: number
  }
}

const stockDrink: StockDrink = {
  water: {
    stock: 0,
    price: 100
  },
  cola: {
    stock: 0,
    price: 120
  }
}

let totalMoney: number = 0

function putMoneyIn(yen: number): boolean {
  const uselessYen: number[] = [1, 5, 5000, 10000]
  if (uselessYen.includes(yen)) {
    totalMoney += yen
    return true
  } else {
    console.log('使用できないお金です')
    return false
  }
}

function getTotalMoney() {
  return totalMoney
}

function addDrink(name: string, quantity: number): boolean {
   if (Object.keys(stockDrink).includes(name)) {
     stockDrink[name as keyof StockDrink].stock += quantity
   }
   return true
}

describe('お金の投入', () => {
  it('100円を投入できる', () => {
    expect(putMoneyIn(100)).toBe(true)
  })
  it('1円を投入できない', () => {
    expect(putMoneyIn(1)).toBe(false)
  })
  it('5円を投入できない', () => {
    expect(putMoneyIn(5)).toBe(false)
  })
  it('5000円を投入できない', () => {
    expect(putMoneyIn(5000)).toBe(false)
  })
  it('10000円を投入できない', () => {
    expect(putMoneyIn(10000)).toBe(false)
  })
})

describe('投入金額の合計', () => {
  it('金額の合計', () => {
    expect(getTotalMoney()).toBe(0)
  })
})

describe('１つずつ名前を指定して飲み物を入庫できる', () => {
  it('コーラの場合', () => {
    expect(addDrink('cola', 1)).toBe(true)
  })
})


// お金の投入できる OK
// お金は数回投入できる
// 投入金額の合計が見える
// １円、５円、５０００円、１００００円は使えない OK
// お釣りが出る
//１つずつ名前を指定して飲み物を入庫できる
// 飲み物ごとの在庫数を取得できる
// 連続で購入ができる