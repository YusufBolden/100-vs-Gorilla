from rest_framework.views import APIView
from rest_framework.response import Response
from .models import GameScore
from .serializers import GameScoreSerializer

class GameScoreListView(APIView):
    def get(self, request):
        scores = GameScore.objects.all()
        serializer = GameScoreSerializer(scores, many=True)
        return Response(serializer.data)


