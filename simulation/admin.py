from django.contrib import admin
from .models import SimulationResult

@admin.register(SimulationResult)
class SimulationResultAdmin(admin.ModelAdmin):
    list_display = ('scenario', 'created_at')