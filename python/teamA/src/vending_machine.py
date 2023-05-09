class VendingMachine:
    def __init__(self):
        self.total_amount = 0
        self.item_list = [
            {
                'name': '水',
                'price': 100
            },
            {
                'name': 'コーラ',
                'price': 120
            }
        ]

    def insert_money(self, monies):
        for money in monies:
            if money in [10, 50, 100, 500, 1000]:
                self.total_amount += money

        return self.total_amount

    def purchase(self, num):
