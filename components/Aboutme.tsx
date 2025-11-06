import Image from 'next/image'
import React from 'react'

function Aboutme() {
  return (
    <div className='flex flex-col m-10 space-y-10'>
        <div className='text-4xl flex items-center justify-center m-10'>
            <h1>About <span className='text-base'>Me</span></h1>
        </div>
        <div className='w-full h-100 relative '>
            <Image 
            src="/image/foto1.jpg"
            alt=""
            fill
            className=" object-fill rounded-2xl"
            />
        </div>
        <div className='text-xl'>
            Passionate video editor with 5+ years of experience creating content that captivates and resonates. My journey began with anime music videos and has evolved into a full spectrum of motion design.
        </div>
        <div className='text-md'>
            I specialize in precise timing, dynamic transitions, and rhythm-based editing. Whether its high-energy AMVs, viral edits, or professional 3D motion graphics, I bring both technical expertise and creative vision to every project.
        </div>
        <div className='flex justify-center space-x-3'>
            <div className='flex flex-col w-30 space-y-0.5 text-center'>
                <h1 className='text-4xl text-base'>5+</h1>
                <p>Years Experience</p>
            </div>
            <div className='flex flex-col w-30 space-y-0.5 text-center'>
                <h1 className='text-4xl text-base'>350+</h1>
                <p>Projects Done</p>
            </div>
            <div className='flex flex-col w-30 space-y-0.5 text-center'>
                <h1 className='text-4xl text-base'>60+</h1>
                <p>Happy Clients</p>
            </div>
        </div>
    </div>
  )
}

export default Aboutme