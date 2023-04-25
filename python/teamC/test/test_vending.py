from teamC.src.vending_machine import Vending

class TestVending:
    def test_validate_menu_input(self):
        assert Vending().validate_menu_input() == ""