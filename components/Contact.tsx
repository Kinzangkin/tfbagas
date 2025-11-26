'use client'

import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import React, { useState } from "react";
import { FaYoutube } from "react-icons/fa";

function Contact() {
  const discordUsername = "tfbagas#2016";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(discordUsername);
      } else {
        // fallback lama
        const textarea = document.createElement("textarea");
        textarea.value = discordUsername;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      alert("Discord username copied: " + discordUsername);

    } catch (err) {
      alert("Gagal menyalin username Discord.");
    }
  };

  return (
    <div className="bg-blue-100 items-center flex flex-col p-20 pt-40 justify-center">
      <div>
        <div className='flex flex-col items-center'>
          <h1 className='text-4xl'>Contact<span className='text-base'> us</span></h1>
          <p>A showcase of my recent work and creative projects</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 py-10 sm:w-60 items-center text-2xl">

        <a href="http://wa.me/6289630860427">
          <div className="bg-base text-white rounded-full p-3 shadow-xl "><FaWhatsapp /></div>
        </a>

        <a href="https://www.instagram.com/tfbagas.vz">
          <div className="bg-base text-white rounded-full p-3 shadow-xl "><FaInstagram /></div>
        </a>

        <a href="https://www.tiktok.com/@tfbagas">
          <div className="bg-base text-white rounded-full p-3 shadow-xl "><FaTiktok /></div>
        </a>

        <a href="https://www.youtube.com/@tfbagas">
          <div className="bg-base text-white rounded-full p-3 shadow-xl "><FaYoutube /></div>
        </a>

        {/* 🔥 Button Discord Copy */}
        <div className="m-4">
          <button
            onClick={copyToClipboard}
            className="px-3 py-1 rounded-full text-2xl bg-indigo-600 text-white flex gap-2 hover:bg-indigo-700 items-center shadow-xl"
            aria-label="Copy Discord username"
          >
            <BsDiscord />
            tfbagas#2016
          </button>
        </div>

        {/* Notifikasi kecil */}
        <div
          aria-hidden={!copied}
          className={`absolute bottom-2 text-sm ${copied ? "opacity-100" : "opacity-0"} transition-opacity`}
        >
          {copied ? "Copied: " + discordUsername : ""}
        </div>
      </div>
    </div>
  )
}

export default Contact;
