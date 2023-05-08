from teamC.src.vending_machine import Vending

class VendingMachine:
    def __init__(self):
      self.amount = 0

    def buy_dring(self, drink):
        self.amount = self.amount - 100
        return drink
    def add_money(self, money):
        self.amount = self.amount + money
        return self.amount
    def return_money(self):
        return self.amount

class OldTestVending:
    def test_validate_menu_input_OK(self):
        assert Vending().validate_menu_input(1) == True

    def test_validate_menu_input_not_int(self):
        assert Vending().validate_menu_input('hoge') == False

    def test_validate_menu_input_負の数(self):
        assert Vending().validate_menu_input(-1) == False

class TestVending:
    def test_vending(self):
        vending_machine = VendingMachine()
        assert vending_machine.add_money(100) == 100
        assert vending_machine.buy_dring('水') == '水'
        assert vending_machine.return_money() == 0

    def test_vending_2回お金いれる(self):
        vending_machine = VendingMachine()
        assert vending_machine.add_money(100) == 100
        assert vending_machine.add_money(100) == 200
        assert vending_machine.buy_dring('水') == '水'
        assert vending_machine.return_money() == 100