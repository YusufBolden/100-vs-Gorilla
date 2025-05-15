# simulation/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import SimulationResult
from .serializers import SimulationResultSerializer

class SimulationResultList(APIView):
    def get(self, request):
        results = SimulationResult.objects.all()
        serializer = SimulationResultSerializer(results, many=True)
        return Response(serializer.data)

class SimulationResultCreate(APIView):
    def post(self, request):
        serializer = SimulationResultSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
