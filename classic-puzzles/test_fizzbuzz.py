from fizzbuzz import fizzbuzz


class TestFizzbuzz:

    def test_fizzbuzz_for_integer_lesser_or_equal_to_zero(self):
        assert fizzbuzz(-1) == []
        assert fizzbuzz(0) == []

    def test_fizzbuzz_without_fizz_or_buzz(self):
        assert fizzbuzz(2) == ['1', '2']

    def test_fizzbuzz_with_a_fizz(self):
        assert fizzbuzz(3) == ['1', '2', 'Fizz']
    
    def test_fizzbuzz_with_a_fizz_and_a_buzz(self):
        assert fizzbuzz(5) == ['1', '2', 'Fizz', '4', 'Buzz']

    def test_fizzbuzz_with_a_fizzbuzz(self):
        assert fizzbuzz(15) == [
            '1', 
            '2', 
            'Fizz', 
            '4', 
            'Buzz',
            'Fizz',
            '7',
            '8',
            'Fizz',
            'Buzz',
            '11',
            'Fizz',
            '13',
            '14',
            'FizzBuzz',
        ]
