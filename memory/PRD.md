# Carrier Pro — Landing Page (PRD)

## Problem Statement
Crear una landing page premium, moderna, mobile-first y altamente optimizada para conversión para Carrier Pro. La página debe convertir visitantes en conversaciones de WhatsApp y solicitudes de afiliación. No es una web corporativa ni informativa: es una máquina de ventas para transportistas independientes.

**Mensaje central**: Los beneficios de una gran flota. Sin ser una gran flota.

## User Personas
- **Transportista independiente** con 1–5 unidades en Trujillo / La Libertad que carga combustible regularmente y busca ahorrar sin perder control de su operación.
- **Pequeñas empresas de transporte** con flota mediana evaluando una afiliación por unidad.

## Core Requirements (Static)
- Identidad: fondo #000000, naranja #f5961d, blanco #ffffff, premium minimalista, mobile-first.
- Mensajes de confianza: el dinero no pasa por Carrier Pro, pago directo en estación, facturación directa de la estación.
- Activación rápida vía formulario + continuación por WhatsApp (+51 973 982 417).
- Mapa con estaciones de Trujillo / La Libertad, expandible a nivel nacional.
- Comprensión en <5 segundos del valor + cómo funciona + simpleza del proceso.

## What's Been Implemented (2026-06-05)
### Frontend (React + Tailwind + framer-motion)
- **Navbar** sticky con blur, links de scroll, CTA "Activar unidad" y menú móvil.
- **Hero** con headline grande, sub-mensaje, 4 chips de features, CTAs primario/secundario, ilustración SVG animada de camión recorriendo ruta con estaciones (pulsos), gradiente naranja radial.
- **Sección Confianza**: tres bloques (dinero / surtidor / factura) + frase destacada.
- **Cómo Funciona** (timeline interactivo de 3 pasos con animaciones únicas):
  - Paso 1: Formulario auto-completándose (placa, empresa, teléfono).
  - Paso 2: QR generándose con animación celda por celda.
  - Paso 3: Lector escaneando QR con scan-line animada.
  - Tarjeta de resultado final + CTA primario.
- **Estaciones / Mapa**: iframe Google Maps embebido (Trujillo) con filtro estilo dark, card de estación activa, grid de 4 estaciones demo con imagen, dirección, horario, etiqueta "Beneficio Carrier Pro" y botón "Cómo llegar" (enlaza a `https://maps.app.goo.gl/xrVhoPWKmunM6TuV8`).
- **Beneficios**: grid premium 4×2 con 8 beneficios + iconos lucide.
- **Futuro**: 8 cards próximamente con efecto diagonal lines + badge "Soon".
- **Testimonios**: 3 testimonios (foto, nombre, ciudad, unidades, ahorro estimado).
- **FAQ**: acordeón animado con las 5 preguntas exactas del brief.
- **CTA Final**: texto gigante "CARRIER PRO" como fondo, headline "Cada carga cuenta", botones grandes.
- **Footer**: logo, secciones, contacto WhatsApp.
- **Sticky WhatsApp** (botón verde flotante).
- **Lead Modal** con campos: Nombre, Teléfono, Unidades, Empresa (opcional), Correo (opcional). Validación + success screen con CTA "Continuar por WhatsApp" pre-rellenando mensaje con datos del lead.

### Backend (FastAPI + MongoDB)
- `GET /api/health` — health check.
- `POST /api/leads` — captura de leads (validación Pydantic, almacenado en `leads`).
- `GET /api/leads` — listar leads (uso interno, panel admin fase 2).
- `GET /api/stations` — devuelve 4 estaciones demo de Trujillo / La Libertad.

### Integraciones
- WhatsApp: `https://wa.me/51973982417` con mensaje pre-rellenado en CTAs y tras enviar lead.
- Google Maps embed (sin API key) usando URL pública.
- Datos demo de estaciones (listo para reemplazar por datos reales).

## Backlog / Próximas Fases
### P0 — Pendiente del usuario
- Reemplazar testimonios demo por testimonios reales (foto + texto + ahorro).
- Reemplazar 4 estaciones demo con datos y fotos reales.

### P1 — Fase 2 (Admin Panel)
- Autenticación administrador (JWT).
- CRUD de estaciones (con upload de imagen).
- Listado / exportar leads (CSV).
- CRUD de testimonios.
- CRUD de beneficios destacados.
- Dashboard de métricas (leads/día, fuente, conversiones a WhatsApp).

### P2 — Crecimiento
- Mapa interactivo con marcadores propios (Mapbox o Google Maps API real).
- Tracking de eventos (Pixel / GA4).
- Programa de referidos transportista→transportista (compartibilidad).
- Internacionalización (ES base, expansión LATAM).
- Soporte multi-ciudad (filtros por región).

## Notas técnicas
- Tailwind: opacidades extendidas pero `@apply` se mantuvo con valores estándar (10, 20, 30, etc.) para evitar errores de PostCSS.
- Sin uso de imágenes locales (todo Unsplash) — fácil de reemplazar.
- Sin API key de Google Maps requerida (iframe público).
- Mongo storage: documentos con `id` UUID + `created_at` ISO UTC.
