if __name__ == '__main__':

    # menu
    while (true):
        # メニューを表示
        vending.get_menue()
        # 入力値によって、メソッド呼び分ける
class Money:
    ALLOW_MONEY = [10, 50, 100, 500, 1000]
    insert_money = 0

    def check_allow_money(self, money):
        return money in self.ALLOW_MONEY

    def add(self, money):
        self.insert_money += money

    def take(self, money):
        self.insert_money = self.insert_money - money
        return self.insert_money

    def get_change(self):
        return self.insert_money

class VendingMachine:
    stockDict = {"water": 0, "cola": 0}
    priceDict = {"water": 100, "cola": 120}

    # メニュー表示
    def __init__(self):
        self.money_obj = Money()

    def get_menue(self):
        return

    # お金の投入
    def insert_money(self, money):
        if not self.money_obj.check_allow_money(money):
            return money

        self.money_obj.add(money)

        return self.money_obj.get_change()

    # 投入金額を表示
    def view_insert_money(self):
        print(self.money)
        return


    def check_insert_money(self):
        print(self.money)
        return

    # 購入
    def purchase(self, drink):
        self.money_obj.take(100)
        return drink

    # 在庫追加
    def add_stock(self):
        return

    # 在庫確認

    # おつりを出して終了
    def change(self):
        return self.money_obj.get_change()
