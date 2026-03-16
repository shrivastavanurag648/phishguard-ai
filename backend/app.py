from fastapi import FastAPI
from pydantic import BaseModel
import pickle
from contextlib import asynccontextmanager

from url_detector import URLDetector
from message_detector import MessageDetector

# Define the models globally
models = {}
url_detector_instance = None
message_detector_instance = None

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Load the ML models on startup
    global url_detector_instance, message_detector_instance
    try:
        with open("model.pkl", "rb") as f:
            loaded_models = pickle.load(f)
            url_detector_instance = URLDetector(loaded_models['url_model'])
            message_detector_instance = MessageDetector(loaded_models['msg_model'])
            print("Successfully loaded model.pkl")
    except Exception as e:
        print(f"Error loading model.pkl: {e}. Make sure to run 'python train_dummy_model.py' first.")
    yield
    # Clean up on shutdown if needed

app = FastAPI(
    title="PhishGuard AI API",
    description="Backend service for URL and message threat detection.",
    version="1.0.0",
    lifespan=lifespan
)

# API Schemas
class URLScanRequest(BaseModel):
    url: str

class URLScanResponse(BaseModel):
    risk_score: float
    threat_type: str
    reason: str

class MessageScanRequest(BaseModel):
    message: str

class MessageScanResponse(BaseModel):
    risk_score: float
    threat_type: str
    reason: str


@app.post("/scan-url", response_model=URLScanResponse)
def scan_url(request: URLScanRequest):
    if not url_detector_instance:
         return {"risk_score": 0.0, "threat_type": "error", "reason": "Model.pkl not loaded into memory."}
    
    result = url_detector_instance.scan(request.url)
    return URLScanResponse(**result)

@app.post("/scan-message", response_model=MessageScanResponse)
def scan_message(request: MessageScanRequest):
    if not message_detector_instance:
         return {"risk_score": 0.0, "threat_type": "error", "reason": "Model.pkl not loaded into memory."}
    
    result = message_detector_instance.scan(request.message)
    return MessageScanResponse(**result)

@app.get("/")
def read_root():
    return {"message": "PhishGuard AI Backend is running."}
