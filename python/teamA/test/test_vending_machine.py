import pytest

from teamA.src.vending_machine import VendingMachine

class TestVendingMachine:


    def setup_method(self):
        # input_money = 0が初期化されてないですね（global変数になってる）
        # constructor(def __init__)に記載してくださいー
        self.vending_machine = VendingMachine()

    def test_input_money_allow(self):
        assert self.vending_machine.insert_money(100) == 100

    def test_input_money_denied(self):
        assert self.vending_machine.insert_money(50) == 50

    def test_purchase_water(self):
        self.vending_machine = VendingMachine()
        money = self.vending_machine.insert_money(100)
        drink = self.vending_machine.purchase('water')
        change = self.vending_machine.change()

        assert money == 100
        assert drink == 'water'
        assert change == 0

    def test_purchase_cola(self):
        self.vending_machine = VendingMachine()
        money = self.vending_machine.insert_money(1000)
        drink = self.vending_machine.purchase('cola')
        change = self.vending_machine.change()

        assert money == 1000
        assert drink == 'cola'
        assert change == 900

