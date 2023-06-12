import pytest

# execute entire file:              pytest 1intro.py
# execute only certain markers:     pytest 1intro.py -m three (create pytest.ini with markers)
# execute using func name:          pytest 1intro.py -k method1


def func(x):
    return x+5

@pytest.mark.one
def test_method1():
    assert func(3) == 5

def test_method2():
    assert func(3) == 8

@pytest.mark.three
def test_method3():
    a = 3
    b = 4
    assert(a+b) == 7

@pytest.mark.four
def test_method4():
    x = 2
    y = 2
    assert(x+y) == 5