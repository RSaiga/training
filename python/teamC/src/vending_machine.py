
class Vending():
    money = 0
    menuList = ['お金を入れる', '購入する', '終了する']

    def show_menu(self):
        message = ''
        message += '現在の投入金額:' + str(self.money)
        for i, text in enumerate(self.menuList):
            message += str(i) + ': ' + text
        return message

    def validate_menu_input(self, menu_input):
        if not menu_input.isnumeric():
            return False
        menu_input = int(menu_input)
        return True

    def select_menu(self, menu_input):
        self.validate_menu_input(menu_input)
