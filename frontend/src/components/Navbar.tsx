"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const [menuHeight, setMenuHeight] = useState(0);

  const links = [
    { href: "/home", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/structure", label: "Structure" },
    { href: "/products", label: "Products" },
  ];

  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight);
    }
  }, [menuRef, isOpen]);

  return (
    <nav className="bg-white shadow-md text-black px-14 py-4 md:px-28 flex justify-between items-center relative">
      <div>
        <Image src="/assets/BSLC Logo.svg" alt="Logo" width={100} height={100} />
      </div>

      <ul className="hidden md:flex gap-12 font-semibold text-base">
        {links.map((link) => (
          <li
            key={link.href}
            className={
              pathname === link.href
                ? "text-aqua"
                : "hover:text-aqua-hover transition-colors duration-300 ease-out"
            }
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={30} />}
        </button>
      </div>

      <ul
        ref={menuRef}
        style={{
          maxHeight: isOpen ? `${menuHeight}px` : "0px",
        }}
        className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col px-7 overflow-hidden transition-max-height duration-500 ease-out md:hidden"
      >
        {links.map((link) => (
          <li
            key={link.href}
            className={`
              ${pathname === link.href ? "text-aqua" : "text-black"}
              transition-colors duration-300 ease-out pb-3
              hover:text-aqua-hover
              active:text-aqua
              focus:text-aqua
              
            `}
            onClick={() => setIsOpen(false)}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
