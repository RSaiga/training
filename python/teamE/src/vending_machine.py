class Drink:
  stock = {'water': 5, 'cola': 5}
  price = {'water': 100, 'cola': 120}

  def has_stock(self, drink):
      return self.stock[drink] > 0

  def reduce_stock(self, drink):
      self.stock[drink] = self.stock[drink] - 1

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

      if self.amount >= self.drinks[drink]['value'] and Drink().has_stock(drink):
          Drink().reduce_stock(drink)
          self.amount = self.amount - self.drinks[drink]['value']
          return self.amount
