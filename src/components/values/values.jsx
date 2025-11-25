import { TbDental } from "react-icons/tb";
import React from "react";

export default function Values() {
  const items = [
    {
      title: "Calidad",
      text: `Siempre te trataremos con lo mejor que novaris dispone para ti.`,
      icon: <TbDental className="text-4xl sm:text-7xl" />,
      color: "#E3AA00",
    },
    {
      title: "Responsabilidad",
      text: `Nos aseguramos de brindarte un servicio transparente y seguro.`,
      icon: <TbDental className="text-4xl sm:text-7xl" />,
      color: "#0087C6",
    },
    {
      title: "Innovación",
      text: `Trabajamos con tecnología de última generación para tu bienestar.`,
      icon: <TbDental className="text-4xl sm:text-7xl" />,
      color: "#7A00E6",
    },
  ];

  return (
    <div className="w-[85%] max-w-[1900px] mx-auto rounded-2xl shadow-xl xl:shadow-2xl border border-zinc-100 mt-8">
      {/* UL: flex-col en móvil, flex-row en XL y superior */}
      <ul className="flex flex-col xl:flex-row justify-between w-full p-10  gap-6 xl:gap-10">
        {items.map((item, i) => (
          <li
            key={i}
            // 🛑 UX RESTAURADA: Se añade shadow-md y hover:shadow-xl para interacción
            className="flex gap-4 xl:gap-5 w-full xl:w-1/3  rounded-lg bg-white "
          >
            {/* Ícono */}
            <div
              className="text-white p-2 rounded-xl self-start"
              style={{ backgroundColor: item.color }}
            >
              {item.icon}
            </div>

            {/* Texto */}
            <div className="flex flex-col gap-1 justify-center">
              <span className="font-bold text-lg sm:text-xl xl:text-2xl">
                {item.title}
              </span>
              <span className="leading-5 text-sm sm:text-base text-gray-700">
                {item.text}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
