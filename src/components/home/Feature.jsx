"use client";
import { useRef, useState } from "react";
import { Monitor, Video, ShieldCheck, PlayCircle, ArrowRight, PauseCircle } from 'lucide-react';
import Image from 'next/image';
import Pic11 from "../../../public/assets/img-11.png";
import Pic12 from "../../../public/assets/img-12.png";
import Pic13 from "../../../public/assets/img-13.png";
import Pic14 from "../../../public/assets/img-14.png";
import Pic15 from "../../../public/assets/img-15.png";
import Pic from "../../../public/assets/img-1.png";

const FeaturesAndWork = () => {

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };


  return (
    <div className="bg-white font-sans">

      {/* --- SECTION 1: TOP FEATURE CARDS (3 Cards Row) --- */}
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

      {/* --- SECTION 2: HOW IT WORKS --- */}
      <div className=" mx-auto  px-4 sm:px-6 lg:px-10 py-16">
        <div className="text-center mb-12">
     <h2 className="
  text-2xl 
  sm:text-3xl 
  md:text-4xl 
  font-semibold 
  text-gray-900 
  mb-2 
  md:mb-3 
">How it Works</h2>
          <p className="text-gray-500 text-sm md:text-base font-medium">
            Connecting with tutors who care and support made easy.
          </p>
        </div>

        <div className="flex  flex-col md:flex-row  items-center gap-14 ">
          {/* Left Column: 2 Cards */}
          <div className=" space-y-6">

            {/* Card 1 */}
            <div className="
    bg-[#FC040B] 
    p-5 
    rounded-2xl 
    shadow-sm 
    border border-gray-100
    group cursor-pointer hover:shadow-md transition-all
    w-[320px] 
    h-[190px]
    flex flex-col justify-between
  ">
              {/* IMAGE */}
              <div>
                <Image
                  src={Pic15}
                  alt="Search Tutor"
                  width={130}
                  height={130}
                  className="object-contain"
                  style={{ transform: "translateX(-20px)" }}
                />
              </div>

              {/* TEXT */}
              <h4 className="text-sm font-semibold text-white leading-snug">
                I need a tutor / childcare / <br /> house-care
              </h4>
            </div>

            {/* Card 2 */}
            <div className="
    bg-[#C79719] 
    p-5 
    rounded-2xl 
    shadow-sm 
    border border-gray-100
    group cursor-pointer hover:shadow-md transition-all
    w-[320px] 
    h-[190px]
    flex flex-col justify-between
  ">
              {/* IMAGE */}
              <div>
                <Image
                  src={Pic14}
                  alt="Search Tutor"
                  width={130}
                  height={130}
                  className="object-contain"
                  style={{ transform: "translateX(-20px)" }}
                />
              </div>

              {/* TEXT */}
              <h4 className="text-[15px] font-semibold text-white leading-snug">
                I want to become a tutor/babysitter/house-care worker
              </h4>
            </div>

          </div>


          {/* Right Column: Video Player Card */}
          <div className="w-full lg:w-3/4 h-[400px] relative rounded-3xl overflow-hidden shadow-2xl bg-black group">

            {/* VIDEO */}
            <video
              ref={videoRef}
              src="/assets/video.mp4"
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
              onEnded={() => setIsPlaying(false)}
              onClick={togglePlay}
            />

            {/* OVERLAY + BUTTONS */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

              {/* Play button - always visible when paused */}
              <button
                onClick={togglePlay}
                className={`bg-white text-[#FF1200] p-5 rounded-full shadow-2xl hover:scale-110 transition-transform duration-200
        ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}
                aria-label="Play video"
              >
                <PlayCircle size={48} />
              </button>

              {/* Pause button - only on hover when playing */}
              <button
                onClick={togglePlay}
                className={`absolute bg-white text-[#FF1200] p-5 rounded-full shadow-2xl hover:scale-110 transition-transform duration-200
        ${isPlaying ? 'opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto' : 'hidden'}`}
                aria-label="Pause video"
              >
                <PauseCircle size={48} />
              </button>

            </div>

          </div>
        </div>
      </div>

      {/* --- SECTION 3: BIG SALE BANNER --- */}
      <div className="mb-5">
        <div className="relative  p-8 md:p-12 overflow-hidden shadow-xl h-[400px]">

          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={Pic}
              alt="Banner Background"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-black/50 "></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center h-full gap-8">
            <div className="text-start">
              <span className="inline-block bg-white/20 text-white text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Limited Time Offer
              </span>
              <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4 leading-tight">
                Unlock Premium Features <br /> with 50% Flat Discount
              </h2>
              <p className="text-white text-[14px] md:text-base max-w-md font-medium">
                Subscribe to our yearly plan today and get full access to background checks and unlimited class scheduling.
              </p>
            </div>
          </div>

        </div>
      </div>



    </div>
  );
};

export default FeaturesAndWork;