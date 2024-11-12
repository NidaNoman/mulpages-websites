
"use client";
import { useState } from "react";
import Link from "next/link";
import { MdOutlineMenu, MdClose } from "react-icons/md";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu open and close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center bg-pink-100 h-24 p-7">
      <div>
        <h2 className="italic font-serif text-3xl sm:text-4xl md:text-5xl">
          Skin Bliss
        </h2>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden sm:flex gap-x-6 sm:gap-x-12 md:gap-x-16 font-serif text-xl sm:text-2xl md:text-3xl">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </nav>

      {/* Hamburger Icon for Mobile */}
      <div className="sm:hidden flex items-center">
        {isMenuOpen ? (
          <MdClose size={30} onClick={toggleMenu} />
        ) : (
          <MdOutlineMenu size={30} onClick={toggleMenu} />
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="absolute top-24 left-0 w-full bg-pink-100 flex flex-col items-center gap-y-4 font-serif text-xl py-6 sm:hidden z-50">
          <li onClick={toggleMenu}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/products">Products</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/contact">Contact</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/about">About</Link>
          </li>
        </ul>
      )}
    </header>
  );
}
