from teamD.src.vending_machine import VendingMachine

class TestVendingMachine:

  def test_お金を入金できること(self):
    # 入金できること
    vending_machine = VendingMachine()
    assert vending_machine.show_amount() == 0
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
    vending_machine = VendingMachine()
    # 入金(100)
    vending_machine.add_amount(50)
    vending_machine.buy(vending_machine.WATER)
    assert vending_machine.show_amount() == 50
    vending_machine.add_amount(50)
    vending_machine.buy(vending_machine.WATER)
    assert vending_machine.show_amount() == 0
    vending_machine.add_amount(100)
    vending_machine.buy(vending_machine.COLA)
    assert vending_machine.show_amount() == 100
    vending_machine.add_amount(100)
    vending_machine.buy(vending_machine.COLA)
    assert vending_machine.show_amount() == 80

  def test_お釣り(self):
    # お釣りが出ること
    vending_machine = VendingMachine()
    assert vending_machine.change() == 0

