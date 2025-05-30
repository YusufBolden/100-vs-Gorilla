from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/simulation/', include('simulation.urls')),
    path("api/game", include("game.urls"))
]
