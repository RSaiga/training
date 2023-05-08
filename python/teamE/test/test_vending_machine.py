import pytest
from teamE.src.vending_machine import VendingMachine, Drink
class TestVendingMachine:
    def setup_method(self):
      self.vending_machine = VendingMachine()
      self.drinks = Drink()

    # @pytest.mark.parametrize('money', [1, 5, 5000, 10000])
    # def test_put_money(self, money):
    #   self.vending_machine.amount = 0
    #   assert self.vending_machine.amount == 10
    #   assert self.vending_machine.put_money(money) == False

    def test_get_money(self):
      self.vending_machine.put_money(10)
      self.vending_machine.put_money(100)
      self.vending_machine.put_money(1000)
      assert self.vending_machine.get_amount() == 1110

    @pytest.mark.parametrize('money', [1, 5, 5000, 10000])
    def test_is_money_usable_false(self, money):
      assert self.vending_machine.is_money_usable(money) == False

    @pytest.mark.parametrize('money', [10, 50, 100, 1000])
    def test_is_money_usable_true(self, money):
      assert self.vending_machine.is_money_usable(money) == True

    # @pytest.mark.parametrize('money', [100, 120])
    def test_buy_drink(self):
      self.vending_machine.amount = 1000
      assert self.vending_machine.buy_drink('water') == 900
      assert self.vending_machine.buy_drink('cola') == 780
      assert self.drinks.stock['water'] == 4

