'use client'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Image from "next/image"
import Pic11 from "../../../public/assets/img-11.png";
import Pic12 from "../../../public/assets/img-12.png";
import Pic13 from "../../../public/assets/img-13.png";
import Pic31 from "../../../public/assets/img-31.png"
import Pic32 from "../../../public/assets/img-32.png"
import Pic33 from "../../../public/assets/img-33.png"

// Swiper styles
import 'swiper/css'

const Card = () => {
    const [activeDot, setActiveDot] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState(null);

    const baseTutors = [
        { id: 1, name: "Marley Gouse", role: "Tutor", image: Pic31, bgColor: "bg-[#64b5d6]" },
        { id: 2, name: "Sarah Khan", role: "SAT Tutor", image: Pic32, bgColor: "bg-[#ff94b4]" },
        { id: 3, name: "David Smith", role: "English Tutor", image: Pic33, bgColor: "bg-[#fcd34d]" },
    ]

    // Creating a loop-friendly array
    const tutors = [...baseTutors, ...baseTutors, ...baseTutors];

    const handleDotClick = (index) => {
        if (swiperInstance) {
            // Finding the first occurrence of the index in the looped array
            swiperInstance.slideToLoop(index);
        }
    };

    return (
        <>

           <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 roots p-12">
          {/* Card 1 */}
          <div className="flex flex-col items-start text-start p-5 bg-[#F9FAFB] rounded-2xl border border-gray-50 transition-transform hover:-translate-y-1">
            <div className="w-12 h-14 mb-1  ">
              <Image
                src={Pic12}
                alt="Virtual White Board"
                className="object-contain"
              />
            </div>

            <h3 className="text-base font-bold text-gray-900 mb-1 ms-1">Virtual White Board</h3>
            <p className="text-gray-500 text-[13px] ms-1">Teach online / Attend Online Class</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-start text-start p-5 bg-[#F9FAFB] rounded-2xl border border-gray-50 transition-transform hover:-translate-y-1">
            <div className="w-12 h-14 mb-1 ">
              <Image
                src={Pic13}
                alt="Virtual White Board"
                className="object-contain"
              />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-1">Video Conferencing</h3>
            <p className="text-gray-500 text-[13px]">Schedule a Video Call / Interview</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-start text-start p-5 bg-[#F9FAFB] rounded-2xl border border-gray-50 transition-transform hover:-translate-y-1">
            <div className="w-12 h-14 mb-1 ">
              <Image
                src={Pic11}
                alt="Virtual White Board"
                className="object-contain"
              />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-1 ms-1">Background Checks</h3>
            <p className="text-gray-500 text-[13px] ms-1">Run Request Background checks</p>
          </div>
        </div>
      </div>

        <section className="max-w-7xl mx-auto px-6 py-20 font-sans overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-10">

                {/* Left Content */}
             

                {/* Slider Right */}
                <div className="lg:w-2/3 w-full h-[500] mb-18">
                    <Swiper
                        onSwiper={setSwiperInstance}
                        modules={[Autoplay]}
                        spaceBetween={10}
                        slidesPerView={1.2}
                        centeredSlides={true}
                        loop={true}
                        speed={800}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        onRealIndexChange={(swiper) => {
                            setActiveDot(swiper.realIndex % baseTutors.length);
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 2.5 },
                        }}
                        className="tutor-swiper !flex items-center" // Ensuring vertical alignment
                    >
                        {tutors.map((tutor, index) => (
                            <SwiperSlide key={`${tutor.id}-${index}`} className="flex items-center">
                                {({ isActive }) => (
                                    <div
                                        className={`relative transition-all duration-700 rounded-[1rem] overflow-hidden flex flex-col items-center shadow-xl max-full
                                            ${tutor.bgColor}
                                            ${isActive 
                                                ? 'h-[520px] scale-100 opacity-100 z-10' 
                                                : 'h-[420px] scale-90 opacity-60 z-0'
                                            }
                                        `}
                                    >
                                        {/* Image Container */}
                                        <div className="absolute inset-0 w-full h-full">
                                            <Image
                                                src={tutor.image}
                                                alt={tutor.name}
                                                fill
                                                className="object-cover mix-blend-multiply opacity-90"
                                            />
                                        </div>

                                        {/* Content - Only visible when active */}
                                        <div className={`absolute bottom-0 left-0 w-full p-8 z-20 text-center transition-all duration-500 
                                            ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                            <h4 className="text-2xl font-semibold text-white leading-tight">{tutor.name}</h4>
                                            <p className="text-white/80 text-sm font-medium uppercase tracking-widest">{tutor.role}</p>
                                        </div>

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Dots */}
                    <div className="flex justify-center gap-3 mt-12">
                        {baseTutors.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`transition-all duration-500 rounded-full h-2.5 cursor-pointer outline-none
                                    ${activeDot === index
                                        ? 'w-10 roots' // 'roots' class replaced with bg-blue for demo
                                        : 'w-2.5 bg-slate-200 hover:bg-slate-300'}`}
                            />
                        ))}
                    </div>
                </div>
                   <div className="lg:w-1/3 text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                        Meet Our Tutors
                    </h2>
                    <p className="text-slate-600 text-md leading-relaxed">
                        A trusted platform for educators who care about students and support families along the way. Browse profiles, compare ratings and availability, and book the tutor who best fits your goals and schedule.
                    </p>
                </div>
            </div>

            {/* Injected Style for Swiper Centering */}
            <style jsx global>{`
                .tutor-swiper .swiper-wrapper {
                    align-items: center;
                    display: flex;
                }
            `}</style>
        </section>
        </>
    )
}

export default Card;