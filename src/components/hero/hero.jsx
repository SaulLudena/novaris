import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    // Contenedor principal: Menos padding arriba en móvil (pt-32)
    <div className="w-[85%] max-w-[1900px] mx-auto pt-32 lg:pt-52 pb-20 flex items-center">
      <div className="w-full grid grid-cols-12 gap-8 xl:gap-4">
        {/* IZQUIERDA (Contenido / Texto) */}
        {/* El texto ocupa 12 columnas hasta el breakpoint XL */}
        <div className="col-span-12 xl:col-span-6 grid gap-6 self-center text-center xl:text-left">
          {" "}
          {/* 🛑 CAMBIADO DE LG A XL */}
          {/* Título principal */}
          <div className="flex flex-col">
            <span className="text-5xl sm:text-6xl lg:text-7xl leading-[0.9] font-bold">
              <span className="text-[#29B2FF]">T</span>u nueva{" "}
              <span className="text-[#29B2FF]">sonrisa</span> <br />
              Empieza <span className="text-[#53AC40]">aquí</span>.
            </span>
          </div>
          {/* Descripción */}
          <span className="opacity-85 leading-6 text-base sm:text-lg">
            Novaris combina estética y tecnología para crear <br />
            resultados naturales que realzan lo mejor de ti.
          </span>
          {/* Botones */}
          <div className="flex gap-4 items-center justify-center xl:justify-start pt-2">
            {" "}
            {/* 🛑 CAMBIADO DE LG A XL */}
            <a
              href=""
              className="bg-[#21a2ec] text-white rounded-full px-6 py-3 text-sm sm:text-base"
            >
              Agenda tu cita
            </a>
            <a
              href=""
              className="bg-[#e3e3e3] rounded-full px-6 py-3 text-sm sm:text-base"
            >
              Ver servicios →
            </a>
          </div>
          {/* Estadísticas */}
          <ul className="flex gap-4 sm:gap-10 pt-5 justify-center xl:justify-start">
            {" "}
            {/* 🛑 CAMBIADO DE LG A XL */}
            <li className="grid text-center">
              <span className="text-4xl sm:text-5xl font-bold">+15</span>
              <span className="text-xs sm:text-sm max-w-[100px]">
                Sonrisas transformadas
              </span>
            </li>
            <li className="h-full w-px bg-gray-300 hidden sm:block"></li>
            <li className="grid text-center">
              <span className="text-4xl sm:text-5xl font-bold">+10</span>
              <span className="text-xs sm:text-sm max-w-[100px]">
                Años de experiencia
              </span>
            </li>
            <li className="h-full w-px bg-gray-300 hidden sm:block"></li>
            <li className="grid text-center">
              <span className="text-4xl sm:text-5xl font-bold">+15</span>
              <span className="text-xs sm:text-sm max-w-[100px]">
                Especialistas certificados
              </span>
            </li>
          </ul>
        </div>

        {/* DERECHA (Imagen) */}
        {/* 🛑 RESPONSIVE: Ahora la imagen está oculta hasta el breakpoint XL (1280px) */}
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
