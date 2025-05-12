from django.db import models

class SimulationResult(models.Model):
    scenario = models.CharField(max_length=100)
    result = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.scenario