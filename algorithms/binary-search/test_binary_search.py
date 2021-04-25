from binary_search import binary_search


ARRAY_7_ELTS = [1, 2, 3, 4, 5, 6, 7]
ARRAY_8_ELTS = [1, 2, 3, 4, 5, 6, 7, 8]


class TestBinarySearch:

    def test_with_an_empty_array(self):
        assert binary_search([], 42) == (-1, 0)

    def test_with_an_array_containing_one_element_that_matches(self):
        assert binary_search([42], 42) == (0, 1)

    def test_with_an_array_containing_one_element_that_does_not_match(self):
        assert binary_search([41], 42) == (-1, 1)

    def test_with_an_array_containing_7_elements_and_no_match(self):
        assert binary_search(ARRAY_7_ELTS, 42) == (-1, 3)

    def test_with_an_array_containing_8_elements_and_no_match(self):
        assert binary_search(ARRAY_8_ELTS, 42) == (-1, 4)

    def test_with_an_array_containing_8_elements_and_a_quick_match(self):
        assert binary_search(ARRAY_8_ELTS, 4) == (3, 1)

    def test_with_an_array_containing_8_elements_and_a_long_match(self):
        assert binary_search(ARRAY_8_ELTS, 8) == (7, 4)
