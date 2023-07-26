class VendingMachine {
  stock(水: string) {

  }

  coin(number: number) {

  }

  buy(value: string) {
    return '水'
  }

  otsuri() {
  }
}

describe('vending machine', () => {
  it('story', function () {

    let vendigmachine = new VendingMachine();
    vendigmachine.stock('水');
    vendigmachine.coin(100)
    let actual = vendigmachine.buy('水');
    vendigmachine.otsuri()
    expect(actual).toBe('水')
  });
})