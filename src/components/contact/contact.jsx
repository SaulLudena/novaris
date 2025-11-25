import React from "react";
import Contactitem from "./contactitem";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
const contactInfo = [
  {
    id: 1,
    name: "Facebook",
    studies: "Página Oficial",
    specialty: "@clinica_sonrisas",
    text: "Síguenos para ver casos reales, promociones y tips dentales.",
    linksocial: "https://www.facebook.com/centroodondologiconovaris",
    icon: <FaFacebookF />, // <--- ICONO
  },
  {
    id: 2,
    name: "WhatsApp",
    studies: "Atención Directa",
    specialty: "900 000 000",
    text: "Agenda citas, consulta precios y recibe atención inmediata.",
    linksocial: "https://wa.me/900000000",
    icon: <IoLogoWhatsapp />, // <--- ICONO
  },
  {
    id: 3,
    name: "Instagram",
    studies: "Perfil Profesional",
    specialty: "@clinica_sonrisas",
    text: "Contenido diario, historias y el detrás de cámaras de nuestros tratamientos.",
    linksocial: "https://www.instagram.com/centro_odontologico_novaris",
    icon: <AiFillInstagram />, // <--- ICONO
  },
  {
    id: 4,
    name: "TikTok",
    studies: "Contenido Educativo",
    specialty: "@clinica_sonrisas",
    text: "Videos explicativos, transformaciones y contenido rápido y útil.",
    linksocial: "https://www.tiktok.com/@clinicadentalnovaris",
    icon: <FaTiktok />, // <--- ICONO
  },
];

export default function Contact() {
  return (
    <div className="w-[85%] max-w-[1900px] m-auto flex my-40 flex-col">
      <div className="mb-15">
        <div className="grid gap-5">
          <h2 className="text-2xl tracking-widest">CONTACTO</h2>
          <span className="text-7xl font-bold leading-[0.6]">
            <span className="text-[#53AC40] font-bold text-7xl">
              Ubicanos en nuestras
            </span>{" "}
            <br />
            Redes sociales.
          </span>
        </div>
      </div>

      {/* 🛑 AQUÍ se renderizan las tarjetas */}
      <ul className="grid grid-cols-4 gap-10 mt-10">
        {contactInfo.map((contactitem, i) => (
          <Contactitem key={i} contactitem={contactitem} />
        ))}
      </ul>
    </div>
  );
}
