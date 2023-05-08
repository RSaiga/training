import pytest

from trainer.src.vending_machine import VendingMachine


class TestVendingMachine:
    def setup_method(self):
        self.vending_machine = VendingMachine()

    def test_put_money_once(self):
        self.vending_machine.put_money(10)
        assert self.vending_machine.get_amount() == 10
    def test_put_money_ntimes(self):
        self.vending_machine.put_money(10)
        self.vending_machine.put_money(10)
        assert self.vending_machine.get_amount() == 20
    def test_put_money_zero(self):
        assert self.vending_machine.get_amount() == 0

    @pytest.mark.parametrize('money', [1, 5, 5000, 10000])
    def test_put_invalid_money(self, money):
        assert self.vending_machine.put_money(money) == False

    def test_get_money(self):
        self.vending_machine.put_money(10)
        self.vending_machine.put_money(100)
        self.vending_machine.put_money(1000)
        assert self.vending_machine.get_amount() == 1110

    def test_is_money_usable(self):
        assert self.vending_machine.is_money_usable(1) == False
        assert self.vending_machine.is_money_usable(5) == False
        assert self.vending_machine.is_money_usable(5000) == False
        assert self.vending_machine.is_money_usable(10000) == False
        assert self.vending_machine.is_money_usable(10) == True
        assert self.vending_machine.is_money_usable(100) == True
        assert self.vending_machine.is_money_usable(1000) == True

    def test_buy_drink(self):
        # given
        self.vending_machine.put_money(1000)
        # when
        # then
        assert self.vending_machine.buy_drink('water') == 900
        assert self.vending_machine.buy_drink('cola') == 780
