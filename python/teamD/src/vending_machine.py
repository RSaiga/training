class StockBox:
  def __init__(self, stock):
    self.stock = stock

  def get(self):
    return self.stock

  def add(self, quantity):
    self.stock = self.stock + quantity

class MoneyBox:
  def __init__(self, amount):
    self.amount = amount

  def get(self):
    return self.amount

  def add(self, money):
    self.amount = self.amount + money

class VendingMachine:
  WATER = 1
  COLA = 2
  amount = 0

  def __init__(self):
    self.water_stock = StockBox(0)
    self.cola_stock = StockBox(0)

  def show_stock(self, kind):
    if kind == self.WATER:
      return self.water_stock.get()
    else:
      return self.cola_stock.get()

  def add_stock(self, kind, quantity):
    if kind == self.WATER:
      return self.water_stock.add(quantity)
    else:
      return self.cola_stock.add(quantity)

  def show_amount(self):
    return self.amount

  def add_amount(self, input_value: int):
    if not self.check_valid_deposit(input_value):
      return
    self.amount += input_value

  def check_valid_deposit(self, amount):
    return amount in [10, 50, 100, 500, 1000]

  def buy(self, kind):
    if self.canBuy(kind):
      if kind == self.WATER:
        self.amount = self.amount - 100
      else:
        self.amount = self.amount - 120

  def canBuy(self, kind):
    if kind == 1:
      return self.amount >= 100
    else:
      return self.amount >= 120

  def change(self):
    return self.amount

  def init(self):
    self.amount = 0










