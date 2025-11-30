import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Hero() {
  return (
    // 🚀 CAMBIOS CLAVE EN EL CONTENEDOR PRINCIPAL:
    // 1. Usamos h-screen (100vh) y añadimos el padding top para compensar el Topnav fijo.
    // 2. Quitamos el h-[calc] para simplificar el centrado.
    <div
      className="w-[85%] max-w-[1900px] mx-auto flex items-center h-screen  pt-40"
      id="#"
    >
      <div className="w-full grid grid-cols-12 gap-8 xl:gap-4 ">
        {" "}
        <div className="col-span-12 xl:col-span-6 grid gap-6 self-center text-center xl:text-left ">
          {" "}
          {/* TÍTULO */}
          <div className="flex flex-col ">
            {" "}
            <span className="text-5xl sm:text-6xl lg:text-7xl leading-[0.9] font-bold ">
              {" "}
              {/* 🔑 CORRECCIÓN DEL TÍTULO: Agregado un <br> para móvil */}
              <span className="text-[#29B2FF]">T</span>u nueva{" "}
              <span className="text-[#29B2FF]">sonrisa</span>{" "}
              <br className="inline sm:hidden" />
              Empieza <span className="text-[#53AC40]">aquí</span>.
            </span>
          </div>
          {/* Descripción */}
          <span className="opacity-85 leading-6 text-base sm:text-lg">
            Novaris combina estética y tecnología para crear{" "}
            <br className="hidden sm:inline" />
            resultados naturales que realzan lo mejor de ti.
          </span>
          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center xl:justify-start ">
            <a
              href="https://wa.me/51985985431?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20una%20cita%20en%20su%20consultorio."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#21a2ec] text-white rounded-full px-6 py-3 text-sm sm:text-base flex items-center gap-2 hover:bg-blue-600 transition w-full sm:w-auto justify-center"
            >
              <FaWhatsapp />
              Agenda tu cita
            </a>
            <a
              href="#servicios"
              className="bg-[#e3e3e3] rounded-full px-6 py-3 text-sm sm:text-base flex items-center gap-2 hover:bg-gray-300 transition w-full sm:w-auto justify-center"
            >
              <FaMagnifyingGlass />
              Ver servicios
            </a>
          </div>
          {/* Estadísticas */}
          <ul className="flex gap-0 sm:gap-10 pt-5 justify-center xl:justify-start ">
            <li className="grid text-center ">
              <span className="text-4xl sm:text-5xl font-bold">+15</span>
              <span className="text-xs sm:text-sm max-w-[100px]">
                Sonrisas transformadas
              </span>
            </li>
            <li className="h-full w-px bg-gray-300 hidden sm:block "></li>
            <li className="grid text-center ">
              <span className="text-4xl sm:text-5xl font-bold">+10</span>
              <span className="text-xs sm:text-sm max-w-[100px]">
                Años de experiencia
              </span>
            </li>
            <li className="h-full w-px bg-gray-300 hidden sm:block "></li>
            <li className="grid text-center ">
              <span className="text-4xl sm:text-5xl font-bold">+15</span>
              <span className="text-xs sm:text-sm max-w-[100px]">
                Especialistas certificados
              </span>
            </li>
          </ul>
        </div>
        {/* DERECHA (Imagen) */}
        <div className="hidden xl:col-span-6 xl:flex justify-center items-center -ml-6">
          <div className="relative w-full h-[600px]">
            <Image
              src="/img/hero.png"
              alt="Hero Image"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
