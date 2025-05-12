from django.test import TestCase
from .models import SimulationResult

class SimulationResultTestCase(TestCase):
    def setUp(self):
        SimulationResult.objects.create(scenario="Test Scenario", result="Test Result")

    def test_simulation_result_created(self):
        result = SimulationResult.objects.get(scenario="Test Scenario")
        self.assertEqual(result.result, "Test Result")