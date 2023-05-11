import pytest
from _pytest.python_api import raises

from ..src.vending_machine import VendingMachine, InvalidMoneyError


class TestVendingMachine:
    ## 新しい橋がかかるまで、古い橋は壊すな

    def test_お金の投入ができる_投入は複数可能(self):
        vending_machine = VendingMachine()
        assert vending_machine.insert_money([10, 50, 100]) == True

    ## def test_お金の投入ができる_投入は複数可能(self):
    ##    vending_machine = VendingMachine()
    ##    assert vending_machine.insert_money([10, 50, 100]) == 160

    def test_投入金額合計が見れる(self):
        vending_machine = VendingMachine()
        vending_machine.insert_money([10, 50, 100])
        assert vending_machine.get_totalamount() == 160

    @pytest.mark.parametrize("invalid_monies", [1, 5, 5000, 10000])
    def test_1_5_5000_10000は使えない(self, invalid_monies):
        vending_machine = VendingMachine()
        assert vending_machine.insert_money([invalid_monies]) == False
        ## with pytest.raises(InvalidMoneyError):
        ##    vending_machine.insert_money([invalid_monies])

    def test_お釣りが出る(self):
        vending_machine = VendingMachine()
        assert vending_machine.get_change() == 0

    def test_入庫できる(self):
        vending_machine = VendingMachine()
        assert vending_machine.stock("water") == True

    def test_入庫できない(self):
        vending_machine = VendingMachine()
        assert vending_machine.stock("fanta") == False

# お金の投入ができる OK
# 投入は複数可能 OK
# 投入金額合計がみれる OK
# def test_1, 5, 5000, 10000は扱えない
# def test_お釣りが出る
# def test_入庫できる 名前を指定
# def test_在庫の管理
