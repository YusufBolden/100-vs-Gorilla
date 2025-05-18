import time
import random
import multiprocessing
from typing import List
import matplotlib.pyplot as plt
from tqdm import tqdm


def simulate_fight(
    human_count: int,
    gorilla_strength: int,
    human_stamina: int,
    gorilla_stamina: int,
) -> dict:
    humans_remaining = human_count
    gorilla_health = gorilla_strength
    time_taken = 0
    total_human_damage = 0
    total_gorilla_damage = 0

    human_stamina_levels = [human_stamina] * human_count
    gorilla_current_stamina = gorilla_stamina

    while humans_remaining > 0 and gorilla_health > 0:
        time_taken += 1

        # Human attack
        human_damage = 0
        for i in range(humans_remaining):
            if human_stamina_levels[i] > 0:
                damage = random.randint(5, 15)
                human_damage += damage
                human_stamina_levels[i] -= random.randint(1, 3)
        gorilla_health -= human_damage
        total_human_damage += human_damage

        # Gorilla attack
        gorilla_damage = random.randint(20, 30)
        humans_remaining -= gorilla_damage
        total_gorilla_damage += gorilla_damage
        gorilla_current_stamina -= random.randint(1, 5)

        # Gorilla recovers if stamina drops too low
        if gorilla_current_stamina < 20:
            gorilla_current_stamina += random.randint(5, 10)

        # Chance of human retreat
        if random.random() < 0.1:
            humans_remaining -= random.randint(1, 5)

        time.sleep(0.1)

        # Recalculate humans still fighting
        humans_remaining = sum(1 for stamina in human_stamina_levels if stamina > 0)

        if humans_remaining <= 0 or gorilla_health <= 0:
            break

    return {
        "humans_remaining": max(humans_remaining, 0),
        "gorilla_health": round(max(gorilla_health, 0), 2),
        "total_human_damage": total_human_damage,
        "total_gorilla_damage": total_gorilla_damage,
        "time_taken": time_taken,
        "gorilla_stamina": gorilla_current_stamina,
    }


def run_simulations(
    num_simulations: int,
    human_count: int,
    gorilla_strength: int,
    human_stamina: int,
    gorilla_stamina: int,
) -> List[dict]:
    results = []
    with tqdm(total=num_simulations) as pbar:
        with multiprocessing.Pool() as pool:
            for result in pool.starmap(
                simulate_fight,
                [(human_count, gorilla_strength, human_stamina, gorilla_stamina)]
                * num_simulations,
            ):
                results.append(result)
                pbar.update(1)
    return results


def plot_results(results: List[dict]):
    humans_remaining = [r["humans_remaining"] for r in results]
    gorilla_health = [r["gorilla_health"] for r in results]
    time_taken = [r["time_taken"] for r in results]

    plt.figure(figsize=(12, 10))

    # Humans Remaining
    plt.subplot(3, 1, 1)
    plt.hist(humans_remaining, bins=50, color="blue", alpha=0.7)
    plt.title("Humans Remaining")
    plt.xlabel("Humans Left")
    plt.ylabel("Frequency")
    plt.grid(True)

    # Gorilla Health
    plt.subplot(3, 1, 2)
    plt.hist(gorilla_health, bins=50, color="red", alpha=0.7)
    plt.title("Gorilla Health")
    plt.xlabel("Health Left")
    plt.ylabel("Frequency")
    plt.grid(True)

    # Time Taken
    plt.subplot(3, 1, 3)
    plt.hist(time_taken, bins=50, color="green", alpha=0.7)
    plt.title("Time Taken")
    plt.xlabel("Time Units")
    plt.ylabel("Frequency")
    plt.grid(True)

    plt.tight_layout()
    plt.show()


if __name__ == "__main__":
    num_simulations = 1000
    human_count = 100
    gorilla_strength = 500
    human_stamina = 100
    gorilla_stamina = 300

    start = time.time()
    results = run_simulations(
        num_simulations,
        human_count,
        gorilla_strength,
        human_stamina,
        gorilla_stamina,
    )
    plot_results(results)
    end = time.time()
    print(f"Simulations completed in {round(end - start, 2)} seconds.")
