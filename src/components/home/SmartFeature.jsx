"use client";
import { useRef, useState } from "react";
import { Monitor, Video, ShieldCheck, PlayCircle, ArrowRight, PauseCircle } from 'lucide-react';
import Image from 'next/image';
import Pic16 from "../../../public/assets/img-16.png";
import Pic17 from "../../../public/assets/img-17.png";
import Pic18 from "../../../public/assets/img-18.png";
import Pic19 from "../../../public/assets/img-19.png";
import Pic20 from "../../../public/assets/img-20.png";
import Pic21 from "../../../public/assets/img-21.png";

const Features = () => {

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



            {/* --- SECTION 2: HOW IT WORKS --- */}
            <div className=" mx-auto  px-4 sm:px-6 lg:px-10 py-8">
                <div className="text-center mb-12">
                    <h2 className="
  text-2xl 
  sm:text-3xl 
  md:text-4xl 
  font-semibold 
  text-gray-900 
  mb-2 
  md:mb-3 
">Smart Features That Set Us Apart</h2>
                    <p className="text-gray-500 text-sm md:text-base font-medium">
                        Experiencing the future of tutors and caregivers searching with our advanced technology and secure platform
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">

                        {/* IMAGE */}
                        <div className="flex-1 flex justify-center md:justify-start">
                            <Image
                                src={Pic16}
                                alt="Virtual"
                                className="object-contain w-full max-w-sm md:max-w-md"
                            />
                        </div>

                        {/* TEXT */}
                        <div className="flex-1">
                            <div className="text-center md:text-start">
                                <h2 className="
  text-2xl 
  sm:text-3xl 
  md:text-4xl 
  font-semibold 
  text-gray-900 
  mb-2 
  md:mb-3 
  tracking-tight
">
                                    Smart Matching
                                </h2>
                                <p className="text-gray-500 text-sm md:text-base font-medium">
                                    Our AI functionality analyzes skills, experience, availability, and reviews to recommend the ideal tutor or caregiver - delivering faster, smarter, more accurate matches every time
                                </p>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">

                        {/* IMAGE */}


                        {/* TEXT */}
                        <div className="flex-1">
                            <div className="text-center md:text-start">
                                <h2 className="
  text-2xl 
  sm:text-3xl 
  md:text-4xl 
  font-semibold 
  text-gray-900 
  mb-2 
  md:mb-3 
  tracking-tight
">                                    Protected Payments
                                </h2>
                                <p className="text-gray-500 text-sm md:text-base font-medium">
                                    All payments are securely held in escrow until the session is complete - so clients stay protected and tutors and caregivers get guaranteed, on-time payouts with zero hassle        </p>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center md:justify-start">
                            <Image
                                src={Pic17}
                                alt="Virtual"
                                className="object-contain w-full max-w-sm md:max-w-md"
                            />
                        </div>
                    </div>
                </div>


                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">

                        {/* IMAGE */}
                        <div className="flex-1 flex justify-center md:justify-start">
                            <Image
                                src={Pic21}
                                alt="Virtual"
                                className="object-contain w-full max-w-sm md:max-w-md"
                            />
                        </div>

                        {/* TEXT */}
                        <div className="flex-1">
                            <div className="text-center md:text-start">
                                <h2 className="
  text-2xl 
  sm:text-3xl 
  md:text-4xl 
  font-semibold 
  text-gray-900 
  mb-2 
  md:mb-3 
  tracking-tight
">                                    Secure Communication
                                </h2>
                                <p className="text-gray-500 text-sm md:text-base font-medium">
                                    Chat with total confidence using end-to-end encrypted messaging that protects your privacy - then share files, images, and documents securely in one trusted space                                </p>
                            </div>
                        </div>

                    </div>
                </div>



                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">

                        {/* IMAGE */}


                        {/* TEXT */}
                        <div className="flex-1">
                            <div className="text-center md:text-start">
                                <h2 className="
  text-2xl 
  sm:text-3xl 
  md:text-4xl 
  font-semibold 
  text-gray-900 
  mb-2 
  md:mb-3 
  tracking-tight
">                                    Background Check
                                </h2>
                                <p className="text-gray-500 text-sm md:text-base font-medium">
                                    Every verified tutor or caregiver uploads a government-issued ID and completes facial-recognition verification. Clients can also request background checks directly in the platform.                                </p>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center md:justify-start">
                            <Image
                                src={Pic20}
                                alt="Virtual"
                                className="object-contain w-full max-w-sm md:max-w-md"
                            />
                        </div>

                    </div>
                </div>



                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">

                        {/* IMAGE */}
                        <div className="flex-1 flex justify-center md:justify-start">
                            <Image
                                src={Pic19}
                                alt="Virtual"
                                className="object-contain w-full max-w-sm md:max-w-md"
                            />
                        </div>

                        {/* TEXT */}
                        <div className="flex-1">
                            <div className="text-center md:text-start">
                                <h2 className="
  text-2xl 
  sm:text-3xl 
  md:text-4xl 
  font-semibold 
  text-gray-900 
  mb-2 
  md:mb-3 
  tracking-tight
">                                    Virtual White Board
                                </h2>
                                <p className="text-gray-500 text-sm md:text-base font-medium">
                                    Our virtual whiteboard makes learning interactive and clear—collaborate in real time with drawings, notes, and problem-solving tools that keep every session engaging and easy to follow.                                </p>
                            </div>
                        </div>

                    </div>
                </div>



                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">

                        {/* IMAGE */}


                        {/* TEXT */}
                        <div className="flex-1">
                            <div className="text-center md:text-start">
                                <h2 className="
  text-2xl 
  sm:text-3xl 
  md:text-4xl 
  font-semibold 
  text-gray-900 
  mb-2 
  md:mb-3 
  tracking-tight
">                                    Video Conferencing Technology
                                </h2>
                                <p className="text-gray-500 text-sm md:text-base font-medium">
                                    Our built-in video conferencing delivers secure, crystal-clear calls so you can connect face-to-face with confidence—making every session smoother, more engaging, and more effective from anywhere.                                </p>
                            </div>
                        </div>

                        <div className="flex-1 flex justify-center md:justify-start">
                            <Image
                                src={Pic18}
                                alt="Virtual"
                                className="object-contain w-full max-w-sm md:max-w-md"
                            />
                        </div>
                    </div>
                </div>



            </div>

            {/* --- SECTION 3: BIG SALE BANNER --- */}

            <div >
                <div className="relative roots  p-8 md:p-12 overflow-hidden shadow-xl h-[300px]">

                    {/* Content */}
                    <div className="relative z-10 flex flex-col justify-center items-center h-full gap-6 text-center">

                        <h2 className="text-2xl md:text-4xl font-semibold text-white  leading-tight">
                            Daily Fun Quiz
                        </h2>

                        <p className="text-white text-[14px] md:text-base max-w-lg font-medium">
                            Dive into a world of knowledge and excitement with our Daily FunQuiz! Discover new facts, challenge your friends, and enjoy learning in a playful way.
                        </p>

                        {/* White Button */}
                        <button className="
  bg-white 
  text-black 
  px-10 py-3 
  rounded-full 
  font-semibold 
  shadow-lg 
  hover:bg-gray-100 
  hover:scale-105 
  transition-all duration-300
">
                            Take Quiz
                        </button>


                    </div>

                </div>
            </div>



        </div>
    );
};

export default Features;