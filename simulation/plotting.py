import matplotlib.pyplot as plt
from typing import List

def plot_simulation_results(results: List[dict]):
    if not results:
        return

    humans_remaining = [r.get("humans_remaining", 0) for r in results]
    gorilla_health = [r.get("gorilla_health", 0) for r in results]
    time_taken = [r.get("time_taken", 0) for r in results]

    plt.figure(figsize=(12, 10))

    plt.subplot(3, 1, 1)
    plt.hist(humans_remaining, bins=50, color="blue", alpha=0.7)
    plt.title("Humans Remaining Distribution")
    plt.grid(True)

    plt.subplot(3, 1, 2)
    plt.hist(gorilla_health, bins=50, color="red", alpha=0.7)
    plt.title("Gorilla Health Distribution")
    plt.grid(True)

    plt.subplot(3, 1, 3)
    plt.hist(time_taken, bins=50, color="green", alpha=0.7)
    plt.title("Fight Duration Distribution")
    plt.xlabel("Time Steps")
    plt.grid(True)

    plt.tight_layout()
    plt.show()
