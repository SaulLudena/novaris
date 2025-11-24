import React from "react";
import Teamitem from "./teamitem";
export default function Ourteam() {
  return (
    <div className="w-[85%] max-w-[1900px] m-auto flex mt-40  flex-col">
      <div className="mb-15">
        <div className="grid gap-5">
          <h2 className="text-2xl tracking-widest">NUESTROS EQUIPO</h2>
          <span className="text-7xl font-bold leading-[0.6]">
            <span className="text-[#29B2FF] font-bold text-7xl">
              Tu sonrisa
            </span>{" "}
            <br /> En las mejores manos.
          </span>
        </div>
      </div>
      <ul className="grid grid-cols-3 gap-10">
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
