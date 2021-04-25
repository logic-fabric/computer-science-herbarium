def recursive_factorial(n: int) -> int:
    if n < 2:
        return 1

    return n * recursive_factorial(n - 1)


def recursive_binary_search(
    ordered_list: list,
    item_to_find: [int, float, str]
) -> tuple:
    if len(ordered_list) == 0:
        return "no match"

    if len(ordered_list) == 1:
        return "match" if ordered_list[0] == item_to_find else "no match"

    med_index = (len(ordered_list) // 2)
    med_value = ordered_list[med_index]

    if med_value == item_to_find:
        return "match"
    elif med_value > item_to_find:
        return recursive_binary_search(
            ordered_list[:med_index],
            item_to_find
        )
    else:
        return recursive_binary_search(
            ordered_list[med_index + 1:],
            item_to_find
        )


def recursive_len(array: list) -> int:
    if array == []:
        return 0

    return 1 + recursive_len(array[1:])


def recursive_maximum(array: list) -> list:
    if array == []:
        return

    if len(array) == 1:
        return array[0]

    if len(array) == 2:
        return array[0] if array[0] > array[1] else array[1]

    first_elt = array[0]
    sub_max = recursive_maximum(array[1:])

    return first_elt if first_elt > sub_max else sub_max


def recursive_sum(array: list) -> int:
    if array == []:
        return 0

    return array[0] + recursive_sum(array[1:])


if __name__ == "__main__":
    pass
