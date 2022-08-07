import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Logo.png";
import Button from "../Button";
import NavLinks from "./NavLinks";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="flex items-center justify-around font-medium">
        <div className="z-50 flex w-full justify-between p-5 md:w-auto">
          <div className="relative h-9 w-28 md:cursor-pointer">
            <Image
              src={Logo}
              alt="logo"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          <div
            className="cursor-pointer text-3xl md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <IoClose /> : <IoMenu />}
          </div>
        </div>

        <ul className="hidden items-center gap-8 font-[Poppins] uppercase md:flex">
          <li>
            <Link href="/">
              <a className="inline-block py-7 px-3">Home</a>
            </Link>
          </li>
          <NavLinks />
        </ul>

        <div className="hidden md:block">
          <Button />
        </div>

        {/* Mobile Nav */}
        <ul
          className={`absolute bottom-0 h-full w-full bg-white py-24 pl-4 duration-500 md:hidden ${
            open ? "left-0" : "-left-full"
          }`}
        >
          <li>
            <Link href="/">
              <a className="inline-block py-7 px-3">Home</a>
            </Link>
          </li>
          <NavLinks />

          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
}
