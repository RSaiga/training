class VendingMachine {
　input(value:number) {
    return value
  }

  select(value:String){
    return value
  }
}

describe('自動販売機のテスト', () => {
  it('お金を入れてコーラを買う', function () {
    let vendingMachine = new VendingMachine()
    let input = vendingMachine.input(120)
    let select = vendingMachine.select('コーラ')
    expect(select).toBe('コーラ')
  });
})

// 自販機が必要
// 120円を入れる
// コーラーを選ぶ
// コーラーが出てくる
// コーラーを取る