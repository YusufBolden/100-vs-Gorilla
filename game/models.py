from django.db import models

class GameScore(models.Model):
    user_name = models.CharField(max_length=100)
    score = models.IntegerField()
    date_played = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user_name} - {self.score}"
