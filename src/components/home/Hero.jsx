"use client";
import React from 'react';
import Image from 'next/image';
import { Search, Briefcase, MapPin, Wallet } from 'lucide-react';

// Aapke assets
import Pic from "../../../public/assets/img-9.png";
import Pic1 from "../../../public/assets/img-10.png"; // Google Play
import Pic2 from "../../../public/assets/img-7.png"; // App Store
import Pic3 from "../../../public/assets/img-6.png";
import Pic4 from "../../../public/assets/img-5.png";
import Pic5 from "../../../public/assets/img-4.png";
import Pic6 from "../../../public/assets/img-3.png";
import Pic7 from "../../../public/assets/img-2.png";

const HeroSection = () => {
  const avatars = [Pic3, Pic4, Pic5, Pic6, Pic7];

  return (
    <section className="relative bg-white py-14  overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* --- LEFT SIDE: TEXT & SEARCH --- */}
          <div className="z-10">
            <span className="text-[#C79719]  bg-[#F9F5E880] inline-block text-xs font-bold tracking-widest rounded-full uppercase mb-4 px-3 py-1 block">
              Tutors and Care Available
            </span>

            <h1 className="
  text-3xl 
  sm:text-4xl 
  md:text-5xl 
  font-semibold 
  text-[#1c1c1c] 
  leading-tight 
  md:leading-[1.1] 
  mb-4 
  md:mb-6
">
              Your Search For <span className="text-[#FC040B]">Tutors</span>
              <span className="text-[#C79719]"> & Caregivers</span> Begins & <br className="hidden md:block" />
              Ends Here
            </h1>


            <p className="text-gray-400 text-sm md:text-base max-w-lg mb-8 leading-relaxed">
              Connecting students and parents with tutors who care, support, and inspire on one safe, secure platform enriched with modern technologies and AI tools to support meaningful learning.
            </p>

            {/* Compact Search Box */}
            <div className="bg-[#f8f9fa] p-3 sm:p-4 rounded-xl shadow-sm w-full max-w-[600px]">

              {/* Top Buttons */}
              <div className="flex flex-wrap justify-start items-start gap-2 sm:gap-4 px-1 ">
                <button className="bg-[#C79719] text-white px-3 sm:px-5 py-2 rounded-t-[5px] text-[11px] sm:text-xs font-semibold">
                  Need a Tutor
                </button>

                <button className="text-gray-500 text-[11px] sm:text-xs py-2 font-semibold">
                  Become a Tutor
                </button>

                <button className="text-gray-500 text-[11px] sm:text-xs py-2 font-semibold">
                  Build a resume
                </button>
              </div>


              {/* Search Box */}
              <div className="bg-white rounded-lg p-2 flex flex-col md:flex-row gap-2 md:gap-0 items-stretch border border-gray-100">

                {/* Job Title */}
                <div className="flex items-center gap-1 px-2 flex-1 md:border-r border-gray-100">
                  <Briefcase size={16} className="text-gray-500 shrink-0" />
                  <input
                    type="text"
                    placeholder="Enter Job Title"
                    className="w-full py-2 text-gray-500 outline-none text-xs placeholder:text-gray-500"
                  />
                </div>

                {/* Region */}
                <div className="flex items-center gap-1 px-2 flex-1 md:border-r border-gray-100">
                  <MapPin size={16} className="text-gray-500 shrink-0" />
                  <select
                    className="w-full py-2 outline-none text-xs text-gray-500 bg-transparent cursor-pointer relative z-10"
                  >
                    <option value="">Select Your Region</option>
                    <option>Punjab</option>
                    <option>Sindh</option>
                    <option>KPK</option>
                  </select>

                </div>

                {/* Salary */}
                <div className="flex items-center gap-1 px-2 flex-1">
                  <Wallet size={16} className="text-gray-500 shrink-0" />
                  <select
                    className="w-full py-2 outline-none text-xs text-gray-500 bg-transparent cursor-pointer relative z-10"
                  >
                    <option value="">Set Salary Range</option>
                    <option>20k - 40k</option>
                    <option>40k - 80k</option>
                    <option>80k+</option>
                  </select>

                </div>

                {/* Search Button */}
                <button className="bg-[#FC040B] p-3 rounded-lg text-white shadow-lg w-full md:w-auto flex justify-center items-center">
                  <Search size={18} />
                </button>
              </div>
            </div>


            {/* Apps */}
            <div className="flex gap-3 mt-8">
              <Image src={Pic1} alt="Play Store" width={160} height={40} className="object-contain" />
            </div>
          </div>

          {/* --- RIGHT SIDE: EXACT DESIGN AS IMAGE --- */}
          <div className="relative flex justify-center lg:justify-end">

            {/* 1. Red Circle - Positioned Top-Right Behind */}

            {/* 2. Main Image Container - Specific U-Shape */}
            <div className="relative z-10 mr-3">
              <div className="w-[320px] h-[320px] md:w-[450px] md:h-[450px] overflow-hidden rounded-t-[40px] rounded-b-[220px]  relative">
                <Image
                  src={Pic}
                  alt="Student"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* 3. Floating Tutors Card (Top Right) */}
              <div className="absolute -top-4 -right-1 bg-white/20 p-3 rounded-2xl shadow-xl z-20 min-w-[150px]">
                <p className="text-[9px] font-bold text-gray-400 mb-2">54k+ Tutors/Caregivers</p>
                <div className="flex -space-x-2">
                  {avatars.map((img, i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-white overflow-hidden relative">
                      <Image src={img} alt="user" fill className="object-cover" />
                    </div>
                  ))}
                  <div className="w-7 h-7 rounded-full bg-[#FF5C00] text-white text-[10px] flex items-center justify-center font-bold border-2 border-white">+</div>
                </div>
              </div>

              {/* 4. Bottom Quote Box - Rounded Shape & Exact Color */}
              <div className="absolute -bottom-8  left-1/2 -translate-x-1/2 w-[90%] md:w-[105%] bgblu  p-6 md:p-8 rounded-xl  text-white text-center z-20">
                <p className="text-sm md:text-base font-medium leading-relaxed">
                  Keep life running smoothly with dependable tutors and support that fit your schedule and boost academic progress
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;