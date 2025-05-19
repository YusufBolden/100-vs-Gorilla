import asyncio
from django.http import StreamingHttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .simulation import simulate_fight
from .models import SimulationResult


@csrf_exempt
def run_simulation(request):
    if request.method != "POST":
        return JsonResponse({"error": "Only POST requests allowed."}, status=405)

    try:
        data = json.loads(request.body)
        profession = data.get("profession", "Human")
    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid JSON input."}, status=400)

    async def event_stream():
        async for update in simulate_fight(profession):
            if update.get("status") == "completed":
                # Save to DB at the end of the simulation
                SimulationResult.objects.create(
                    scenario=f"{profession} vs Gorilla",
                    gorilla_strength=1000,  
                    human_intelligence=70,  
                    number_of_humans=100,   
                    human_team_strategy="Charge",  # Could be customized later
                    estimated_outcome=update.get("winner"),
                    result_details=json.dumps(update, indent=2),
                )
            yield f"data: {json.dumps(update)}\n\n"
            await asyncio.sleep(0.1)

    return StreamingHttpResponse(event_stream(), content_type="text/event-stream")
