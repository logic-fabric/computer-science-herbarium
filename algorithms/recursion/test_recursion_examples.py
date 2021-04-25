from recursion_examples import (
    recursive_factorial, recursive_binary_search, recursive_len, recursive_maximum, recursive_sum
)


class TestFactorial:

    def test_base_case(self):
        assert recursive_factorial(0) == 1
        assert recursive_factorial(1) == 1

    def test_some_cases(self):
        assert recursive_factorial(2) == 2
        assert recursive_factorial(5) == 120


ARRAY_7_ELTS = [1, 2, 3, 4, 5, 6, 7]
ARRAY_8_ELTS = [1, 2, 3, 4, 5, 6, 7, 8]


class TestRecursiveBinarySearch:

    def test_with_an_empty_array(self):
        assert recursive_binary_search([], 42) == "no match"

    def test_with_an_array_containing_one_element_that_matches(self):
        assert recursive_binary_search([42], 42) == "match"

    def test_with_an_array_containing_one_element_that_does_not_match(self):
        assert recursive_binary_search([41], 42) == "no match"

    def test_with_an_array_containing_7_elements_and_no_match(self):
        assert recursive_binary_search(ARRAY_7_ELTS, 42) == "no match"

    def test_with_an_array_containing_8_elements_and_no_match(self):
        assert recursive_binary_search(ARRAY_8_ELTS, 42) == "no match"

    def test_with_an_array_containing_8_elements_and_a_quick_match(self):
        assert recursive_binary_search(ARRAY_8_ELTS, 4) == "match"

    def test_with_an_array_containing_8_elements_and_a_long_match(self):
        assert recursive_binary_search(ARRAY_8_ELTS, 8) == "match"


class TestRecursiveLen:

    def test_with_an_empty_array(self):
        assert recursive_len([]) == 0

    def test_with_arrays_containing_one_element(self):
        assert recursive_len([1]) == 1
        assert recursive_len([42]) == 1

    def test_with_arrays_containing_multiple_elements(self):
        assert recursive_len([1, 4, 2, 3]) == 4
        assert recursive_len([4, -2, 7]) == 3


class TestRecuresiveMaximum:

    def test_with_an_empty_array(self):
        assert recursive_maximum([]) == None

    def test_with_arrays_containing_one_element(self):
        assert recursive_maximum([1]) == 1
        assert recursive_maximum([42]) == 42

    def test_with_array_containing_two_elements(self):
        assert recursive_maximum([3, 42]) == 42
        assert recursive_maximum([42, 3]) == 42

        assert recursive_maximum([-3, 42]) == 42
        assert recursive_maximum([42, -3]) == 42

    def test_with_arrays_containing_multiple_elements(self):
        assert recursive_maximum([12, 2, 33, 7]) == 33
        assert recursive_maximum([4, -2, 7]) == 7


class TestRecursiveSum:

    def test_with_an_empty_array(self):
        assert recursive_sum([]) == 0

    def test_with_arrays_containing_one_element(self):
        assert recursive_sum([1]) == 1
        assert recursive_sum([42]) == 42

    def test_with_arrays_containing_multiple_elements(self):
        assert recursive_sum([1, 4, 2, 3]) == 10
        assert recursive_sum([4, -2, 7]) == 9
