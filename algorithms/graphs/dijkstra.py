"""
Warning
-------
Dijkstra's algorithm doesn't work on a weighted graph:
- that contains some cycle
- that has some negative weight (use Bellman-Ford algorithm in this second case)
"""

WEIGHTED_GRAPH_EXAMPLE = {
    "start": {"A": 5, "B": 2},
    "A": {"C": 4, "D": 2},
    "B": {"A": 8, "D": 7},
    "C": {"D": 6, "end": 3},
    "D": {"end": 1},
    "end": {},
}


def find_the_lowest_cost_node(costs):
    lowest_cost = float("inf")
    lowest_cost_node = None

    for node in costs:
        cost = costs[node]

        if cost < lowest_cost and not node in processed_nodes:
            lowest_cost = cost
            lowest_cost_node = node

    return lowest_cost_node


if __name__ == "__main__":
    costs = {
        "A": 5,
        "B": 2,
        "C": float("inf"),
        "D": float("inf"),
        "end": float("inf"),
    }
    parents = {
        "A": "start",
        "B": "start",
        "C": None,
        "D": None,
        "end": None,
    }
    processed_nodes = []

    node = find_the_lowest_cost_node(costs)

    print("--- Init ---")
    print("node to process =", node)
    print("costs =", costs)
    print("parents =", parents)
    print("processed_nodes =", processed_nodes)

    while node is not None:
        cost = costs[node]
        neighbors = WEIGHTED_GRAPH_EXAMPLE[node]

        for n in neighbors.keys():
            print("process neighbor", n)

            new_cost = cost + neighbors[n]

            if new_cost < costs[n]:
                costs[n] = new_cost
                parents[n] = node

        processed_nodes.append(node)

        node = find_the_lowest_cost_node(costs)

        print(f"--- Node {node} ---")
        print("node to process =", node)
        print("costs =", costs)
        print("parents =", parents)
        print("processed_nodes =", processed_nodes)

    print("SHORTEST PATH LENGTH =", costs["end"])
