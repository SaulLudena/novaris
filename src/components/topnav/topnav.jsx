import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const menuItems = [
  { name: "Inicio", link: "#" },
  { name: "Servicios", link: "#servicios" },
  { name: "Nuestro equipo", link: "#equipo" },
  { name: "Testimonios", link: "#testimonios" },
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
      {/* Altura ajustada: h-20 en móvil, h-24 en desktop (lg:h-24) */}
      <div className="w-[90%] max-w-[1900px] mx-auto h-20 lg:h-32 flex items-center relative">
        <div className="flex w-full justify-between items-center">
          {/* LOGO */}
          <Link href="/">
            <Image
              src="/img/Logo.png"
              alt="Novaris Logo"
              width={180}
              height={60}
              // 🛑 AJUSTE DEL LOGO: Más pequeño en móvil, cambia en lg (w-32 lg:w-44 xl:w-[180px])
              className="object-contain w-32 lg:w-44 xl:w-[180px] h-auto"
              priority
            />
          </Link>

          {/* BOTÓN HAMBURGUESA: Oculto en LG y superior */}
          <button
            className="lg:hidden text-2xl z-50" // 🛑 CAMBIADO DE md:hidden a lg:hidden
            onClick={toggleMenu}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* MENÚ DESKTOP: Visible en LG y superior */}
          <ul className="hidden lg:flex">
            {" "}
            {/* 🛑 CAMBIADO DE md:flex a lg:flex */}
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="flex flex-col items-center group cursor-pointer"
              >
                <Link
                  href={item.link}
                  className="px-4 py-1 text-sm lg:text-base"
                >
                  {item.name}
                </Link>
                <span className="w-2 h-2 bg-black rounded-full opacity-0 group-hover:opacity-100 transition duration-300"></span>
              </li>
            ))}
          </ul>

          {/* BOTÓN DESKTOP: Visible en LG y superior */}
          <a
            href="https://wa.me/51985985431?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20una%20cita%20en%20su%20consultorio."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block border-2 border-black px-6 lg:px-8 py-2 rounded-full hover:border-blue-600 hover:text-blue-600 transition text-sm lg:text-base" // 🛑 CAMBIADO DE md:block a lg:block
          >
            Reserva ahora
          </a>
        </div>

        {/* MENÚ MÓVIL: Oculto en LG y superior */}
        {isOpen && (
          <nav
            className={`fixed inset-0 bg-white p-8 lg:hidden transition-transform duration-300 transform z-40`} // 🛑 CAMBIADO DE md:hidden a lg:hidden
            style={{ top: "5rem" }}
          >
            <ul className="flex flex-col space-y-6 text-xl mt-10">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    onClick={toggleMenu}
                    className="block w-full py-2 hover:text-blue-600"
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
