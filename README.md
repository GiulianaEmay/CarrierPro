# Carrier Pro — Landing Page

Landing page de conversión para Carrier Pro: transportistas independientes acceden a beneficios exclusivos en combustible.

## Stack
- Frontend: React 18 + Tailwind CSS + framer-motion + lucide-react
- Backend: FastAPI + Motor (async MongoDB)
- DB: MongoDB

## Estructura
- `/app/backend` — API FastAPI (`/api/leads`, `/api/stations`, `/api/health`)
- `/app/frontend` — App React

## Endpoints
- `POST /api/leads` — capturar lead `{ nombre, telefono, unidades, empresa?, correo?, fuente? }`
- `GET /api/leads` — listar (panel admin fase 2)
- `GET /api/stations` — listar estaciones afiliadas demo
- `GET /api/health`

## WhatsApp
+51 973 982 417 → `https://wa.me/51973982417`
