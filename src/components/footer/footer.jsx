import React from "react";
import Image from "next/image";

// Datos de ejemplo basados en tu imagen
const menuItems = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "Nuestro equipo", href: "/equipo" },
  { name: "Testimonios", href: "/sedes" },
  { name: "Contacto", href: "/redes" },
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
    // Contenedor principal del footer con el color de fondo gris claro de la imagen
    <footer className=" pt-40 pb-10">
      <div className="w-[85%] max-w-[1900px] mx-auto">
        <div className="grid grid-cols-5 gap-10">
          {/* Columna 1: Logo */}
          <div className="col-span-1">
            {/* 🚨 NOTA: Reemplaza '/img/logo-novaris.png' con la ruta real de tu imagen.
              Ajusta width y height al tamaño de tu logo.
            */}
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
            <h3 className="text-xl font-bold mb-4 text-black">Menú</h3>
            <ul className="space-y-1">
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
            <h3 className="text-xl font-bold mb-4 text-black">Servicios</h3>
            <ul className="space-y-1">
              {serviceItems.map((item, index) => (
                <li key={index} className="text-gray-600">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Sedes */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 text-black">Sedes</h3>
            <ul className="space-y-1">
              {branchItems.map((item, index) => (
                <li key={index} className="text-gray-600">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 5: Contacto */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 text-black">Contacto</h3>
            <a
              href="https://wa.me/51985985431?text=Hola%2C%20estoy%20interesado%20en%20m%C3%A1s%20informaci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#53AC40] transition duration-200"
            >
              +51 958958431
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
