from rest_framework import serializers
from .models import SimulationResult
class SimulationResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = SimulationResult
        fields = '__all__'
    def validate(self, data):
        """
        Override the validate method to handle cases where 'unknown' is used in numeric fields.
        """
        if 'gorilla_strength' in data and data['gorilla_strength'] == 'unknown':
            data['gorilla_strength'] = None  # Convert to None for null value
        if 'human_team_size' in data and data['human_team_size'] == 'unknown':
            data['human_team_size'] = None  # Convert to None for null value
        return data