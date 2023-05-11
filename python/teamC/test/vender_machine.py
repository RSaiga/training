import pytest


class MoneyChecker:
    def check(self, money):
        return not (money in [1, 5, 5000, 10000])


class VendingMachine:
    drinks = {
        "water": 100,
        "cola": 120,
    }
    total = 0
    money_checker = MoneyChecker()

    def input_money(self, money_list):
        for money in money_list:
            if self.money_checker.check(money):
                self.total += money
        return self.total

    def purchase_drink(self, drink_name):
        self.total -= self.drinks[drink_name]
        return drink_name


class TestVendingMachine:
    @pytest.mark.parametrize("moneys,expected", [
        ([100, 10, 10], 120),
        ([500, 10], 510),
        ([1000, 5], 1000),
        ([1000, 5000], 1000),
        ([1000, 10000], 1000),
    ])
    def test_money(self, moneys, expected):
        # given
        vending_machine = VendingMachine()

        # when then
        assert vending_machine.input_money(moneys) == expected


    def test_purchase_drink(self):
        vending_machine = VendingMachine()
        assert vending_machine.purchase_drink("water") == "water"
        assert vending_machine.purchase_drink("cola") == "cola"

    def test_purchase_drink2(self):
        vending_machine = VendingMachine()
        vending_machine.input_money([100])
        vending_machine.purchase_drink("water")
        assert vending_machine.total == 0


class TestMoneyChecker:
    @pytest.mark.parametrize("money,expected", [
        (1, False),
        (5, False),
        (10, True),
        (100, True),
        (500, True),
        (1000, True),
        (5000, False),
        (10000, False),
    ])
    def test_money_check(self, money, expected):
        money_checker = MoneyChecker()
        assert money_checker.check(money) is expected
