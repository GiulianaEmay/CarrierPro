import os
import uuid
from datetime import datetime, timezone
from typing import Optional, List

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

load_dotenv()

MONGO_URL = os.environ.get("MONGO_URL")
DB_NAME = os.environ.get("DB_NAME")

client = AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]

app = FastAPI(title="Carrier Pro API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class LeadCreate(BaseModel):
    nombre: str = Field(..., min_length=2, max_length=100)
    telefono: str = Field(..., min_length=6, max_length=20)
    unidades: int = Field(..., ge=1, le=10000)
    empresa: Optional[str] = Field(default=None, max_length=150)
    correo: Optional[str] = Field(default=None, max_length=150)
    fuente: Optional[str] = Field(default="landing")


class Lead(LeadCreate):
    id: str
    created_at: str


@app.get("/api/")
async def root():
    return {"message": "Carrier Pro API", "status": "ok"}


@app.get("/api/health")
async def health():
    try:
        await db.command("ping")
        return {"status": "healthy", "db": "connected"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/leads", response_model=Lead)
async def create_lead(payload: LeadCreate):
    doc = {
        "id": str(uuid.uuid4()),
        "nombre": payload.nombre.strip(),
        "telefono": payload.telefono.strip(),
        "unidades": payload.unidades,
        "empresa": (payload.empresa or "").strip() or None,
        "correo": (payload.correo or "").strip() or None,
        "fuente": payload.fuente or "landing",
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    await db.leads.insert_one(doc)
    return Lead(**doc)


@app.get("/api/leads", response_model=List[Lead])
async def list_leads(limit: int = 100):
    cursor = db.leads.find({}, {"_id": 0}).sort("created_at", -1).limit(limit)
    return [Lead(**d) async for d in cursor]


# ----- Stations (read-only seed for landing) -----
DEMO_STATIONS = [
    {
        "id": "est-trujillo-centro",
        "nombre": "Estación Trujillo Centro",
        "direccion": "Av. España 1234, Trujillo, La Libertad",
        "horario": "24 horas",
        "telefono": "+51 944 123 456",
        "imagen": "https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=800&q=70",
        "estado": "Operativa",
        "lat": -8.1116,
        "lng": -79.0287,
        "maps_url": "https://maps.app.goo.gl/xrVhoPWKmunM6TuV8",
    },
    {
        "id": "est-trujillo-norte",
        "nombre": "Estación Trujillo Norte",
        "direccion": "Panamericana Norte Km 558, Trujillo",
        "horario": "05:00 - 23:00",
        "telefono": "+51 944 555 222",
        "imagen": "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&w=800&q=70",
        "estado": "Operativa",
        "lat": -8.0860,
        "lng": -79.0420,
        "maps_url": "https://maps.app.goo.gl/xrVhoPWKmunM6TuV8",
    },
    {
        "id": "est-la-libertad-sur",
        "nombre": "Estación La Libertad Sur",
        "direccion": "Panamericana Sur Km 562, La Libertad",
        "horario": "24 horas",
        "telefono": "+51 944 777 888",
        "imagen": "https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=800&q=70",
        "estado": "Operativa",
        "lat": -8.1500,
        "lng": -79.0100,
        "maps_url": "https://maps.app.goo.gl/xrVhoPWKmunM6TuV8",
    },
    {
        "id": "est-moche",
        "nombre": "Estación Moche",
        "direccion": "Av. La Marina s/n, Moche, La Libertad",
        "horario": "05:00 - 22:00",
        "telefono": "+51 944 333 999",
        "imagen": "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&w=800&q=70",
        "estado": "Operativa",
        "lat": -8.1700,
        "lng": -79.0040,
        "maps_url": "https://maps.app.goo.gl/xrVhoPWKmunM6TuV8",
    },
]


@app.get("/api/stations")
async def get_stations():
    return {"stations": DEMO_STATIONS}
