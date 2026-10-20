import React from "react";
import LegalLayout, { LegalSections } from "./LegalLayout";
import { LEGAL } from "../config/legal";

const L = LEGAL;

const SECTIONS = [
  ["Quiénes somos", [
    `Estos Términos y Condiciones regulan el uso del sitio web ${L.web} y la contratación de las membresías ofrecidas por ${L.razonSocial}, con RUC ${L.ruc}, domicilio: ${L.domicilio}, correo de contacto ${L.email} (en adelante, "Carrier Pro").`,
    "Al registrarte o contratar una membresía declaras haber leído y aceptado estos términos.",
  ]],
  ["El servicio", [
    "Carrier Pro ofrece una membresía por vehículo (por placa) que habilita el acceso a beneficios en combustible en estaciones Primax habilitadas y, progresivamente, a otros beneficios del ecosistema Carrier Pro.",
    "Los beneficios identificados como \"próximos\" no forman parte de la membresía activa hasta que sean comunicados como disponibles.",
  ]],
  ["Planes y precios", [
    ["Carrier Digital: S/ 19.90 por unidad al mes.", "Fleet Óptimo: S/ 29.90 por unidad al mes, incluye tarjeta física con entrega programada.", "Carrier Empresas: S/ 24.90 por unidad al mes, sujeto a condiciones y validación corporativa."],
    "Los precios están expresados en soles e incluyen IGV cuando corresponda. Carrier Pro puede actualizar precios comunicándolo con anticipación; el cambio no afecta periodos ya pagados.",
  ]],
  ["Pago de la membresía y del combustible", [
    "La membresía se paga a Carrier Pro. El combustible se paga directamente en la estación Primax, que procesa la venta y emite el comprobante correspondiente.",
    "Carrier Pro no recibe, administra ni retiene el dinero destinado al combustible.",
  ]],
  ["Activación y uso", [
    "Para afiliarte necesitas tu placa, teléfono y, cuando corresponda, tu RUC. El QR se activa aproximadamente 5 minutos después de confirmado el pago.",
    "El QR y la tarjeta son personales e intransferibles y están asociados a la placa registrada. Su uso para otros vehículos puede ocasionar la suspensión de la membresía.",
    "Las condiciones del beneficio (precio, disponibilidad y estaciones habilitadas) son variables y dependen de la estación. Recomendamos confirmarlas antes de cargar. Carrier Pro no garantiza una cifra fija de ahorro; las estimaciones de la calculadora son referenciales.",
  ]],
  ["Vigencia y cancelación", [
    "La membresía es mensual y se renueva con cada pago. Puedes cancelarla en cualquier momento escribiendo a nuestros canales; la cancelación surte efecto al término del periodo pagado.",
    "Los derechos de devolución se rigen por el Código de Protección y Defensa del Consumidor (Ley N.° 29571).",
  ]],
  ["Responsabilidades", [
    "Carrier Pro responde por la correcta gestión de la membresía y la habilitación del beneficio. La venta del combustible, su calidad y la atención en la estación son responsabilidad de la estación correspondiente.",
    "El usuario es responsable de la veracidad de los datos que proporciona.",
  ]],
  ["Propiedad intelectual", [
    "La marca Carrier Pro, su logotipo, diseños y contenidos del sitio son de titularidad de Carrier Pro o se usan con autorización. Primax es marca de su respectivo titular.",
  ]],
  ["Reclamos", [
    "Puedes registrar un reclamo o queja en nuestro Libro de Reclamaciones Virtual (/libro-de-reclamaciones). Responderemos en un plazo máximo de " + L.plazoRespuesta + ".",
  ]],
  ["Cambios y ley aplicable", [
    "Carrier Pro puede modificar estos términos; la versión vigente estará siempre publicada en esta página con su fecha de actualización.",
    "Estos términos se rigen por las leyes de la República del Perú.",
  ]],
];

export default function Terminos() {
  return (
    <LegalLayout title="Términos y condiciones" label="Legal" testid="page-terminos" intro="Las reglas claras de tu membresía Carrier Pro.">
      <LegalSections sections={SECTIONS} />
    </LegalLayout>
  );
}
