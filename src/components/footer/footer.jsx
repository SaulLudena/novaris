import React from "react";
import Image from "next/image";

// Datos de ejemplo basados en tu imagen (omito por brevedad, se mantienen sin cambios)
const menuItems = [
  { name: "Inicio", href: "#" },
  { name: "Servicios", href: "#servicios" },
  { name: "Nuestro equipo", href: "#equipo" },
  { name: "Testimonios", href: "#testimonos" },
  { name: "Contacto", href: "#contacto" },
];

const serviceItems = [
  { name: "Ortodoncia", href: "/servicios/1" },
  { name: "Diseño de sonrisa", href: "/servicios/2" },
  { name: "Blanqueamiento Dental", href: "/servicios/3" },
  { name: "Endodoncia", href: "/servicios/4" },
  { name: "Implantología", href: "/servicios/5" },
  { name: "Rehabilitación Oral", href: "/servicios/6" },
  { name: "Periodoncia", href: "/servicios/7" },
  { name: "Odontopediatría", href: "/servicios/8" },
];

const branchItems = [
  { name: "San Miguel", href: "/sedes/san-miguel" },
  { name: "El Agustino", href: "/sedes/el-agustino" },
];

export default function Footer() {
  return (
    // Reducimos el padding superior en móvil
    <footer className="pt-10 md:pt-20 lg:pt-40 pb-10 ">
      <div className="w-[85%] max-w-[1900px] mx-auto">
        {/* 🛑 AJUSTE CLAVE: Escalado de la cuadrícula */}
        {/* Móvil: 2 columnas (grid-cols-2) o 1 columna para apilar (grid-cols-1) */}
        {/* Tablet/Desktop (md): 3 columnas */}
        {/* Large Desktop (lg): 5 columnas originales */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 lg:gap-10">
          {/* Columna 1: Logo */}
          <div className="col-span-2 md:col-span-1">
            {" "}
            {/* Ocupa 2 columnas en móvil para evitar que sea muy estrecho */}
            <div className="w-full h-auto">
              <Image
                src="/img/logo.png"
                alt="Centro Odontológico Novaris Logo"
                width={150}
                height={60}
                className="w-full h-auto max-w-[150px]"
              />
            </div>
          </div>

          {/* Columna 2: Menú */}
          <div className="col-span-1">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-black">
              Menú
            </h3>
            <ul className="space-y-1 text-sm md:text-base">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-black transition duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div className="col-span-1">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-black">
              Servicios
            </h3>
            {/* Limitamos la altura de esta lista en móvil para que no sea excesivamente larga */}
            <ul className="space-y-1 text-sm md:text-base max-h-40 overflow-hidden md:max-h-full">
              {serviceItems.map((item, index) => (
                <li key={index} className="text-gray-600 truncate">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Sedes */}
          <div className="col-span-1">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-black">
              Sedes
            </h3>
            <ul className="space-y-1 text-sm md:text-base">
              {branchItems.map((item, index) => (
                <li key={index} className="text-gray-600">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 5: Contacto */}
          <div className="col-span-2 md:col-span-1">
            {" "}
            {/* Ocupa 2 columnas en móvil para que el texto respire */}
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-black">
              Contacto
            </h3>
            <a
              href="https://wa.me/51985985431?text=Hola%2C%20estoy%20interesado%20en%20m%C3%A1s%20informaci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#53AC40] transition duration-200 text-sm md:text-base"
            >
              +51 985985431
            </a>
            <div className="mt-4 text-gray-400 text-xs">
              {/* Añadimos un espacio para el copyright que suele ir aquí */}©{" "}
              {new Date().getFullYear()} Novaris. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
