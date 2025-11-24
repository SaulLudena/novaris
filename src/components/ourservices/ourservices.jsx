import Serviceitem from "./serviceitem";

export default function Ourservices() {
  return (
    <div className="w-[85%] max-w-[1900px] m-auto flex mt-40  flex-col">
      <div className="flex  justify-between  mb-15">
        <div className="grid gap-5">
          <h2 className="text-2xl tracking-widest">NUESTROS SERVICIOS</h2>
          <span className="text-7xl font-bold leading-[0.6]">
            <span className="text-[#53AC40] font-bold text-7xl">
              Cuidado dental
            </span>{" "}
            <br /> Sonrisa perfecta.
          </span>
        </div>
        <div className="flex items-end">
          <a href="" className="bg-[#21a2ec] text-white rounded-full px-8 py-3">
            Agenda tu cita
          </a>
        </div>
      </div>
      <ul className="grid grid-cols-3 gap-10">
        {services.map((service, i) => (
          <Serviceitem key={i} service={service} />
        ))}
      </ul>
    </div>
  );
}

const services = [
  {
    id: 1,
    serviceName: "Ortodoncia",
    description:
      "Alineamos tu sonrisa mediante tratamientos modernos que corrigen la posición dental y mejoran tu mordida.",
    imageUrl: "/img/services/1.png",
  },
  {
    id: 2,
    serviceName: "Diseño de Sonrisa",
    description:
      "Creamos una sonrisa armoniosa y personalizada mediante técnicas estéticas avanzadas.",
    imageUrl: "/img/services/2.png",
  },
  {
    id: 3,
    serviceName: "Blanqueamiento Dental",
    description:
      "Iluminamos tu sonrisa con tratamientos seguros y efectivos que aclaran varios tonos en una sola sesión.",
    imageUrl: "/img/services/3.png",
  },
  {
    id: 4,
    serviceName: "Endodoncia",
    description:
      "Tratamos y preservamos tus piezas dentales mediante procedimientos especializados de conductos.",
    imageUrl: "/img/services/4.png",
  },
  {
    id: 5,
    serviceName: "Implantología",
    description:
      "Reemplazamos dientes perdidos con implantes de alta calidad que recuperan función y estética.",
    imageUrl: "/img/services/5.png",
  },
  {
    id: 6,
    serviceName: "Rehabilitación Oral",
    description:
      "Restauramos estructuras dentales desgastadas o dañadas para devolver funcionalidad y belleza.",
    imageUrl: "/img/services/6.png",
  },
  {
    id: 7,
    serviceName: "Periodoncia",
    description:
      "Cuidamos la salud de tus encías y tratamos enfermedades periodontales para evitar la pérdida dental.",
    imageUrl: "/img/services/7.png",
  },
  {
    id: 8,
    serviceName: "Odontopediatría",
    description:
      "Brindamos atención especializada y amigable para los más pequeños, cuidando su sonrisa desde temprana edad.",
    imageUrl: "/img/services/8.png",
  },
];
