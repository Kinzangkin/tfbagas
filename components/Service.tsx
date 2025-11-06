import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoMdCode } from "react-icons/io";
import { LuLayers } from "react-icons/lu";

function Service() {
  return (
    <div className='flex flex-col bg-blue-100 p-10 py-20 items-center space-y-5'>
        <h1 className='text-4xl'>My <span className='text-base'>Services</span></h1>
        <p className='text-center'>Specialized editing services tailored to make your content stand out</p>

        <div className='space-y-5'>
            <div className='bg-white flex flex-col p-7 space-y-7 rounded-2xl shadow-xl shadow-base/20'>
                <CiPlay1 className='text-base text-3xl' />
                <h1 className='text-xl'>Amv Editing</h1>
                <p className='text-md'>High-energy anime music videos with precise cuts, effects, and storytelling that captivate audiences</p>
            </div>

            <div className='bg-white flex flex-col p-7 space-y-7 rounded-2xl shadow-xl shadow-base/20'>
                <AiOutlineThunderbolt className='text-base text-3xl' />
                <h1 className='text-xl'>Jedag-Jedug Editing</h1>
                <p className='text-md'>Beat-synced edits with powerful bass drops and visual impact that make your content viral-worthy</p>
            </div>

            <div className='bg-white flex flex-col p-7 space-y-7 rounded-2xl shadow-xl shadow-base/20'>
                <IoMdCode className='text-base text-3xl' />
                <h1 className='text-xl'>Stream Overlay Design</h1>
                <p className='text-md'>Professional, custom overlays for Twitch, YouTube, and other platforms to elevate your streaming brand</p>
            </div>

            <div className='bg-white flex flex-col p-7 space-y-7 rounded-2xl shadow-xl shadow-base/20'>
                <LuLayers className='text-base text-3xl' />
                <h1 className='text-xl'>3D Motion Videos</h1>
                <p className='text-md'>Stunning 3D animations and motion graphics that bring depth and professionalism to your projects</p>
            </div>
        </div>
    </div>
  )
}

export default Service