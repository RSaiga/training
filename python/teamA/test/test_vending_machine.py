from teamA.src.vending_machine import VendingMachine

class TestVendingMachine:
    def test_input_5(self):
        a = VendingMachine()
        assert a.insert_money(100) == 50