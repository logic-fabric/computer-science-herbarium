import random


def binary_search(ordered_list, item_to_find):
    """Returns a tuple (index where item was found, number of steps to find it).
    If item is not found, returns -1 for the index.
    """
    low_index = 0
    high_index = len(ordered_list) - 1
    step = 0

    while low_index <= high_index:
        med_index = (low_index + high_index) // 2
        med_value = ordered_list[med_index]

        step += 1

        if med_value == item_to_find:
            return med_index, step
        elif med_value > item_to_find:
            high_index = med_index - 1
        else:
            low_index = med_index + 1

    return -1, step


if __name__ == "__main__":
    # Test binary_search() on a sorted list of n random numbers in [0, 20]:
    n = 10
    list_test = [random.randint(0, 20) for _ in range(n)]
    list_test.sort()

    number_to_find = random.randint(0, 20)

    print(f"Ordered list = {list_test}")
    print(f"Number to find = {number_to_find}")

    print(binary_search(list_test, number_to_find))
