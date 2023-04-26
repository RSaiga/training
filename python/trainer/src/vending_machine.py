class VendingMachine:
  drinks = {'water':{'value': 100, 'stock': 5}, 'cola':{'value': 120, 'stock': 5}}
  amount = 0
  def put_money(self, money):
      if self.is_money_usable(money):
        self.amount = self.amount + money
        return True
      else:
        return False

  def get_amount(self):
      return self.amount

  def is_money_usable(self, money):
      return money not in [1, 5, 5000, 10000]

  def buy_drink(self, drink):
      if self.amount >= self.drinks[drink]['value'] and 0 <= self.drinks[drink]['stock']:
          self.drinks[drink]['stock'] = self.drinks[drink]['stock'] - 1
          self.amount = self.amount - self.drinks[drink]['value']
          return self.amount
