export default function Contactitem({ contactitem, i }) {
  return (
    <li key={i}>
      <a
        href={contactitem.linksocial}
        target="_blank" // Abre el enlace en una nueva pestaña
        rel="noopener noreferrer"
        className="flex flex-col rounded-2xl shadow-lg "
      >
        <div className="flex flex-col items-center justify-center p-8 bg-white ">
          <div className="text-4xl">
            <p className="mb-4 text-8xl">{contactitem.icon}</p>
          </div>

          <p className="text-sm text-gray-700 mt-2">
            Nuestro {contactitem.name.toLowerCase()}
          </p>
        </div>

        <div className="h-3 bg-[#53AC40] transition duration-300  rounded-b-xl"></div>
      </a>
    </li>
  );
}
