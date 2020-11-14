from common_elements import common_elements


class TestCommonElements:

    def test_with_an_empty_array(self):
        array_1 = [1, 2, 4, 6, 7]
        array_2 = []
        assert common_elements(array_1, array_2) == []

    def test_arrays_with_common_elements(self):
        array_1 = [1, 2, 4, 6, 7]
        array_2 = [2, 3, 6, 8]
        assert common_elements(array_1, array_2) == [2, 6]

    def test_arrays_with_no_common_elements(self):
        array_1 = [1, 2, 4, 6, 7]
        array_2 = [3, 5, 8]
        assert common_elements(array_1, array_2) == []

    def test_arrays_with_duplicated_common_elements(self):
        array_1 = [1, 2, 2, 4, 6, 6, 6, 7]
        array_2 = [2, 2, 2, 3, 6, 6, 8]
        assert common_elements(array_1, array_2) == [2, 6]
