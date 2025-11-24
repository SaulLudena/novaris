import { TbDental } from "react-icons/tb";

export default function Values() {
  const items = [
    {
      title: "Calidad",
      text: `Siempre te trataremos con lo mejor que novaris dispone para ti.`,
      icon: <TbDental className="text-7xl" />,
      color: "#E3AA00",
    },
    {
      title: "Responsabilidad",
      text: `Nos aseguramos de brindarte un servicio transparente y seguro.`,
      icon: <TbDental className="text-7xl" />,
      color: "#0087C6",
    },
    {
      title: "Innovación",
      text: `Trabajamos con tecnología de última generación para tu bienestar.`,
      icon: <TbDental className="text-7xl" />,
      color: "#7A00E6",
    },
  ];

  return (
    <div className="w-[85%] max-w-[1900px] m-auto flex items-center rounded-2xl shadow-2xl border border-zinc-100 mt-4">
      <ul className="flex justify-between w-full items-center p-10 gap-10">
        {items.map((item, i) => (
          <li key={i} className="flex gap-5">
            <div
              className="text-white p-2 rounded-xl"
              style={{ backgroundColor: item.color }}
            >
              {item.icon}
            </div>

            <div className="flex flex-col gap-2 justify-center">
              <span className="font-bold text-2xl">{item.title}</span>
              <span className="leading-4 whitespace-pre-line">{item.text}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
