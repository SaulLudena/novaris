// Cases.jsx

import Casesitem from "./casesitem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const casesInfo = [
  {
    id: 1,
    name: "Ana M.",
    tagline: "De Ocultar a Brillar: La Sonrisa que Cambió la Confianza.",
    description:
      "Ana evitaba las fotos. Después de 20 meses, su nueva sonrisa no solo alineó sus dientes, sino que transformó su manera de relacionarse con el mundo. ¡El resultado es espectacular!",
    problema: "Apiñamiento Severo y Sobremordida",
    tratamiento: "Invisalign",
    duracion: "20 meses",
    logro: "Mayor Confianza al Sonreír",
    beforeUrl: "/img/cases/case1_a.png",
    afterUrl: "/img/cases/case1_b.png",
  },
  {
    id: 2,
    name: "Javier R.",
    tagline: "Caso de Éxito: Corrección de Mordida Cruzada en tiempo récord.",
    description:
      "El tratamiento se enfocó en corregir una mordida cruzada compleja en 15 meses. Logramos una oclusión funcional y una estética perfecta, mejorando la masticación y la salud articular.",
    problema: "Mordida Cruzada Posterior y Diastemas",
    tratamiento: "Ortodoncia con Brackets Estéticos",
    duracion: "15 meses",
    logro: "Oclusión Funcional Completa",
    beforeUrl: "/img/cases/case1_a.png",
    afterUrl: "/img/cases/case1_b.png",
  },
  {
    id: 3,
    name: "Elena G.",
    tagline:
      "Nunca es Tarde: La Prueba de que Invertir en tu Sonrisa Vale la Pena.",
    description:
      "Elena, de 42 años, pensó que era demasiado tarde para iniciar su ortodoncia. El resultado es un recordatorio de que invertir en ti siempre vale la pena. Su nueva sonrisa lo comprueba.",
    problema: "Dientes Inclinados y Desgaste",
    tratamiento: "Ortodoncia Lingual",
    duracion: "24 meses",
    logro: "Estética Ideal y Reducción del Desgaste",
    beforeUrl: "/img/cases/case1_a.png",
    afterUrl: "/img/cases/case1_b.png",
  },
];

export default function Cases() {
  return (
    <div className="flex pt-36 md:pt-40 flex-col" id="casos">
      {/* TITULO */}
      <div className="mb-10 md:mb-16 w-[85%] max-w-[1900px] mx-auto">
        <div className="grid gap-3 md:gap-5">
          <h2 className="text-xl md:text-2xl tracking-widest text-gray-600">
            CASOS DE ÉXITO
          </h2>
          <span className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1] md:leading-[0.9]">
            <span className="text-[#E3AA00] font-bold">Conoce algunos</span>{" "}
            <br className="hidden sm:inline" />
            de nuestros casos.
          </span>
        </div>
      </div>

      {/* SWIPER — ENVUELTO CON LA ANCHURA QUE QUIERES */}
      <div className="w-[85%] max-w-[1900px] mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={30}
          autoHeight={true}
          className="rounded-xl pb-20 custom-pagination"
        >
          {casesInfo.map((item) => (
            <SwiperSlide key={item.id} className="!w-full flex justify-center">
              <Casesitem caseinfoitem={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
