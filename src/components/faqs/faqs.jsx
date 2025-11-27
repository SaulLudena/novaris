import React from "react";

// 1. Arreglo de Elementos
const faqsData = [
  {
    id: 1,
    question: "¿Cuánto dura una consulta?",
    answer:
      "Generalmente entre 20 y 40 minutos, dependiendo del tratamiento. En procedimientos más complejos, el tiempo puede extenderse un poco para asegurar un trabajo preciso.",
  },
  {
    id: 2,
    question: "¿Atienden sin cita previa?",
    answer:
      "Sí, pero recomendamos agendar una cita para evitar esperas y asegurar una atención más rápida y personalizada.",
  },
  {
    id: 3,
    question: "¿Los tratamientos son dolorosos?",
    answer:
      "La mayoría de procedimientos se realizan con anestesia local y técnicas modernas que reducen la molestia al mínimo. Nuestro equipo se asegura de que estés cómodo en todo momento.",
  },
  {
    id: 4,
    question: "¿Disponen de medios de pago?",
    answer:
      "Sí. Trabajamos con varios seguros y EPS. Puedes consultarnos por WhatsApp para verificar si tu seguro está incluido.",
  },
];

export default function Faqs() {
  return (
    <div
      className="w-[85%] max-w-[1900px] mx-auto flex pt-36 md:pt-40 flex-col"
      id="faqs"
    >
      {/* SECCIÓN DE ENCABEZADO Y TEXTO INTRODUCTORIO (Se mantiene intacta) */}
      <div className="flex flex-col md:flex-row justify-between mb-10 md:mb-16">
        <div className="grid gap-3 md:gap-5 mb-6 md:mb-0">
          <h2 className="text-xl md:text-2xl tracking-widest text-gray-600 uppercase">
            PREGUNTAS FRECUENTES
          </h2>

          <span className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1] md:leading-[0.8]">
            <span className="text-[#318AFF] font-bold">Atendemos </span>
            <br className="hidden sm:inline" /> Tus dudas.
          </span>
        </div>

        {/* Descripción (Ajustado el estilo para que se vea como en el diseño) */}
        <div className="flex items-start md:items-end pt-2 md:pt-4 max-w-lg">
          <p className="text-gray-600 text-base md:text-lg">
            Resolvemos las dudas más comunes para que tomes una decisión
            informada y segura sobre tu tratamiento.
          </p>
        </div>
      </div>

      {/* 🔑 SECCIÓN DE FAQS: Únicamente modificado UL y LI */}
      <ul className="flex flex-col gap-6 w-full">
        {faqsData.map((item) => (
          <li
            key={item.id}
            // Clases para el estilo de tarjeta (gris claro, redondeado, sombra) y responsividad
            className="bg-zinc-50 p-10 rounded-xl shadow-md flex items-center flex-col md:flex-row justify-between gap-4"
          >
            {/* Pregunta (Columna Izquierda, 1/3 de ancho en desktop) */}
            <div className="w-full md:w-1/3 font-semibold text-lg text-gray-800 flex-shrink-0">
              {item.id}. {item.question}
            </div>

            {/* Respuesta (Columna Derecha, 2/3 de ancho en desktop) */}
            <div className="w-full md:w-2/3 text-gray-600 text-base leading-relaxed md:pt-1">
              {item.answer}
            </div>
          </li>
        ))}
      </ul>
      {/* 🔑 FIN DE MODIFICACIÓN */}
    </div>
  );
}
