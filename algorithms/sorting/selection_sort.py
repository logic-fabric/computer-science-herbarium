import random


def selection_sort(unordered_list: list) -> list:
    sorted_list = []

    for _ in range(len(unordered_list)):
        minimal_remaining_element = min(unordered_list)
        sorted_list.append(unordered_list.pop(
            unordered_list.index(minimal_remaining_element))
        )

    return sorted_list


if __name__ == "__main__":
    # Test selection_sort() on a list of n random numbers in [0, 20]:
    n = 10
    list_test = [random.randint(0, 20) for _ in range(n)]

    print(f"Initial list = {list_test}")

    ordered_list = selection_sort(list_test)

    print(f"Ordered list = {ordered_list}")
