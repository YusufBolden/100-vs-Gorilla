from django.urls import path
from .views import SimulationResultListView

urlpatterns = [
    path('results', SimulationResultListView.as_view, name='simulation-results'),
]