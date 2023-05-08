import pytest

from teamD.src.vending_machine import VendingMachine

class TestVendingMachine:
  def setup_method(self):
    self.vending_machine = VendingMachine()

  def test_お金を入金できること(self):
    # 入金できること
    vending_machine = VendingMachine()
    assert self.vending_machine.show_amount() == 0
    vending_machine.add_amount(100)
    # 総額を参照できること
    assert vending_machine.show_amount() == 100
    # 繰り返し入金できること
    vending_machine.add_amount(500)
    assert vending_machine.show_amount() == 600
    # 扱えないお金の入金
    vending_machine.add_amount(1)
    assert vending_machine.show_amount() == 600
    vending_machine.add_amount(5)
    assert vending_machine.show_amount() == 600
    vending_machine.add_amount(2000)
    assert vending_machine.show_amount() == 600
    vending_machine.add_amount(5000)
    assert vending_machine.show_amount() == 600
    vending_machine.add_amount(10000)
    assert vending_machine.show_amount() == 600

  def test_購入(self):
    # お釣りが出ること
    # 入金(100)
    self.vending_machine.add_amount(50)
    self.vending_machine.buy(1)
    assert self.vending_machine.show_amount() == 50
    self.vending_machine.add_amount(50)
    self.vending_machine.buy(1)
    assert self.vending_machine.show_amount() == 0
    self.vending_machine.add_amount(100)
    self.vending_machine.buy(2)
    assert self.vending_machine.show_amount() == 100
    self.vending_machine.add_amount(100)
    self.vending_machine.buy(2)
    assert self.vending_machine.show_amount() == 80

  def test_お釣り(self):
    # お釣りが出ること
    assert self.vending_machine.change() == 0

  @pytest.mark.parametrize('amount', [10, 50, 100, 500, 1000])
  def test_check_valid_deposit(self, amount):
    assert self.vending_machine.check_valid_deposit(amount) == True

  @pytest.mark.parametrize('amount', [1, 5, 5000, 10000])
  def test_check_invalid_deposit(self, amount):
    assert self.vending_machine.check_valid_deposit(amount) == False

  def test_在庫補充(self):
    type_mizu = 1
    assert self.vending_machine.show_stock(type_mizu) == 0
    hojyu = 1
    self.vending_machine.add_stock(type_mizu, hojyu)
    assert self.vending_machine.show_stock(type_mizu) == 1

    type_cola = 2
    assert self.vending_machine.show_stock(type_cola) == 0
    hojyu = 2
    self.vending_machine.add_stock(type_cola, hojyu)
    assert self.vending_machine.show_stock(type_cola) == 2
