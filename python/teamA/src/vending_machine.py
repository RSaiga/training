if __name__ == '__main__':

    # menu
    while(true):
        # メニューを表示
        vending.get_menue()
        #入力値によって、メソッド呼び分ける



class VendingMachine:
    PRICE_WATER = 100
    PRICE_COLA = 120
    ALLOW_MONEY = [10,50,100,500,1000]

    stockDict = {"water":0, "cola":0}
    input_money = 0

    # メニュー表示
    def get_menue(self):
        return

    # お金の投入
    def insert_money(self, money):
        #money = input('お金入力してください')
        self.input_money += money
        return self.input_money


    # 投入金額を表示
    def view_insert_money(self):
        print(self.money)
        return

    # 購入
    def purchase(self):
        return

    # 在庫追加
    def add_stock(self):
        return

    # 在庫確認

    # おつりを出して終了
    def finish(self):
        return

