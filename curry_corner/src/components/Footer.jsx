import React from 'react';

function Footer() {
  return (
    <footer className="mt-16 border-t border-orange-100 bg-white/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Curry Corner. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a className="hover:text-orange-700" href="#about">About</a>
          <a className="hover:text-orange-700" href="#menu">Menu</a>
          <a className="hover:text-orange-700" href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


