import Image from "next/image";
import React from "react";
import { IoMdStar } from "react-icons/io";
export default function commentitem({ comment, i }) {
  return (
    // 🛑 ESPACIADO (p) y GAP: Ajustado para móvil
    <li
      key={i}
      className={`rounded-2xl shadow-md flex items-center gap-4 sm:gap-10 p-4 sm:p-5 relative max-2xl:-translate-x-0 ${
        comment.id === 2 ? `-translate-x-15 ` : ""
      }`}
    >
      <Image
        src={comment.imageUrl}
        alt={comment.name}
        width={100}
        height={100}
        // 🛑 IMAGEN: Ajuste responsivo de tamaño
        className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 object-cover rounded-xl flex-shrink-0"
      />
      {/* 🛑 GAP: Ajustado para móvil */}
      <div className="grid gap-2 sm:gap-4">
        {/* TEXTOS (manteniendo los tamaños de la última versión) */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          {comment.name}
        </h1>
        <p className="text-sm sm:text-md md:text-md opacity-50 leading-5">
          "{comment.text}"
        </p>

        {/* ESTRELLAS (manteniendo los tamaños de la última versión) */}
        <ul className="flex text-xl sm:text-2xl md:text-3xl text-[#E3AA00]">
          <li>
            <IoMdStar />
          </li>
          <li>
            <IoMdStar />
          </li>
          <li>
            <IoMdStar />
          </li>
          <li>
            <IoMdStar />
          </li>
          <li>
            <IoMdStar />
          </li>
        </ul>
      </div>

      {/* 🛑 COMILLAS FLOTANTES: Ajuste del padding */}
      <div className=" absolute top-0 right-0 w-full h-full text-end text-6xl sm:text-8xl lg:text-9xl p-4 sm:p-5 opacity-30">
        ”
      </div>
    </li>
  );
}
