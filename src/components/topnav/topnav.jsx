import Link from "next/link";
import Image from "next/image";

const menuItems = [
  { name: "Inicio", link: "/" },
  { name: "Servicios", link: "/about" },
  { name: "Nuestro equipo", link: "/contact" },
  { name: "Testimonios", link: "/login" },
  { name: "Contacto", link: "" },
];

export default function Topnav() {
  return (
    <div className="w-[90%] max-w-[1900px] m-auto h-[18vh] flex items-center ">
      <div className="flex w-full justify-between items-center ">
        {/* LOGO */}
        <Link href="/">
          <Image
            src="/img/Logo.png"
            alt="Novaris Logo"
            width={180}
            height={60}
            className="object-contain"
            priority
          />
        </Link>

        {/* MENU */}
        <ul className="flex">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-center group cursor-pointer "
            >
              <Link href={item.link} className="px-4 py-1">
                {item.name}
              </Link>

              {/* Bolita dinámica en hover */}
              <span className="w-2 h-2 bg-black rounded-full  opacity-0 group-hover:opacity-100 "></span>
            </li>
          ))}
        </ul>

        {/* BOTÓN */}
        <Link
          href="/reserva"
          className="border-2 border-black px-8 py-2 rounded-full hover:border-blue-600 hover:text-blue-600 transition"
        >
          Reserva ahora
        </Link>
      </div>
    </div>
  );
}
