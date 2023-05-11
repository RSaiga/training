class InvalidMoneyError(Exception):
    pass


class VendingMachine:
    DRINKS = {
        "water": 100,
        "cola": 120
    }

    def __init__(self):
        self.total_amount = 0
        self.inventory = {"water": 0, "cola": 0}

    def insert_money(self, monies):
        for money in monies:
            if money in [10, 50, 100, 500, 1000]:
                self.total_amount += money
            else:
                return False
                ## raise InvalidMoneyError(f"Invalid money: {money}円")

        return True
        ## return self.total_amount

    def get_totalamount(self):
        return self.total_amount

    def get_change(self):
        charge = self.total_amount
        self.total_amount = 0
        return charge

    def buy(self):
        return

    def stock(self, drink):
        if drink not in self.inventory.keys():
            return False

        self.inventory[drink] += 1
        return True
