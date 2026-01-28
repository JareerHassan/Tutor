'use client'

import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import logo1 from "../../../public/assets/logo-1.png"
import logo2 from "../../../public/assets/logo-2.png"
import Link from 'next/link';
import Image from "next/image"

const Foter = () => {
    return (
        <footer className="bg-[#320102] text-white py-12 px-8 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 ">

                {/* Logo and About Section */}
                <div className="lg:col-span-2">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-1">
                            <Image
                                src={logo1}
                                alt="Logo Part 1"
                                width={50}
                                height={50}
                                className="object-contain"
                            />
                            <Image
                                src={logo2}
                                alt="Logo Part 2"
                                width={120}
                                height={60}
                                className="object-contain"
                            />
                        </Link>
                    </div>
                    <p className="text-lg font-semibold leading-tight max-w-xs mb-6 pt-4">
                        America's Trusted Platform for Tutors who Care and Support
                    </p>
                    <div className="flex gap-4">
                        <SocialIcon icon={<FaFacebookF />} />
                        <SocialIcon icon={<FaInstagram />} />
                        <SocialIcon icon={<FaXTwitter />} />
                        <SocialIcon icon={<FaLinkedinIn />} />
                    </div>
                </div>

                {/* Company Links */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Company</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><a href="#" className="hover:text-white transition">About Us</a></li>
                        <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                        <li><a href="#" className="hover:text-white transition">Video Demo</a></li>
                        <li><a href="#" className="hover:text-white transition">Press</a></li>
                        <li><a href="#" className="hover:text-white transition">Events</a></li>
                        <li><a href="#" className="hover:text-white transition">Careers</a></li>
                    </ul>
                </div>

                {/* Services Links */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Services</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><a href="#" className="hover:text-white transition">Find Tutor</a></li>
                        <li><a href="#" className="hover:text-white transition">Find Tutor Care</a></li>
                        <li><a href="#" className="hover:text-white transition">Find Just Care</a></li>
                        <li><a href="#" className="hover:text-white transition">Find Tutor Sitter</a></li>
                        <li><a href="#" className="hover:text-white transition">Find Just Sitter</a></li>
                        <li><a href="#" className="hover:text-white transition">Homework Assist</a></li>
                    </ul>
                </div>

                {/* Quick Links & Contact */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300 mb-6">
                        <li><a href="#" className="hover:text-white transition">SAT Prep</a></li>
                        <li><a href="#" className="hover:text-white transition">ACT Prep</a></li>
                        <li><a href="#" className="hover:text-white transition">Request Our Services</a></li>
                        <li><a href="#" className="hover:text-white transition">Post Jobs</a></li>
                        <li><a href="#" className="hover:text-white transition">Request Tutor</a></li>
                    </ul>


                </div>

                <div>


                    <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                    <button className="bg-gradient-to-r from-[#FF4500] to-[#FF8C00] text-white px-8 py-2 rounded-full font-bold hover:opacity-90 transition">
                        Contact Us
                    </button>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white">
                <p>Copyright © Brightway Consult & HR/Recruiting Solutions LLC. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:underline">Terms</a>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Cookies Policy</a>
                </div>
            </div>
        </footer>
    )
}

// Helper Component for Social Icons
const SocialIcon = ({ icon }) => (
    <a href="#" className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition">
        {icon}
    </a>
)

export default Foter;