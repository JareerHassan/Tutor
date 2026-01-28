"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Image component import kiya hai
import { Menu, X, ChevronDown, User, Briefcase, GraduationCap, Heart } from 'lucide-react';
import logo1 from "../../../public/assets/logo-1.png"
import logo2 from "../../../public/assets/logo-2.png"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);

  const navLinks = [
    { name: 'Post Jobs', href: '#' },
    { name: 'Browse Jobs', href: '#' },
    { name: 'Find Tutor', href: '#' },
    { name: 'Find Tutor Care', href: '#', hasDropdown: true },
    { name: 'Homework Assist', href: '#' },
    { name: 'SAT Prep', href: '#' },
    { name: 'ACT Prep', href: '#' },
  ];

  return (
    <nav className="bg-[#FFFFFF]  sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* 1. Logo Section (Images adjusted here) */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-1">
              <Image 
                src={logo1} 
                alt="Logo Part 1" 
                width={40} 
                height={40} 
                className="object-contain"
              />
              <Image 
                src={logo2}
                alt="Logo Part 2" 
                width={100} 
                height={40} 
                className="object-contain"
              />
            </Link>
          </div>

          {/* 2. Desktop Menu (Center) */}
          <div className="hidden lg:flex space-x-1 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-black hover:text-[#FF1200] px-2 py-2 text-[13px] font-medium flex items-center gap-1 transition-all"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={12} className="opacity-60" />}
              </Link>
            ))}
          </div>

          {/* 3. Right Side: Button & User Icon */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="hidden lg:flex items-center bg-gradient-to-r from-[#FF1200] to-[#FF9500] text-white text-[13px] font-medium px-5 py-2 rounded-full hover:shadow-md transition-all">
              Login/Signup
            </button>
            
            <div className="relative">
              <button 
                onClick={() => setUserDropdown(!userDropdown)}
                className="p-1.5 sm:p-2 bg-gray-50 text-black rounded-full hover:bg-gray-100 border border-gray-100 transition-all flex items-center justify-center"
              >
                <User size={18} />
              </button>

              {userDropdown && (
                <div className="absolute right-0 mt-3 w-48 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-50 overflow-hidden ring-1 ring-black ring-opacity-5">
                  <Link href="#" className="flex items-center px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-50 hover:text-[#FF1200] gap-2 border-b border-gray-50 transition-colors">
                    <GraduationCap size={16} /> Tutor Care
                  </Link>
                  <Link href="#" className="flex items-center px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-50 hover:text-[#FF1200] gap-2 border-b border-gray-50 transition-colors">
                    <Heart size={16} /> Tutor Sitter
                  </Link>
                  <Link href="#" className="flex items-center px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-50 hover:text-[#FF1200] gap-2 transition-colors">
                    <Briefcase size={16} /> Just Sitter
                  </Link>
                </div>
              )}
            </div>

            <div className="lg:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="p-1.5 text-black hover:bg-gray-100 rounded-md transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tab Menu Content */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-2xl overflow-y-auto max-h-screen pb-6">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="block px-3 py-3 text-[14px] font-medium text-gray-800 hover:text-[#FF1200] hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="px-3 pt-4">
              <button className="w-full flex justify-center items-center bg-gradient-to-r from-[#FF1200] to-[#FF9500] text-white text-[14px] font-medium px-5 py-3 rounded-lg shadow-md">
                Login / Signup
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;