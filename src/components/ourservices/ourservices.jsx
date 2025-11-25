import Serviceitem from "./serviceitem"; // Asumiendo que esta ruta es correcta
import React from "react";

// Datos de servicios (manteniendo el mismo array)
const services = [
  {
    id: 1,
    serviceName: "Ortodoncia",
    description:
      "Alineamos tu sonrisa mediante tratamientos modernos que corrigen la posición dental y mejoran tu mordida.",
    imageUrl: "/img/services/1.png",
  },
  {
    id: 2,
    serviceName: "Diseño de Sonrisa",
    description:
      "Creamos una sonrisa armoniosa y personalizada mediante técnicas estéticas avanzadas.",
    imageUrl: "/img/services/2.png",
  },
  {
    id: 3,
    serviceName: "Blanqueamiento Dental",
    description:
      "Iluminamos tu sonrisa con tratamientos seguros y efectivos que aclaran varios tonos en una sola sesión.",
    imageUrl: "/img/services/3.png",
  },
  {
    id: 4,
    serviceName: "Endodoncia",
    description:
      "Tratamos y preservamos tus piezas dentales mediante procedimientos especializados de conductos.",
    imageUrl: "/img/services/4.png",
  },
  {
    id: 5,
    serviceName: "Implantología",
    description:
      "Reemplazamos dientes perdidos con implantes de alta calidad que recuperan función y estética.",
    imageUrl: "/img/services/5.png",
  },
  {
    id: 6,
    serviceName: "Rehabilitación Oral",
    description:
      "Restauramos estructuras dentales desgastadas o dañadas para devolver funcionalidad y belleza.",
    imageUrl: "/img/services/6.png",
  },
  {
    id: 7,
    serviceName: "Periodoncia",
    description:
      "Cuidamos la salud de tus encías y tratamos enfermedades periodontales para evitar la pérdida dental.",
    imageUrl: "/img/services/7.png",
  },
  {
    id: 8,
    serviceName: "Odontopediatría",
    description:
      "Brindamos atención especializada y amigable para los más pequeños, cuidando su sonrisa desde temprana edad.",
    imageUrl: "/img/services/8.png",
  },
];

export default function Ourservices() {
  return (
    // Reducimos el margen superior en móvil (mt-20)
    <div className="w-[85%] max-w-[1900px] mx-auto flex mt-20 md:mt-40 flex-col">
      {/* 1. 🛑 ENCABEZADO: De flex horizontal a flex-col en móvil */}
      <div className="flex flex-col md:flex-row justify-between mb-10 md:mb-16">
        {/* Título principal */}
        <div className="grid gap-3 md:gap-5 mb-6 md:mb-0">
          <h2 className="text-xl md:text-2xl tracking-widest ">
            NUESTROS SERVICIOS
          </h2>{" "}
          {/* 🛑 Fuente más pequeña */}
          <span className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1] md:leading-[0.8]">
            {" "}
            {/* 🛑 Tamaño de fuente y leading ajustados */}
            <span className="text-[#53AC40] font-bold">
              Cuidado dental
            </span>{" "}
            <br className="hidden sm:inline" /> Sonrisa perfecta.
          </span>
        </div>

        {/* Botón */}
        <div className="flex items-start md:items-end">
          <a
            href=""
            className="bg-[#21a2ec] text-white rounded-full px-6 py-3 text-sm sm:text-base whitespace-nowrap"
          >
            Agenda tu cita
          </a>
        </div>
      </div>

      {/* 2. 🛑 LISTA DE SERVICIOS: Escala de 1 a 2 a 3 columnas */}
      <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10">
        {services.map((service, i) => (
          <Serviceitem key={i} service={service} />
        ))}
      </ul>
    </div>
  );
}
