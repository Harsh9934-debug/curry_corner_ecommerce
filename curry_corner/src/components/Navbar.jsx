
import React from 'react';
import image from '../assets/image.png';

function Navbar() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-orange-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src={image} alt="Curry Corner" className="h-8 w-8 object-cover" />
          <span className="text-lg font-bold text-orange-700">Curry Corner</span>
        </a>
        <div className="hidden sm:flex items-center gap-6">
          <a href="#menu" className="text-sm font-medium text-neutral-700 hover:text-orange-700">Menu</a>
          <a href="#about" className="text-sm font-medium text-neutral-700 hover:text-orange-700">About</a>
          <a href="#contact" className="text-sm font-medium text-neutral-700 hover:text-orange-700">Contact</a>
          <button className="ml-2 inline-flex items-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-orange-700 active:bg-orange-800">Order Now</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


