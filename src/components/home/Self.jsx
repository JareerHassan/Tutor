'use client'

import React from 'react'
import Image from "next/image";
import Pic29 from "../../../public/assets/img-29.png";
import Pic30 from "../../../public/assets/img-30.png";

const Selfs = () => {
    const features = [
        {
            text: "Access Khan Academy's free Digital SAT prep resources directly from TUTORMIX, so you can practice between tutoring sessions without searching for materials."
        },
        {
            text: "Strengthen SAT skills in Math, Reading, and Writing while your TUTORMIX tutor helps you stay focused, accountable, and on track with a weekly study plan."
        },
        {
            text: "Use Khan Academy practice to reinforce what you learn in tutoring—review concepts, build accuracy, and come back to your tutor with targeted questions."
        },
        {
            text: "TUTORMIX makes SAT prep more organized by pairing tutor support (strategy, explanations, feedback) with consistent independent practice on Khan Academy."
        },
        {
            text: "Khan Academy content remains on Khan Academy; TUTORMIX does not host, copy, or reproduce Khan Academy materials."
        },
        {
            text: "Khan Academy is a separate service and is not affiliated with or endorsed by TUTORMIX."
        }
    ]

    const feature = [
        {
            text: "Access ACT’s official free test-prep resources directly from TUTORMIX, so you can practice between tutoring sessions without hunting for materials."
        },
        {
            text: "Build confidence across ACT sections by combining independent practice on ACT’s site with support from a TUTORMIX tutor for explanations, pacing strategies, and targeted review."
        },
        {
            text: "Use official practice to identify weak areas, then work with your tutor to close gaps and improve performance through a structured weekly plan."
        },
        {
            text: "TUTORMIX helps you stay organized by pairing tutoring guidance (strategy, feedback, accountability) with consistent practice using ACT’s free prep resources."
        },
        {
            text: "ACT content remains on ACT’s website; TUTORMIX does not host, copy, or reproduce ACT materials."
        },
        {
            text: "ACT is a separate service and is not affiliated with or endorsed by TUTORMIX."
        }
    ]

    return (
        <>
            <section className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans">
                {/* Main Heading */}
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 md:mb-8">
                    Free SAT Prep (Self-Paced and Self-service)
                </h2>

                <div className="flex flex-col lg:flex-row lg:gap-8 xl:gap-10 items-start">
                    {/* Left Side: Text Grid */}
                    <div className="flex-1 lg:pr-6 xl:pr-8">
                        <h3 className="text-xl md:text-2xl font-bold text-[#1e293b] mb-5 md:mb-6">What's Included</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6 auto-rows-fr">
                            {features.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-[#f8fafc] p-5 md:p-6 rounded-xl border border-transparent hover:border-slate-200 transition-colors duration-200 flex flex-col"
                                >
                                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Right Side: Image */}
                    <div className="w-full lg:w-5/12 xl:w-2/5 mt-8 lg:mt-0">
                        <div className="lg:sticky lg:top-12">
                            <Image
                                src={Pic29}
                                alt="Students studying together"
                                className="w-full h-[460px] md:h-[500px] lg:h-[640px] object-cover rounded-2xl shadow-xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>



            <section className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans">
                {/* Main Heading */}
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 md:mb-8">
                    Free ACT Prep (Self-Paced and Self-service)
                </h2>

                <div className="flex flex-col lg:flex-row lg:gap-8 xl:gap-10 items-start">


                    {/* Right Side: Image */}
                    <div className="w-full lg:w-5/12 xl:w-2/5 mt-8 lg:mt-0">
                        <div className="lg:sticky lg:top-12">
                            <Image
                                src={Pic30}
                                alt="Students studying together"
                                className="w-full h-[460px] md:h-[500px] lg:h-[720px] object-cover rounded-2xl shadow-xl"
                                priority
                            />
                        </div>
                    </div>

                    {/* Left Side: Text Grid */}
                    <div className="flex-1 lg:pr-6 xl:pr-8">
                        <h3 className="text-xl md:text-2xl font-bold text-[#1e293b] mb-5 md:mb-6 pt-2">What's Included:</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6 auto-rows-fr">
                            {feature.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-[#f8fafc] p-5 md:p-6 rounded-xl border border-transparent hover:border-slate-200 transition-colors duration-200 flex flex-col"
                                >
                                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Selfs