from teamB.src.fizzbuzz import fizzbuzz

def test_fizzでもbuzzでもない():
    assert fizzbuzz(1) == 1

def test_fizzです():
    assert fizzbuzz(3) == 'fizz'

def test_buzzです():
    assert fizzbuzz(5) == 'buzz'

def test_fizzbuzzです():
    assert fizzbuzz(15) == 'fizzbuzz'

def test_ゼロ():
    assert fizzbuzz(0) == 0

def test_マイナス():
    assert fizzbuzz(-1) == -1

def test_マイナスfizz():
    assert fizzbuzz(-3) == 'fizz'
    
def test_小数点():
    assert fizzbuzz(0.2) == 0.2

def test_文字が():
    assert fizzbuzz('a') == '数字じゃない'