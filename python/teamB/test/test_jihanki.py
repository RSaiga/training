from teamB.src.jihanki import Jihanki

def test_投入金額():
    jihanki = Jihanki()
    jihanki.add_money(100)
    jihanki.add_money(10)
    assert jihanki.get_sum_money() == 110

def test_使えないお金１():
    jihanki = Jihanki()
    jihanki.add_money(1)
    assert jihanki.get_sum_money() == 0

def test_使えないお金2():
    jihanki = Jihanki()
    jihanki.add_money(5)
    assert jihanki.get_sum_money() == 0

def test_使えないお金3():
    jihanki = Jihanki()
    jihanki.add_money(5000)
    assert jihanki.get_sum_money() == 0

def test_使えないお金4():
    jihanki = Jihanki()
    jihanki.add_money(10000)
    assert jihanki.get_sum_money() == 0

def test_在庫増やす():
    jihanki = Jihanki()
    jihanki.add_drink('water')
    assert jihanki.get_drink('water') == 1

def test_在庫じゃないもの():
    jihanki = Jihanki()
    jihanki.add_drink('bear')
    assert jihanki.get_drink('bear') == -1

def test_在庫増やさず取得():
    jihanki = Jihanki()
    # jihanki.add_drink('water')
    assert jihanki.get_drink('water') == 0

def test_ドリンク購入_水():
    jihanki = Jihanki()
    jihanki.add_drink('water')
    jihanki.add_money(100)
    assert jihanki.buy_drink('water') == 0

def test_ドリンク購入_水_在庫無し():
    jihanki = Jihanki()
    # jihanki.add_drink('water')
    jihanki.add_money(100)
    assert jihanki.buy_drink('water') == -1

def test_ドリンク購入_水_おつり():
    jihanki = Jihanki()
    jihanki.add_drink('water')
    jihanki.add_money(500)
    assert jihanki.buy_drink('water') == 400

def test_ドリンク購入_水_足りない():
    jihanki = Jihanki()
    jihanki.add_drink('water')
    jihanki.add_money(10)
    assert jihanki.buy_drink('water') == -1