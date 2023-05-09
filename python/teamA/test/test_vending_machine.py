from ..src.vending_machine import VendingMachine

class TestVendingMachine:
    def test_insert_money(self):
        vending_machine = VendingMachine()
        assert vending_machine.insert_money([10, 50, 100]) == 160

    def test_purchase(self):
        vending_machine = VendingMachine()
        assert vending_machine.purchase('水', 2) == {'total_price': 200, 'num': 2}
        assert vending_machine.purchase('コーラ', 3) == {'total_price': 360, 'num': 3}




# お金の投入ができる OK
# 投入は複数可能 OK
# 投入金額合計がみれる OK
# 扱えないお金
# 1, 5, 5000, 10000
# お釣りが出れる
# 入庫できる 名前を指定
# 在庫の管理