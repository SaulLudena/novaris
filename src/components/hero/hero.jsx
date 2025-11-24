import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="w-[85%] max-w-[1900px] m-auto py-20 flex items-center">
      <div className="w-full grid grid-cols-12 gap-4">
        {/* IZQUIERDA */}
        <div className="col-span-6 grid gap-6 self-center">
          <div className="flex flex-col">
            <span className="text-7xl leading-[0.9]">
              <span className="text-[#29B2FF]">T</span>u nueva{" "}
              <span className="text-[#29B2FF]">sonrisa</span> <br />
              Empieza <span className="text-[#53AC40]">aquí</span>.
            </span>
          </div>

          <span className="opacity-85 leading-6 text-lg">
            Novaris combina estética y tecnología para crear <br />
            resultados naturales que realzan lo mejor de ti.
          </span>

          <div className="flex gap-4 items-center">
            <a
              href=""
              className="bg-[#21a2ec] text-white rounded-full px-8 py-3"
            >
              Agenda tu cita
            </a>
            <a href="" className="bg-[#e3e3e3] rounded-full px-8 py-3">
              Ver servicios →
            </a>
          </div>

          <ul className="flex gap-10 pt-5">
            <li className="grid text-center">
              <span className="text-5xl">+15</span>
              <span>Sonrisas transformadas</span>
            </li>

            <li className="border"></li>

            <li className="grid text-center">
              <span className="text-5xl">+10</span>
              <span>Años de experiencia</span>
            </li>

            <li className="border"></li>

            <li className="grid text-center">
              <span className="text-5xl">+15</span>
              <span>Especialistas certificados</span>
            </li>
          </ul>
        </div>

        {/* DERECHA */}
        <div className="col-span-6 flex justify-center items-center -ml-6">
          <div className="relative w-full h-[600px]">
            <Image
              src="/img/hero.png"
              alt="Hero Image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
