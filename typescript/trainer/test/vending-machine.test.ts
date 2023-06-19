class VendingMachine {
  stock(number: number) {

  }

  input(number: number) {

  }

  buy(水: string) {
    return '水'
  }

  change() {
    return 0
  }
}

describe('ストーリー', () => {
  it('水買う', function () {
    let vendingMachine = new VendingMachine();
    vendingMachine.stock(1)
    vendingMachine.input(100)
    let actual = vendingMachine.buy('水')
    let change = vendingMachine.change()
    expect(actual).toBe('水')
    expect(change).toBe(0)
  });
})