def input_money(money_list):
    total = 0
    for money in money_list:
        if money in [1, 5, 5000, 10000]:
            continue
        total += money
    return total


class TestSample:
    def test_money(self):
        assert input_money([100, 10, 10]) == 120

    def test_money_2(self):
        assert input_money([500, 10]) == 510

    def test_money_3(self):
        assert input_money([1000]) == 1000

    def test_money_4(self):
        assert input_money([1000, 1, 10]) == 1010

    def test_money_5(self):
        assert input_money([1000, 5]) == 1000

    def test_money_6(self):
        assert input_money([1000, 5000]) == 1000

    def test_money_7(self):
        assert input_money([1000, 10000]) == 1000
