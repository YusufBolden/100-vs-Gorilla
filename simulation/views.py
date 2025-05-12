from rest_framework.views import APIView
from rest_framework.response import Response
from .models import SimulationResult
from .serializers import SimulationResultSerializer

class SimulationResultListView(APIView):
    def get(self, request):
        results = SimulationResult.all()
        serializer = SimulationResultSerializer(results, many=True)
        return Response(serializer.data)