"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="base-color bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold base-color">
            TfBagas
          </Link>

          {/* Menu desktop */}
          <div className="hidden md:flex space-x-6">
            <Link href="#home" className="text-gray-800 hover:text-base">
              Home
            </Link>
            <Link href="#about" className="text-gray-800 hover:text-base">
              About
            </Link>
            <Link href="#service" className="text-gray-800 hover:text-base">
              Services
            </Link>
            <Link href="#contact" className="text-gray-800 hover:text-base">
              Contact
            </Link>
          </div>

          {/* Tombol menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? (
                <RiCloseLine size={25} />
              ) : (
                <RiMenu3Line size={25} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col space-y-2 px-4 py-3 ">
            <Link
              href="home"
              className="text-gray-800 hover:text-base"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-gray-800 hover:text-base"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#service"
              className="text-gray-800 hover:text-base"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="text-gray-800 hover:text-base"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
