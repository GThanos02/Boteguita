import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Palmtree } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center space-x-2">
              <Palmtree className="h-8 w-8 text-[#e6b17e]" />
              <span className="text-white text-xl font-bold">Boteguita</span>
            </NavLink>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink 
                to="/"
                className={({ isActive }) => 
                  `text-gray-300 hover:text-[#e6b17e] px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${isActive ? 'text-[#e6b17e]' : ''}`
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/menu"
                className={({ isActive }) => 
                  `text-gray-300 hover:text-[#e6b17e] px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${isActive ? 'text-[#e6b17e]' : ''}`
                }
              >
                Menu
              </NavLink>
              <NavLink 
                to="/events"
                className={({ isActive }) => 
                  `text-gray-300 hover:text-[#e6b17e] px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${isActive ? 'text-[#e6b17e]' : ''}`
                }
              >
                Events
              </NavLink>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700
                ${isActive ? 'bg-gray-900 text-white' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700
                ${isActive ? 'bg-gray-900 text-white' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              Menu
            </NavLink>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700
                ${isActive ? 'bg-gray-900 text-white' : ''}`
              }
              onClick={() => setIsOpen(false)}
            >
              Events
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}