import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Serviceitem({ service, i }) {
  return (
    <li
      key={i}
      className="rounded-2xl shadow-md transition-all flex flex-col relative"
    >
      <div
        className="w-16 h-16 rounded-full bg-blue-500 absolute top-50 left-4 text-black border-4 border-white z-10 
                   flex items-center justify-center "
      >
        {/* 🛑 TEXTO ID: Ajustado a responsive (xl en móvil, 2xl en sm+) */}
        <span className="font-bold text-white text-xl sm:text-2xl  w-full flex h-full items-center justify-center">
          {service.id}
        </span>
      </div>

      <div className="w-full h-56 relative ">
        <div className=" top-0  absolute z-3 w-full h-full bg-linear-to-t opacity-20 from-black to-zinc-500 rounded-t-xl"></div>
        <Image
          src={service.imageUrl}
          alt={service.serviceName}
          fill
          className="object-cover rounded-t-xl"
        />
      </div>

      {/* Contenido (Texto) */}
      <div className="flex-1 flex flex-col justify-between">
        {/* Contenido principal con descripción */}
        <div className="px-5 pt-12 flex flex-col gap-3">
          {/* 🛑 TÍTULO DEL SERVICIO: Ajustado a responsive (2xl en móvil, 3xl en sm+) */}
          <span className="font-bold text-2xl sm:text-3xl">
            {service.serviceName}
          </span>

          {/* 🛑 DESCRIPCIÓN: Ajustado a responsive (base en móvil, lg en sm+) */}
          <p className="text-base sm:text-lg opacity-65 leading-5">
            {service.description}
          </p>
        </div>

        {/* Contenedor del enlace "Saber más" y la barra azul */}
        <div className="w-full ">
          <a
            href={`https://wa.me/51985985431?text=Hola,%20me%20gustaría%20saber%20sobre%20el%20servicio%20de%20${encodeURIComponent(
              service.serviceName
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className=" px-5 py-5 text-[#2875a2] border-gray-200 hover:underline text-sm sm:text-base flex gap-2 items-center" // 🛑 TEXTO ENLACE: Ajustado a responsive (sm en móvil, base en sm+)
          >
            <FaWhatsapp />
            Saber más...
          </a>

          {/* La barra azul en la parte MÁS inferior */}
          <div className="bg-[#29b0ff] w-full h-3 rounded-b-xl"></div>
        </div>
      </div>
    </li>
  );
}
