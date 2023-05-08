class DrinkBox:
    def __init__(self, drink_stock):
        self.drink_stock = drink_stock

    def take(self, drink):
        self.drink_stock[drink] = self.drink_stock[drink] - 1

    def has_enough_stock(self, drink):
        return 0 <= self.drink_stock[drink]


class MoneyBox:
    def __init__(self, amount):
        self.amount = amount

    def has_enough_money(self, price):
        return self.amount >= price

    def take(self, price):
        self.amount = self.amount - price

    def get_amount(self):
        return self.amount

    def add(self, money):
        self.amount = self.amount + money


class VendingMachine:
    drink_stock = {'water': 5, 'cola': 5}
    drink_price = {'water': 100, 'cola': 120}

    def __init__(self):
        self.money_box = MoneyBox(0)
        self.drink_box = DrinkBox(self.drink_stock)

    def put_money(self, money):
        if self.is_money_usable(money):
            self.money_box.add(money)
            return True
        else:
            return False

    def get_amount(self):
        return self.money_box.get_amount()

    def is_money_usable(self, money):
        return money not in [1, 5, 5000, 10000]

    def buy_drink(self, drink):
        price = self.drink_price[drink]
        if self.money_box.has_enough_money(price) and self.drink_box.has_enough_stock(drink):
            self.drink_box.take(drink)
            self.money_box.take(price)
            return self.money_box.get_amount()
