'use client'
import React from 'react';
import Image from 'next/image';
import { Check, GraduationCap, Calculator, BookOpen, Plus } from 'lucide-react';
import Pic1 from "../../../public/assets/img-10.png";
import Pic38 from "../../../public/assets/img-38.png";
import Pic3 from "../../../public/assets/img-6.png";
import Pic4 from "../../../public/assets/img-5.png";
import Pic5 from "../../../public/assets/img-4.png";
import Pic6 from "../../../public/assets/img-3.png";
import Pic7 from "../../../public/assets/img-2.png";

const TutorHero = () => {
    const avatars = [Pic3, Pic4, Pic5, Pic6, Pic7];

    return (
        <section className=" mx-auto px-4 py-12 font-sans">
            <div className="grid grid-cols-1 lg:grid-cols-2  items-center">

                {/* Left Content Side */}
                <div className="space-y-6">
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
">            Find the perfect tutor and take performance to the next level
                    </h1>

                    <p className="text-[#00000099] text-sm md:text-base max-w-lg mb-8 leading-relaxed">
                        Get matched with a trusted, results-driven tutor who helps your child improve faster,
                        boost grades, and build lasting confidence - so they stay ahead in class. Services include:
                    </p>

                    {/* Features List */}
                    <ul className="space-y-4">
                        {[
                            "Providing expert tutoring (virtual or in-person) with personalized support in any subject, tailored to each student's goals and learning pace.",
                            "Offering flexible scheduling with convenient online sessions or face-to-face tutoring at home or a preferred location.",
                            "Delivering results-focused guidance through clear instruction, practice, and accountability, building confidence and improving performance."
                        ].map((text, index) => (
                            <li key={index} className="flex gap-3">
                                <div className="w-5 h-5 bg-orange-500 rounded-sm flex items-center justify-center shrink-0 mt-[6px]">
                                    <Check className="w-4 h-4 text-white" />
                                </div>

                                <p className="text-[#00000099] text-sm md:text-base max-w-lg leading-relaxed">
                                    {text}</p>
                            </li>
                        ))}
                    </ul>

                    {/* Apps */}
                    <div className="flex gap-3 mt-8">
                        <Image src={Pic1} alt="Play Store" width={180} height={50} className="object-contain" />
                    </div>
                </div>

                {/* Right Image Side */}
                <div className="relative">
                    {/* Orange Background Shape */}

                    <div className="relative z-10 flex flex-col items-center">
                        {/* Main Tutor Image */}
                        <div className="relative w-full aspect-square max-w-xl">
                            <Image
                                src={Pic38}
                                alt="Professional Tutor"
                                layout="fill"
                                objectFit="contain"
                                className="drop-shadow-2xl"
                            />
                        </div>



                        {/* Tutors Available Pill */}
                        <div
                            className="
    mt-[-32px] sm:mt-[-40px]
    bgblu
    z-20
    border border-white/40
    rounded-full
    shadow-xl

    flex items-center
    gap-3 sm:gap-4

    px-4 sm:px-6 md:px-8
    py-2 sm:py-3

    min-w-[260px] sm:min-w-[360px] md:min-w-[420px]
    justify-between
  "
                        >
                            {/* Text */}
                            <span
                                className="
      font-bold text-white
      text-sm sm:text-base md:text-xl
      whitespace-nowrap
    "
                            >
                                Tutors Available
                            </span>

                            {/* Avatars */}
                            <div className="flex -space-x-2 sm:-space-x-3">
                                {avatars.map((img, i) => (
                                    <div
                                        key={i}
                                        className="
          w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10
          rounded-full
          border-2 border-white
          overflow-hidden
          relative
          bg-gray-200
        "
                                    >
                                        <Image
                                            src={img}
                                            alt="tutor"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}

                                {/* Plus icon */}
                                <div
                                    className="
        w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10
        rounded-full
        bg-orange-500
        flex items-center justify-center
        text-white
        border-2 border-white
      "
                                >
                                    <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default TutorHero;