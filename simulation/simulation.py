import asyncio
import random


async def simulate_fight(profession: str = "Soldier"):
    total_humans = 100
    gorilla_hp = 1000
    human_hp = 10
    human_stamina = 100
    gorilla_stamina = 500
    fight_duration = 0  # seconds of simulation

    while total_humans > 0 and gorilla_hp > 0:
        await asyncio.sleep(0.2)  # Real-time pacing
        fight_duration += 1

        # Gorilla attacks
        humans_hit = random.randint(1, 5)
        casualties = min(humans_hit, total_humans)
        total_humans -= casualties
        gorilla_stamina -= random.randint(5, 15)

        # Humans attack
        human_attack_power = total_humans * random.uniform(0.5, 1.5)
        gorilla_hp -= human_attack_power / 10
        human_stamina -= random.randint(10, 30)

        # Progress update
        yield {
            "status": "in_progress",
            "profession": profession,
            "total_humans": total_humans,
            "gorilla_hp": round(gorilla_hp, 2),
            "fight_duration": fight_duration,
            "message": f"{total_humans} {profession}s remaining. Gorilla HP: {round(gorilla_hp, 2)}",
        }

        if gorilla_stamina <= 0:
            gorilla_hp -= 20  # Exhausted gorilla weakens

        if human_stamina <= 0:
            total_humans -= random.randint(1, 3)
            human_stamina = 100  # Reset stamina

    result = {
        "status": "completed",
        "profession": profession,
        "winner": "Gorilla" if total_humans <= 0 else profession,
        "fight_duration": fight_duration,
        "final_humans": max(total_humans, 0),
        "final_gorilla_hp": round(max(gorilla_hp, 0), 2),
        "message": f"Fight ended after {fight_duration} seconds!",
    }
    yield result
