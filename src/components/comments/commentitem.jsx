import Image from "next/image";
import React from "react";
import { IoMdStar } from "react-icons/io";

export default function commentitem({ comment, i }) {
  // 🚀 CAMBIOS CLAVE:
  // 1. El desplazamiento `translate-x-15` se aplica por defecto (base / desktop).
  // 2. Se anula con `sm:translate-x-0` a partir de la pantalla 'sm'.

  const conditionalTranslate =
    comment.id === 2
      ? "translate-x-0 **sm:translate-x-15** 2xl:-translate-x-15"
      : "";

  return (
    <li
      key={i}
      // El orden de las clases es crucial: translate-x-15 (default) es sobrescrito por sm:translate-x-0
      className={`rounded-2xl shadow-md flex flex-col items-center sm:flex-row sm:items-start gap-4 sm:gap-5 p-4 sm:p-5 relative w-full ${conditionalTranslate}`}
    >
      {/* 1. IMAGEN: Arriba de todo, centrada y con ancho completo en móvil */}
      <Image
        src={comment.imageUrl}
        alt={comment.name}
        width={300}
        height={300}
        className="w-full max-w-sm sm:w-28 sm:h-28 md:w-40 md:h-40 object-cover rounded-xl flex-shrink-0"
      />

      {/* 2. BLOQUE DE TEXTO: Debajo de la imagen, centrado */}
      <div className="grid gap-2 sm:gap-4 text-center sm:text-left w-full">
        {/* Nombre */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          {comment.name}
        </h1>

        {/* Texto del Comentario */}
        <p className="text-sm sm:text-md md:text-md opacity-50 leading-5">
          "{comment.text}"
        </p>

        {/* 3. ESTRELLAS: Abajo del texto, centradas */}
        <ul className="flex text-xl sm:text-2xl md:text-3xl text-[#E3AA00] justify-center sm:justify-start">
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
    </li>
  );
}
