from django.db import models

class SimulationResult(models.Model):
    scenario = models.CharField(max_length=255, default='Unknown')
    created_at = models.DateTimeField(auto_now_add=True)

    gorilla_strength = models.FloatField(null=True, blank=True)
    human_intelligence = models.IntegerField(null=True, blank=True)
    number_of_humans = models.IntegerField(null=True, blank=True)
    human_team_strategy = models.CharField(max_length=100, default='Unknown')
    estimated_outcome = models.CharField(max_length=100, default='Unknown')

    def __str__(self):
        return f"{self.scenario} | Gorilla: {self.gorilla_strength} | Outcome: {self.estimated_outcome}"
