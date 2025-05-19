from django.test import TestCase
from .models import SimulationResult

class SimulationResultTestCase(TestCase):
    def setUp(self):
        SimulationResult.objects.create(
            scenario="Test Scenario",
            result_details="Test Result",
            gorilla_strength=8.5,
            human_intelligence=7,
            number_of_humans=10,
            human_team_strategy="Ambush",
            estimated_outcome="Human Victory"
        )

    def test_simulation_result_created(self):
        result = SimulationResult.objects.get(scenario="Test Scenario")
        self.assertEqual(result.result_details, "Test Result")
        self.assertEqual(result.estimated_outcome, "Human Victory")
