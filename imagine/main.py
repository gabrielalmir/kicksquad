from fastapi import FastAPI, HTTPException, Response
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from typing import Optional
from diffusers import DiffusionPipeline

import torch
import uuid
import os

app = FastAPI()

os.makedirs("images", exist_ok=True)
app.mount("/images", StaticFiles(directory="images"), name="images")

print("Loading diffusers ...")
pipe = DiffusionPipeline.from_pretrained(
    "cagliostrolab/animagine-xl-3.1",
    torch_dtype=torch.float16,
    use_safetensors=True,
)

device = "cuda" if torch.cuda.is_available() else "cpu"
pipe.to(device)

print("Server loaded using device: ", device)

class ImagePromptRequest(BaseModel):
    prompt: str
    negative_prompt: Optional[str] = None
    width: int = 1920
    height: int = 1080
    guidance_scale: float = 17.0
    num_inference_steps: int = 50

@app.get('/health')
async def health():
    return {"status": "ok"}

@app.post("/generate-image/")
async def generate_image(request: ImagePromptRequest):
    if request.width % 8 != 0 or request.height % 8 != 0:
        raise HTTPException(status_code=400, detail="Width and height must be multiples of 8.")

    print("received prompt: ", request)
    image = pipe(
        request.prompt,
        negative_prompt=request.negative_prompt,
        width=request.width,
        height=request.height,
        guidance_scale=request.guidance_scale,
        num_inference_steps=request.num_inference_steps
    ).images[0]

    image_path = f"./images/{uuid.uuid4()}.png"
    image.save(image_path, format="PNG")

    with open(image_path, "rb") as image_file:
        return Response(content=image_file.read(), media_type="image/png")

    return HTTPException(status_code=500, detail="Couldn't not load image created")
