class MoneyBox():
	def __init__(self, money=0):
		self.money = money

	def is_used_money(self, num):
		return num in [10, 100, 500, 1000]

	def reset_money(self):
		self.money = 0

	def add_money(self, num):
		self.money = self.money + num

	def get_money(self):
		return self.money

class Drink():
	def __init__(self, price):
		self.price = price
		self.num = 0

	def add_num(self, num):
		self.num = self.num + num

	def get_num(self):
		return self.num

class Jihanki():
	zaiko = {
		'water': {
			'num': 0,
			'price':100,
		},
		'cola': {
			'num': 0,
			'price': 120,
		}
	}

	def __init__(self):
		self.zaiko['water']['num'] = 0
		self.zaiko['cola']['num'] = 0
		self.money_box =MoneyBox()
		self.drink_box = {}
		self.drink_box['water'] = Drink(100)
		self.drink_box['cola'] = Drink(120)

	# お金投入
	def add_money(self, num):
		if self.money_box.is_used_money(num):
			self.money_box.add_money(num)

	# 投入金額の総計が見たい
	def get_sum_money(self):
		return self.money_box.get_money()

	# 在庫
	def add_drink(self, name):
		if name in self.drink_box:
			self.zaiko[name]['num'] = self.zaiko[name]['num'] + 1
			self.drink_box[name].add_num(1)

	# 在庫確認
	def get_drink(self, name):
		if name in self.drink_box:
			return self.drink_box[name].get_num()
		return -1

	# ドリンクを購入
	def buy_drink(self, name):
		if name not in self.drink_box:
			return -1

		# 在庫が無い
		if self.zaiko[name]['num'] == 0:
			return -1

		# 金足りない
		if self.zaiko[name]['price'] > self.money_box.get_money():
			return -1

		self.zaiko[name]['num'] = self.zaiko[name]['num'] - 1
		otsuri = self.money_box.get_money() - self.zaiko[name]['price']
		self.money_box.reset_money()
		return otsuri
