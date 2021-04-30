"""Example from chapter 6 - Breadth-first search of Grokking Algorithms.
"""

from collections import deque


GRAPH_EXAMPLE = {
    "me": ["Alice", "Bob", "Claire"],
    "Alice": ["Peggy"],
    "Bob": ["Anuj", "Peggy"],
    "Claire": ["Jonny", "Thom"],
    "Peggy": [],
    "Anuj": ["Edward"],
    "Jonny": ["Bill", "Edward"],
    "Thom": [],
    "Bill": [],
    "Edward": [],
}


def breadth_first_travel(graph: dict, initial_node: str) -> dict:
    """Return a dictionnaray with the minimal number of edges to travel from 'initial_node' to each node of the graph.
    """
    search_queue = deque()
    explored_nodes = set()

    search_queue += graph[initial_node]
    explored_nodes.add(initial_node)

    number_of_edges = {"me": 0}
    level_counter = 0

    while search_queue:
        level_counter += 1
        next_level = deque()

        while search_queue:
            next_node = search_queue.popleft()

            if not next_node in explored_nodes:
                explored_nodes.add(next_node)
                number_of_edges[next_node] = level_counter
                next_level += graph[next_node]

        search_queue = next_level

    return number_of_edges


if __name__ == "__main__":
    number_of_edges = breadth_first_travel(GRAPH_EXAMPLE, "me")

    print(number_of_edges)
