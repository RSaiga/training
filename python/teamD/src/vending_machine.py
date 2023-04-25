class VendingMachine:

  WATER = 1
  COLA = 1

  amount = 0

  def show_amount(self):
    return self.amount

  def add_amount(self, input_value: int):
    if not self.check_valid_deposit(input_value):
      return
    self.amount += input_value

  def check_valid_deposit(self, amount):
    return amount in [10, 50, 500, 1000]

  def buy(self, kind):
    if self.canBuy(kind):
      if kind == self.WATER:
        self.amount -= 100 if kind == 1 else 120

  def canBuy(self, kind):
    if kind == 1:
      return self.amount >= 100
    else:
      return self.amount >= 120

  def change(self):
    return self.amount

  def init(self):
    self.amount = 0










