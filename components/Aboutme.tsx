import Image from 'next/image'
import React from 'react'

function Aboutme() {
  return (
          <section id="about" className=" py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          
            <h2 className="text-4xl md:text-5xl mb-16 text-center">
              About <span className="text-base">Me</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left side - Image */}
                <div className="aspect-square relative rounded-lg overflow-hidden border ">
                  <Image
                    src="/image/foto3.jpg"
                    alt="Video editing workspace"
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 right-6 w-32 h-32  rounded-lg -z-10" />
              

              {/* Right side - Content */}
              
                <div className='space-y-10'>
                    <p className="text-gray-700 text-lg leading-relaxed">
                  Hi, my name is Bagaskoro Wisnu I'm Passionate video editor with 5+ years of experience creating content that captivates and resonates. 
                  My journey began with anime music videos and has evolved into a full spectrum of motion design.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I specialize in precise timing, dynamic transitions, and rhythm-based editing. Whether its 
                  high-energy AMVs, viral edits, or professional 3D motion graphics, I bring both technical 
                  expertise and creative vision to every project.
                </p>
                

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="text-center">
                    <div className="text-3xl text-base mb-1">5+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center border-x">
                    <div className="text-3xl text-base mb-1">200+</div>
                    <div className="text-sm text-gray-600">Projects Done</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl text-base mb-1">50+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          
        </div>
      </section>
  )
}

export default Aboutme
