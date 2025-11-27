import React from "react";

export default function Casesitem({ caseinfoitem }) {
  const {
    name,
    tagline,
    description,

    beforeUrl,
    afterUrl,
  } = caseinfoitem;

  return (
    <div className="bg-white  rounded-xl flex flex-col lg:flex-row items-stretch mx-auto w-full ">
      {/* Columna Imágenes */}
      <div className="flex-1 mb-8 lg:mb-0 lg:pr-10 lg:w-1/2">
        {/* Cambiado a flex-col en móvil, grid-cols-2 en MD+ */}
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-4 h-full">
          <div className="flex flex-col items-center">
            <span className="font-semibold text-lg mb-2 text-gray-700">
              ANTES
            </span>
            <img
              src={beforeUrl}
              alt={`Antes de Ortodoncia - ${name}`}
              className="w-full object-cover rounded-lg shadow-md max-h-[400px]" // Se agregó max-h para limitar el tamaño de las imágenes
            />
          </div>

          <div className="flex flex-col items-center">
            <span className="font-semibold text-lg mb-2 text-gray-700">
              DESPUÉS
            </span>
            <img
              src={afterUrl}
              alt={`Después de Ortodoncia - ${name}`}
              className="w-full object-cover rounded-lg shadow-md max-h-[400px]" // Se agregó max-h para limitar el tamaño de las imágenes
            />
          </div>
        </div>
      </div>

      {/* Columna Texto */}
      {/* CLAVE: flex items-center para centrado vertical */}
      <div className="flex-1 flex lg:w-1/2">
        <div className="flex  justify-center flex-col w-full">
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 text-center lg:text-left">
            {name}
          </h3>
          <p className="text-xl font-medium text-[#E3AA00] mb-6 text-center lg:text-left">
            {tagline}
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed italic border-l-4 border-[#E3AA00] pl-4">
            "{description}"
          </p>

          {/* Bloque de Información Adicional (problema, tratamiento, etc. si se usan) */}
          {/* Se puede añadir una sección aquí si se necesita mostrar problema, tratamiento, duración y logro */}

          <a
            href="#contacto"
            className="w-full py-4 text-center text-xl font-bold bg-[#E3AA00] text-white rounded-lg hover:bg-[#D49F00] transition duration-300 shadow-lg mt-4"
          >
            Agenda Tu Valoración Gratis
          </a>
        </div>
      </div>
    </div>
  );
}
