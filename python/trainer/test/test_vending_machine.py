from trainer.src.vending_machine import VendingMachine
class TestVendingMachine:
    vending_machine = VendingMachine()
    def test_put_money(self):
      self.vending_machine.amount = 0
      self.vending_machine.put_money(10)
      assert self.vending_machine.amount == 10
      assert self.vending_machine.put_money(1) == False
      assert self.vending_machine.put_money(5) == False
      assert self.vending_machine.put_money(5000) == False
      assert self.vending_machine.put_money(10000) == False

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
