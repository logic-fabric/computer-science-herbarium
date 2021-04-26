import random


def quick_sort(unordered_list: list) -> list:
    if len(unordered_list) < 2:
        return unordered_list

    pivot = unordered_list[0]

    lower_elements = [n for n in unordered_list[1:] if n <= pivot]
    higher_elements = [n for n in unordered_list[1:] if n > pivot]

    return quick_sort(lower_elements) + [pivot] + quick_sort(higher_elements)


if __name__ == "__main__":
    # Test quick_sort() on a list of n random numbers in [0, 20]:
    n = 10
    list_test = [random.randint(0, 20) for _ in range(n)]

    print(f"Initial list = {list_test}")

    ordered_list = quick_sort(list_test)

    print(f"Ordered list = {ordered_list}")
