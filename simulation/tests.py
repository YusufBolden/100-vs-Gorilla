from django.test import TestCase
from .models import SimulationResult

class SimulationResultTestCase(TestCase):
    def setUp(self):
        SimulationResult.objects.create(
            scenario="Test Scenario",
            gorilla_strength=500,
            human_intelligence=100,
            number_of_humans=100,
            human_team_strategy="Charge",
            estimated_outcome="Gorilla Wins"
        )

    def test_simulation_result_created(self):
        result = SimulationResult.objects.get(scenario="Test Scenario")
        self.assertEqual(result.human_team_strategy, "Charge")
