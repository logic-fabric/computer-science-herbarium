from quick_sort import quick_sort
from selection_sort import selection_sort


class TestQuickSort:

    def test_with_an_empty_array(self):
        assert quick_sort([]) == []

    def test_with_arrays_containing_one_element(self):
        assert quick_sort([-1]) == [-1]
        assert quick_sort([42]) == [42]

    def test_with_array_containing_two_elements(self):
        assert quick_sort([3, 42]) == [3, 42]
        assert quick_sort([42, 3]) == [3, 42]

        assert quick_sort([-3, 42]) == [-3, 42]
        assert quick_sort([42, -3]) == [-3, 42]

    def test_with_arrays_containing_multiple_elements(self):
        assert quick_sort([12, 2, 33, 7]) == [2, 7, 12, 33]
        assert quick_sort([4, -2, 7]) == [-2, 4, 7]


class TestSelectionSort:

    def test_with_an_empty_array(self):
        assert selection_sort([]) == []

    def test_with_arrays_containing_one_element(self):
        assert selection_sort([-1]) == [-1]
        assert selection_sort([42]) == [42]

    def test_with_array_containing_two_elements(self):
        assert selection_sort([3, 42]) == [3, 42]
        assert selection_sort([42, 3]) == [3, 42]

        assert selection_sort([-3, 42]) == [-3, 42]
        assert selection_sort([42, -3]) == [-3, 42]

    def test_with_arrays_containing_multiple_elements(self):
        assert selection_sort([12, 2, 33, 7]) == [2, 7, 12, 33]
        assert selection_sort([4, -2, 7]) == [-2, 4, 7]
