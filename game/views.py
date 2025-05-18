from rest_framework.views import APIView
from rest_framework.response import Response
from .models import GameScore
from .serializers import GameScoreSerializer
from rest_framework import status

class GameScoreListView(APIView):
    def get(self, request):
        scores = GameScore.objects.all()
        serializer = GameScoreSerializer(scores, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = GameScoreSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



