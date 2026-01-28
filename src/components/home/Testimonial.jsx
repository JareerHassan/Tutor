'use client'

import React from 'react'
import Image from "next/image"

import Pic35 from "../../../public/assets/img-35.png"
import Pic36 from "../../../public/assets/img-36.png"
import Pic37 from "../../../public/assets/img-37.png"
import Pic22 from "../../../public/assets/img-22.png"

const testimonials = [
    {
        name: "Anil Singh",
        image: Pic35,
        text: "“Tutor Tutor Care helped my child learn faster and gain confidence. The sitter care is reliable and very caring. Highly recommended!”",
        featured: false,
    },
    {
        name: "Skylar Vetrovs",
        image: Pic36,
        text: "Tutor Tutor Care has been a lifesaver for our family! Their tutors are patient, engaging, and truly care about our child's progress. We also loved that their sitter care service made weekends stress-free — we always knew our kids were safe, happy, and well looked after. Highly recommend!",
        featured: true,
    },
    {
        name: "Wilson Vaccaro",
        image: Pic37,
        text: "Just Care Sitter provides trustworthy tutors and sitters. Professional, kind, and always on time. We feel stress-free!",
        featured: false,
    },
];

const Testimonials = () => {
    return (
        <section className="py-12 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto text-center">
                {/* Header Section */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-semibold text-[#1e293b] mb-4">Testimonials</h2>
                    <p className="text-gray-500 text-lg">How People are talking about Us</p>
                </div>

                {/* Testimonials Grid - Changed items-stretch to items-center */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-20 lg:gap-8 items-center py-8">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col p-6 md:p-8 rounded-2xl bg-white shadow-xl transition-all duration-500 h-fit
                                ${item.featured ? 'lg:scale-105 z-10 border-[3px]' : 'border-2'} 
                            `}
                            style={{
                                borderImageSource: 'linear-gradient(to bottom, #b91c1c, #f59e0b)',
                                borderImageSlice: 1,
                            }}
                        >
                            {/* Profile Image */}
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Quote Top Icon - Reduced margin */}
                            <div className="text-5xl text-[#b91c1c] font-serif leading-none mt-6 text-left">
                                “
                            </div>

                            <div className="mb-2">
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.name}</h3>
                                <p className="text-gray-600 text-sm md:text-base leading-snug italic">
                                    {item.text}
                                </p>
                            </div>

                            {/* Quote Bottom Icon - Reduced margin */}
                            <div className="text-5xl text-[#b91c1c] font-serif leading-none text-right mt-2">
                                ”
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
<div className="max-w-7xl py-12">
  <div
    className="relative roots rounded-3xl p-8 md:p-12 overflow-hidden shadow-xl h-[350px] md:h-[400px] flex items-center justify-center"
    style={{
      backgroundImage: `url(${Pic22.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Overlay dark layer */}
    <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>

    {/* Content */}
    <div className="relative z-10 flex flex-col justify-center items-center h-full gap-4 text-center w-full max-w-2xl px-4">
      <h2 className="text-2xl md:text-4xl font-semibold text-white leading-tight">
       Are you ready to get started? Subscribe Our Newsletter
      </h2>


      {/* Input + Button Flex Container */}
      <div className="w-full flex flex-col md:flex-row items-center gap-4 mt-2">
        <input
          type="email"
          placeholder="Enter Email"
          className="flex-1 px-4 py-3 rounded-full border-2 border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all"
        />
        <button className="
          bg-white 
          text-black 
          px-8 py-3 
          rounded-full 
          font-semibold 
          shadow-lg 
          hover:bg-gray-100 
          hover:scale-105 
          transition-all duration-300
        ">
        Submit
        </button>
      </div>
    </div>
  </div>
</div>

        </section>
    )
}

export default Testimonials;