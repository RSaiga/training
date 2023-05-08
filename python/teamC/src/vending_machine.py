
class Vending():
    money = 0
    menuList = ['お金を入れる', '購入する', '終了する']
    # menuList2 = [{
    #         'title': 'お金を入れる'
    #         'subMenu'},
    #         {'title'：'購入する'
    #         'subMenu':''},
    #         {'終了する'}]
    drinkList = {
        'water': {'price': 100, 'stock': 5}
    }

    def show_menu(self):
        message = ''
        message += '現在の投入金額:' + str(self.money)
        for i, text in enumerate(self.menuList):
            message += str(i) + ': ' + text
        return message

    def validate_menu_input(self, menu_input):
        if not type(menu_input) is int:
            return False
        if (menu_input <= 0) or (len(self.menuList) < menu_input):
            return False

        return True

    def select_menu(self, menu_input):
        valid = self.validate_menu_input(menu_input)
        if not valid:
            return {
                'status': 'error',
                'message': '有効な値を選択してください'
            }



