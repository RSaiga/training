import pytest
from teamB.src.jihanki import Jihanki

class TestJihanki:
    def setup_method(self):
        self.jihanki = Jihanki()

    def test_お金投入(self):
        self.jihanki.add_money(100)
        assert self.jihanki.get_sum_money() == 100

    def test_複数回お投入金額_many(self):
        self.jihanki.add_money(100)
        self.jihanki.add_money(10)
        assert self.jihanki.get_sum_money() == 110

    @pytest.mark.parametrize('money', [1, 5, 5000, 10000])
    def test_使えないお金投入(self, money):
        self.jihanki.add_money(money)
        assert self.jihanki.get_sum_money() == 0

    def test_在庫増やす(self):
        self.jihanki.add_drink('water')
        assert self.jihanki.get_drink('water') == 1

    def test_在庫じゃないもの(self):
        self.jihanki.add_drink('bear')
        assert self.jihanki.get_drink('bear') == -1

    def test_在庫増やさず取得(self):
        # jihanki.add_drink('water')
        assert self.jihanki.get_drink('water') == 0

    def test_ドリンク購入_水(self):
        self.jihanki.add_drink('water')
        self.jihanki.add_money(100)
        assert self.jihanki.buy_drink('water') == 0

    def test_ドリンク購入_水_在庫無し(self):
        # jihanki.add_drink('water')
        self.jihanki.add_money(100)
        assert self.jihanki.buy_drink('water') == -1

    def test_ドリンク購入_水_お金足りない(self):
        self.jihanki.add_drink('water')
        self.jihanki.add_money(10)
        assert self.jihanki.buy_drink('water') == -1

    def test_ドリンク購入_水_おつり(self):
        self.jihanki.add_drink('water')
        self.jihanki.add_money(500)
        assert self.jihanki.buy_drink('water') == 400
