import React from "react";
import Teamitem from "./teamitem";
export default function Ourteam() {
  return (
    // Reducimos el margen superior en móvil (mt-20)
    <div className="w-[85%] max-w-[1900px] mx-auto flex mt-20 md:mt-40 flex-col">
      <div className="mb-10 md:mb-16">
        <div className="grid gap-3 md:gap-5">
          {/* 🛑 TÍTULO SECUNDARIO: Ajuste de tamaño */}
          <h2 className="text-xl md:text-2xl tracking-widest text-gray-600">
            NUESTRO EQUIPO
          </h2>

          {/* 🛑 TÍTULO PRINCIPAL: Ajuste de tamaño y leading */}
          <span className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1] md:leading-[0.8]">
            <span className="text-[#29B2FF] font-bold">Tu sonrisa</span>{" "}
            <br className="hidden sm:inline" /> En las mejores manos.
          </span>
        </div>
      </div>

      {/* 🛑 LISTA DE MIEMBROS: Escala de 1 a 2 a 3 columnas */}
      <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10">
        {teamMembers.map((teammember, i) => (
          <Teamitem key={i} member={teammember} />
        ))}
      </ul>
    </div>
  );
}

const teamMembers = [
  {
    id: 1,
    name: "Dr. Ricardo Marchena",
    studies: "Lic. en Odontología - UNMSM",
    specialty: "Ortodoncia",
    text: "Mas de 10 años ayudando a pacientes a recuperar su sonrisa.",
    imageUrl: "/img/members/1.png",
  },
  {
    id: 2,
    name: "Dr. Juan Gómez",
    studies: "Lic. en Odontología - UNMSM",
    specialty: "Implantes Dentales",
    text: "Especialista en implantes dentales con tecnología de punta.",
    imageUrl: "/img/members/2.png",
  },
  {
    id: 3,
    name: "Dra. Laura Rodríguez",
    studies: "Lic. en Odontología - UNMSM",
    specialty: "Estética Dental",
    text: "Transformando sonrisas con tratamientos personalizados.",
    imageUrl: "/img/members/3.png",
  },
];
