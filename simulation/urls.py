# simulation/urls.py
from django.urls import path
from .views import SimulationResultList, SimulationResultCreate

urlpatterns = [
    path('results/', SimulationResultList.as_view(), name='simulation-results'),
    path('results/create/', SimulationResultCreate.as_view(), name='simulation-create'),
]
