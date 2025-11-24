import Image from "next/image";

export default function Teamitem({ member, i }) {
  return (
    <li
      key={i}
      className="rounded-2xl shadow-md transition-all flex flex-col relative "
    >
      {/* Contenedor de la imagen. Se mantiene la solución anterior para ver la imagen completa. */}
      <div className="w-full relative ">
        <Image
          src={member.imageUrl}
          alt={member.name}
          width={400}
          height={400}
          className="object-contain rounded-t-xl w-full h-auto"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        {/* Contenido principal con descripción */}
        <div className="px-5 py-5 flex flex-col gap-6">
          <div>
            <span className="font-bold text-3xl">{member.name}</span>
            <p className="text-md opacity-50 leading-5">{member.studies}</p>
          </div>
          {/* 💡 CAMBIO AQUÍ: Concatenamos las comillas dobles */}
          <p className="text-md leading-5">"{member.text}"</p>
        </div>
      </div>
    </li>
  );
}
