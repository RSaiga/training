
class Jihanki():
	money = 0
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

	# コンストラクタがｈ

	# お金投入
	def add_money(self, num):
		# 使えないお金は入金されない
		if num in [10, 100, 500, 1000]:
			self.money = self.money + num

	# 投入金額の総計が見たい
	def get_sum_money(self):
		return self.money

	# 在庫ｔ
	def add_drink(self, name):
		if name in self.zaiko:
			self.zaiko[name]['num'] = self.zaiko[name]['num'] + 1

	# 在庫確認
	def get_drink(self, name):
		if name in self.zaiko:
			return self.zaiko[name]['num']
		return -1

	# ドリンクを購入
	def buy_drink(self, name):
		if name not in self.zaiko:
			return -1

		# 在庫が無い
		if self.zaiko[name]['num'] == 0:
			return -1

		# 金足りない
		if self.zaiko[name]['price'] > self.money:
			return -1

		self.zaiko[name]['num'] = self.zaiko[name]['num'] - 1
		otsuri = self.money - self.zaiko[name]['price']
		self.money = 0
		return otsuri

		# 金が足りるか
		# 在庫を減らす
		# おつりを返す
		# 金を0にする



	# 入庫できる（１つずつ

	# 飲み物ごとの在庫数が確認できる