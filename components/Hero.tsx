"use client";
import Link from "next/link";
import Image from "next/image";
import { CiPlay1 } from "react-icons/ci";
import { FaBolt, FaLayerGroup } from "react-icons/fa";

function Hero() {
  return (
    <section className="w-full bg-linear-to-b from-blue-50 to-white md:py-20 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center mt-20 sm:mt-40 justify-between px-6 md:px-10 gap-10">

        {/* LEFT CONTENT */}
        <div className="flex flex-col items-start md:w-1/2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <div className="bg-blue-100 text-blue-700 font-medium px-4 py-1 rounded-full text-sm flex items-center gap-2">
              <CiPlay1 /> Professional Video Editor
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-gray-900 ml-15 sm:ml-0 mb-6 leading-tight">
            <span className="block text-gray-900">TFBAGAS</span>
            <span className="text-blue-600">Video Editor</span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Specializing in <span className="font-semibold text-blue-600">AMV</span>, 
            <span className="font-semibold text-blue-600"> Jedag-Jedug</span>, 
            <span className="font-semibold text-blue-600"> Stream Overlays</span>, and 
            stunning <span className="font-semibold text-blue-600">3D Motion Graphics.</span>
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mb-10 text-gray-700 font-semibold">
            <div>
              <p className="text-2xl text-blue-600">5+</p>
              <p className="text-sm text-gray-500">Years Exp</p>
            </div>
            <div>
              <p className="text-2xl text-blue-600">200+</p>
              <p className="text-sm text-gray-500">Projects</p>
            </div>
            <div>
              <p className="text-2xl text-blue-600">50+</p>
              <p className="text-sm text-gray-500">Clients</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link href="#portfolio">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md font-medium transition">
                View Portfolio
              </button>
            </Link>
            <Link href="#contact">
              <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition">
                Contact Me
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative md:w-1/2 flex justify-center">
          <Image
            src="/image/logo.jpg"
            alt="editing software"
            width={500}
            height={350}
            className="rounded-2xl shadow-lg"
          />

          {/* Badge Top Right */}
          <div className="absolute -top-6 right-0 bg-white shadow-md rounded-xl p-3 flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <FaLayerGroup />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">Premium Quality</p>
              <p className="text-xs text-gray-500">Professional edits</p>
            </div>
          </div>

          {/* Badge Bottom Left */}
          <div className="absolute -bottom-6 left-0 bg-white shadow-md rounded-xl p-3 flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <FaBolt />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">Fast Turnaround</p>
              <p className="text-xs text-gray-500">Quick delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
