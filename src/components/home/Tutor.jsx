"use client";

import React from 'react';
import Image from "next/image";
import Pic22 from "../../../public/assets/img-22.png";
import Pic23 from "../../../public/assets/img-23.jpg";
import Pic24 from "../../../public/assets/img-24.png";
import Pic25 from "../../../public/assets/img-25.jpg";
import Pic26 from "../../../public/assets/img-26.png";
import Pic27 from "../../../public/assets/img-27.png";
// Add your new image here (the one with two women talking in library)
import PlatformImage from "../../../public/assets/img-28.jpg"; // ← replace with your actual image path

const Tutors = () => {
    const tutors = [
        { id: 1, name: "Tutor", img: Pic22 },
        { id: 2, name: "Tutor Care", img: Pic23 },
        { id: 3, name: "Just Care", img: Pic24 },
        { id: 4, name: "Sitter Care", img: Pic25 },
        { id: 5, name: "Just Sitter", img: Pic26 },
        { id: 6, name: "Just Homework", img: Pic27 },
    ];

    return (
        <div className="bg-white font-sans">
            {/* Existing Tutors Section */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-16">
                <div className="text-center mb-12">
                    <h2 className="
  text-2xl 
  sm:text-3xl 
  md:text-4xl 
  font-semibold 
  text-gray-900 
  mb-2 
  md:mb-3 

">
                        Your next Generation of Tutors, <br /> Babysitters, and House care Await
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base font-medium">
                        Experiencing the future of tutors and caregivers searching with our advanced technology and secure platform
                    </p>
                </div>

                {/* Cards Container */}
                <div className="flex flex-wrap justify-center gap-12 md:gap-18">
                    {tutors.map((tutor, index) => (
                        <div
                            key={tutor.id}
                            className="w-full sm:w-80 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                            style={{
                                background: index % 2 === 0
                                    ? "linear-gradient(180deg, rgba(112, 130, 70, 0) 0%, rgba(112, 130, 70, 0.1) 100%)"
                                    : "linear-gradient(180deg, rgba(240, 158, 0, 0) 0%, rgba(240, 158, 0, 0.1) 100%)"
                            }}
                        >
                            <div className="flex justify-center pt-8 pb-4">
                                <div className="w-28 h-28 rounded-full overflow-hidden shadow-md relative">
                                    <Image
                                        src={tutor.img}
                                        alt={tutor.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <div className="text-center pb-8 px-4">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {tutor.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* New Section - World Class Virtual Learning Platform */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-16">
                <div className="text-start mb-12">
                               <h2 className="
  text-2xl 
  sm:text-3xl 
  md:text-4xl 
  font-semibold 
  text-gray-900 
  mb-6 
  md:mb-8 
">
                        Our World Class Virtual Learning Platform
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2  gap-10 items-stretch">
                    {/* Left - Features List */}
                    <div className="space-y-10">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 mr-4">
                                <span className="inline-block w-2 h-12 bg-[#FD686D] rounded-full"></span>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Face to Face Virtual Interaction
                                </h3>
                                <p className="text-gray-600">
                                    Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0 mr-4">
                                <span className="inline-block w-2 h-12 bg-[#FD686D] rounded-full"></span>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Share Screens and Collaborate
                                </h3>
                                <p className="text-gray-600">
                                    An all-in-one customer service platform that helps you balance everything your customers need to be happy.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0 mr-4">
                                <span className="inline-block w-2 h-12 bg-[#FD686D] rounded-full"></span>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Share Files, Videos, Images, Text, etc.
                                </h3>
                                <p className="text-gray-600">
                                    Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0 mr-4">
                                <span className="inline-block w-2 h-12 bg-[#FD686D] rounded-full"></span>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Save Lessons, Files and Videos shared with others
                                </h3>
                                <p className="text-gray-600">
                                    Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right - Image */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl w-full h-[480px]">
                            <Image
                                src={PlatformImage}
                                alt="Virtual learning team collaborating"
                                fill
                                className="object-cover"
                            />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Tutors; 
