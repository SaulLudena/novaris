import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const menuItems = [
  { name: "Inicio", link: "#" },
  { name: "Servicios", link: "#servicios" },
  { name: "Casos", link: "#casos" },
  { name: "Testimonios", link: "#testimonios" },
  { name: "Nuestro equipo", link: "#equipo" },
  { name: "FAQS", link: "#faqs" },
  { name: "Contacto", link: "#contacto" },
];

export default function Topnav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="w-[90%] max-w-[1900px] mx-auto h-20 xl:h-32 flex items-center relative">
        {" "}
        {/* CLAVE: Cambiado de lg:h-32 a xl:h-32 */}
        <div className="flex w-full justify-between items-center">
          {/* LOGO */}
          <Link href="/">
            <Image
              src="/img/Logo.png"
              alt="Novaris Logo"
              width={180}
              height={60}
              // Logo ajustado: Pequeño en móvil, más grande en LG y XL
              className="object-contain w-32 lg:w-44 xl:w-[180px] h-auto"
              priority
            />
          </Link>

          {/* BOTÓN HAMBURGUESA: Oculto en XL y superior */}
          <button
            className="xl:hidden text-2xl z-50" // 🔑 CAMBIO CLAVE: lg:hidden -> xl:hidden
            onClick={toggleMenu}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* MENÚ DESKTOP: Visible en XL y superior */}
          <ul className="hidden xl:flex items-center space-x-2">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="flex flex-col items-center group cursor-pointer"
              >
                <Link
                  href={item.link}
                  // 🔑 CLASES MODIFICADAS AQUÍ:
                  className="px-3 py-1 text-sm xl:text-base font-medium text-gray-700 transition hover:bg-zinc-800 hover:text-white rounded-full"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* BOTÓN DESKTOP: Visible en XL y superior */}
          <a
            href="https://wa.me/51985985431?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20una%20cita%20en%20su%20consultorio."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:block border-2 border-black px-6 xl:px-8 py-2 rounded-full hover:border-blue-600 hover:text-blue-600 transition text-sm xl:text-base ml-4" // 🔑 CAMBIO CLAVE: lg:block -> xl:block, añadido ml-4
          >
            Reserva ahora
          </a>
        </div>
        {/* MENÚ MÓVIL: Oculto en XL y superior */}
        {isOpen && (
          <nav
            className={`fixed inset-0 bg-white p-8 xl:hidden transition-transform duration-300 transform z-40`} // 🔑 CAMBIO CLAVE: lg:hidden -> xl:hidden
            style={{ top: "5rem" }}
          >
            <ul className="flex flex-col space-y-6 text-xl mt-10">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    onClick={toggleMenu}
                    className="block w-full py-2 hover:text-blue-600 border-b border-gray-100" // Línea sutil para separar items
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://wa.me/51985985431?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20una%20cita%20en%20su%20consultorio."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMenu}
                  className="mt-6 block text-center border-2 border-black px-8 py-2 rounded-full hover:border-blue-600 hover:text-blue-600 transition"
                >
                  Reserva ahora
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
