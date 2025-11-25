import Commentitem from "./commentitem";
export default function Comments() {
  return (
    <div
      className="w-[85%] max-w-[1900px] m-auto flex pt-36 md:pt-40   justify-between items-center max-2xl:flex-col "
      id="testimonios"
    >
      <div className="mb-15  w-[50%] max-2xl:w-full">
        <div className="grid gap-5">
          <h2 className="text-xl md:text-2xl tracking-widest text-gray-600">
            TESTIMONIOS
          </h2>
          <span className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1] md:leading-[0.8]">
            <span className="text-[#E3AA00] font-bold ">Empatizamos con</span>{" "}
            <br /> Tus comentarios.
          </span>
        </div>
      </div>
      <ul className="flex flex-col  w-[50%] gap-5 max-2xl:w-full">
        {comments.map((comment, i) => (
          <Commentitem key={i} comment={comment} />
        ))}
      </ul>
    </div>
  );
}

const comments = [
  {
    id: 1,
    name: "Luis Martínez",
    rate: 5,
    text: "Excelente atención y resultados sorprendentes. ¡Mi sonrisa nunca se vio mejor! Se nota la experiencia del equipo en cada detalle.",
    imageUrl: "/img/commentators/1.png",
  },
  {
    id: 2,
    name: "Saul Rodríguez",
    rate: 5,
    text: "Profesionales y dedicados. Me sentí cómodo durante todo el tratamiento. Explican cada paso con claridad y eso genera mucha confianza.",
    imageUrl: "/img/commentators/2.png",
  },
  {
    id: 3,
    name: "Ana García",
    rate: 5,
    text: "Mi hijo adoró su visita. El equipo es muy amable y paciente con los niños. Definitivamente se ha convertido en nuestra clínica de confianza.",
    imageUrl: "/img/commentators/3.png",
  },
];
