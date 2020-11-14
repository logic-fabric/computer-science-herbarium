"""
Wording:
-------
Find the common elements (as a sorted array) between two sorted arrays of integers.
"""


def common_elements(array_1, array_2):
    # Note: this solution don't use the fact that array_1 and array_2 are sorted.
    array_1_elts_in_array_2 = [elt for elt in array_1 if elt in array_2]
    common_elts_set = set(array_1_elts_in_array_2)

    return sorted(list(common_elts_set))


if __name__ == '__main__':
    pass
