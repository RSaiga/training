import pytest

from trainer.src.vending_machine import VendingMachine
class TestVendingMachine:
    vending_machine = VendingMachine()
    def test_put_money(self):
      # given
      self.vending_machine.amount = 0
      # when
      self.vending_machine.put_money(10)
      # then
      assert self.vending_machine.amount == 10

    @pytest.mark.parametrize('money', [1, 5, 5000, 10000], ids=['1円','5円','5000円','10000円'])
    def test_invalid_money(self, money):
      assert self.vending_machine.put_money(money) == False

    def test_get_money(self):
      self.vending_machine.amount = 0
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
      self.vending_machine.amount = 1000
      assert self.vending_machine.buy_drink('water') == 900
      assert self.vending_machine.buy_drink('cola') == 780
