from fastapi.testclient import TestClient
from .main import app

client = TestClient(app)

def test_health():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}

def test_generate_image():
    request_payload = {
        "prompt": "A beautiful landscape",
        "negative_prompt": None,
        "width": 128,
        "height": 128,
        "guidance_scale": 17.0,
        "num_inference_steps": 5
    }
    response = client.post("/generate-image/", json=request_payload)
    assert response.status_code == 200
    assert response.headers["content-type"] == "image/png"
    assert len(response.content) > 0

def test_generate_image_invalid_dimensions():
    request_payload = {
        "prompt": "A beautiful landscape",
        "negative_prompt": None,
        "width": 129,  # Invalid width
        "height": 128,
        "guidance_scale": 17.0,
        "num_inference_steps": 5
    }
    response = client.post("/generate-image/", json=request_payload)
    assert response.status_code == 400
    assert response.json() == {"detail": "Width and height must be multiples of 8."}
