class DrinkBox:

  def __init__(self, stock):
    self.stock = stock
  def get_stock(self):
    pass

  def take(self):
    self.stock -= 1

  def add(self, numnber_of_drink):
    self.stock = numnber_of_drink


class MoneyBox:
  def __init__(self, value):
    self.value = value

  def take(self, param):
    self.value -= param


class VendingMachine:
  def __init__(self):
    self.drink_box = DrinkBox(0)
    self.money_box = MoneyBox(0)

  def stock(self, numnber_of_drink):
    self.drink_box.add(numnber_of_drink)

  def input(self, money):
    self.money_box.value = money

  def buy(self, param):
    self.drink_box.take()
    self.money_box.take(100)
    return 'water'

  def take(self):
    self.money_box.take(100)

  def charge(self):
    return self.money_box.value

  def getStock(self):
    return self.drink_box.stock


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
