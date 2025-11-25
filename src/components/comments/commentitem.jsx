import Image from "next/image";
import React from "react";
import { IoMdStar } from "react-icons/io";
export default function commentitem({ comment, i }) {
  return (
    <li
      key={i}
      className={`rounded-2xl shadow-md  flex items-center gap-10 p-5 relative max-2xl:-translate-x-0 ${
        comment.id === 2 ? `-translate-x-15 ` : ""
      }`}
    >
      <Image
        src={comment.imageUrl}
        alt={comment.name}
        width={100}
        height={100}
        className="w-40 h-40 object-cover rounded-xl"
      />
      <div className="grid gap-4">
        <h1 className="text-3xl font-bold">{comment.name}</h1>
        <p className="text-md opacity-50 leading-5">"{comment.text}"</p>

        <ul className="flex text-3xl text-[#E3AA00]">
          <li>
            <IoMdStar />
          </li>
          <li>
            <IoMdStar />
          </li>
          <li>
            <IoMdStar />
          </li>
          <li>
            <IoMdStar />
          </li>
          <li>
            <IoMdStar />
          </li>
        </ul>
      </div>

      <div className=" absolute top-0 right-0 w-full h-full text-end text-9xl p-5 opacity-30">
        ”
      </div>
    </li>
  );
}
