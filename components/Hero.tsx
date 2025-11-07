import Link from 'next/link'
import React from 'react'
import { CiPlay1 } from 'react-icons/ci'
import { FaAngleDown } from "react-icons/fa";



function Hero() {
  return (
    <div className='flex flex-col h-screen justify-center items-center bg-linear-to-b from-blue-100 to-white '>
        <h1 className='font-black text-5xl m-10 text-center'><span className='text-base'>TFBAGAS</span> Video Editor</h1>
        <p className='flex text-center text-xl mx-7 mb-10 '>profesional video editing that brings your vision to life. specializing in AMV, Jedag-jedug, Stream overlays, and stunning 3d Motion Graphics.</p>
        <Link href="#contact">
            <button className='bg-base text-white flex p-2 px-3 space-x-3 items-center rounded-md shadow-xl cursor-pointer'>
                <CiPlay1 />
                <p>Watch portofolio</p>
            </button>
        </Link>
        <FaAngleDown
        className='text-base text-2xl absolute bottom-10'
        />
    </div>
  )
}

export default Hero
