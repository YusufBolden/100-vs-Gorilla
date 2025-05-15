from django.contrib import admin
from .models import SimulationResult

@admin.register(SimulationResult)
class SimulationResultAdmin(admin.ModelAdmin):
    list_display = ('scenario', 'gorilla_strength', 'human_intelligence', 'number_of_humans', 'human_team_strategy', 'estimated_outcome', 'created_at')