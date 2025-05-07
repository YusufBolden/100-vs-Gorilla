from django.urls import path
from .views import GameScoreListView

urlpatterns = [
    path("scores", GameScoreListView.as_view(), name="game-scores"),
]
