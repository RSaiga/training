class VendingMachine:
  def stock(self, param):
    pass

  def input(self, param):
    pass

  def buy(self, param):
    return 'water'

  def charge(self):
    return 0

  def getStock(self):
    return 0


class TestVendingMachine:
  def test_story(self):
    vending_machine = VendingMachine()
    vending_machine.stock(1)
    vending_machine.input(100)
    actual = vending_machine.buy('water')
    charge = vending_machine.charge()
    stock = vending_machine.getStock()
    assert actual == 'water'
    assert charge == 0
    assert stock == 0

  def test_story_cannot_buy_water(self):
    vending_machine = VendingMachine()
    vending_machine.stock(1)
    actual = vending_machine.buy('water')
    charge = vending_machine.charge()
    stock = vending_machine.getStock()
    assert actual == None
    assert charge == 0
    assert stock == 0

