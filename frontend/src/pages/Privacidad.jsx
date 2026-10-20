import React from "react";
import LegalLayout, { LegalSections } from "./LegalLayout";
import { LEGAL } from "../config/legal";

const L = LEGAL;

const SECTIONS = [
  ["Responsable del tratamiento", [
    `${L.razonSocial}, con RUC ${L.ruc}, domicilio: ${L.domicilio}, correo ${L.email}, es responsable del tratamiento de tus datos personales conforme a la Ley N.° 29733, Ley de Protección de Datos Personales, y su Reglamento.`,
  ]],
  ["Datos que recopilamos", [
    ["Nombre y apellidos.", "Teléfono y correo electrónico.", "Placa del vehículo y número de unidades.", "RUC y razón social, cuando sean necesarios para el comprobante o el plan Empresas.", "Datos de navegación anónimos (Google Analytics)."],
  ]],
  ["Para qué usamos tus datos", [
    ["Registrar y activar tu membresía.", "Validar tu acceso al beneficio en las estaciones habilitadas.", "Atender tus consultas, reclamos y solicitudes.", "Enviarte información sobre tu membresía y nuevos beneficios, si lo autorizas.", "Mejorar el sitio web mediante estadísticas de uso."],
  ]],
  ["Consentimiento", [
    "Al enviarnos tus datos por el sitio web o WhatsApp das tu consentimiento libre, previo, expreso e informado para su tratamiento con las finalidades descritas. Puedes revocarlo en cualquier momento.",
  ]],
  ["Con quién compartimos tus datos", [
    "Solo con terceros necesarios para prestar el servicio: estaciones y aliados comerciales (por ejemplo, Primax) para validar el beneficio; proveedores de mensajería (WhatsApp) y de analítica (Google). No vendemos tus datos.",
  ]],
  ["Plazo de conservación", [
    "Conservamos tus datos mientras tu membresía esté vigente y, luego, durante el plazo necesario para cumplir obligaciones legales o atender reclamos.",
  ]],
  ["Tus derechos", [
    `Puedes ejercer tus derechos de acceso, rectificación, cancelación, oposición y portabilidad (ARCO) escribiendo a ${L.email}, indicando tu nombre, DNI y la solicitud. Si consideras que no fuiste atendido, puedes acudir a la Autoridad Nacional de Protección de Datos Personales.`,
  ]],
  ["Seguridad", [
    "Aplicamos medidas técnicas y organizativas razonables para proteger tus datos contra pérdida, acceso no autorizado o alteración.",
  ]],
  ["Cookies y analítica", [
    "Usamos Google Analytics para conocer de forma agregada cómo se usa el sitio. Puedes desactivar las cookies desde la configuración de tu navegador.",
  ]],
  ["Menores de edad", [
    "Nuestros servicios están dirigidos a mayores de edad. No recopilamos de forma intencional datos de menores.",
  ]],
  ["Cambios a esta política", [
    "Podemos actualizar esta política; la versión vigente estará publicada en esta página con su fecha de actualización.",
  ]],
];

export default function Privacidad() {
  return (
    <LegalLayout title="Política de privacidad" label="Legal" testid="page-privacidad" intro="Cómo cuidamos y usamos tus datos personales.">
      <LegalSections sections={SECTIONS} />
    </LegalLayout>
  );
}
