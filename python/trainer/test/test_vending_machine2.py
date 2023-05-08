class VendingMachine2:
  def stock(self, param):
    pass

  def input(self, param):
    pass

  def buy(self, param):
    return '水'

  def change(self):
    return 0


class TestVendingMachine2:
  def test_story(self):
    vending_machine = VendingMachine2()
    vending_machine.stock(1)
    vending_machine.input(100)
    actual = vending_machine.buy('水')
    change = vending_machine.change()
    assert actual == '水'
    assert change == 0