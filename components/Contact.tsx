'use client'

import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import React, { useState } from "react";

function Contact() {
  const discordUsername = "YourName#1234"; // ganti dengan username Discord-mu
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
      setTimeout(() => setCopied(false), 2000); // notifikasi hilang 2s
    } catch (err) {
      console.error("Gagal menyalin:", err);
    }
  };
  return (
    <div className="flex bg-blue-100 flex-wrap justify-center gap-3 py-10 items-center text-2xl">
        <a href="http://wa.me/6289630860427">
        <div className="bg-base text-white rounded-full p-3 shadow-xl "><FaWhatsapp /></div>
        </a>
        <a href="https://www.instagram.com/tfbagas.vz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
        <div className="bg-base text-white rounded-full p-3 shadow-xl "><FaInstagram /></div>
        </a>
        <a href="https://www.tiktok.com/@tfbagas?is_from_webapp=1&sender_device=pc">
        <div className="bg-base text-white rounded-full p-3 shadow-xl "><FaTiktok /></div>
        </a>
        <div className="m-4">
            <button
                onClick={copyToClipboard}
                className="px-3 py-1 rounded-full text-2xl bg-indigo-600 text-white flex gap-2 hover:bg-indigo-700 items-center shadow-xl"
                aria-label="Copy Discord username"
                >
                <BsDiscord />
                Copy Discord
            </button>
        </div>
            <div
            aria-hidden={!copied}
            className={` absolute bottom-2 text-sm ${copied ? "opacity-100" : "opacity-0"} transition-opacity`}
        >
            {copied ? "Copied: " + discordUsername : ""}
        </div>
    </div>
  )
}

export default Contact