"use client"
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Community', href: '#community' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transparent backdrop-blur-md shadow-lg md:px-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 group">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            className="w-8 h-8 text-purple-500 group-hover:rotate-12 transition-transform duration-300"
          >
            <path 
              fill="currentColor" 
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-5.5c0 .83-.67 1.5-1.5 1.5S7 15.33 7 14.5 7.67 13 8.5 13s1.5.67 1.5 1.5zm5 0c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm-4-8.5c-2.49 0-4.46 1.69-4.94 4h9.88c-.48-2.31-2.45-4-4.94-4z"
            />
          </svg>
          <span className="text-2xl font-bold text-white">AI.Debug</span>
        </div>

     
        {/* Authentication Buttons */}
        <div className="flex items-center space-x-4">
          <button 
            className="
              text-white px-4 py-2 rounded-full 
              border border-gray-200 
              hover:bg-white hover:text-purple-700
              transition duration-300
              transform hover:scale-105
            "
          >
            Sign In
          </button>
          <button 
            className="
              bg-purple-600 text-white 
              px-6 py-2 rounded-full 
              hover:bg-purple-700 
              transition duration-300
              transform hover:scale-105
            "
          >
            Sign Up
          </button>
        </div>

</div>


      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;