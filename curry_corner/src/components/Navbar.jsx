import React, { useState, useEffect } from "react";
import image from "../assets/image.png";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Navbar */}
      <nav
        className={`w-full fixed top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2 flex-shrink-0">
              <img
                src={image}
                alt="Curry Corner"
                className="h-12 w-12 object-cover hover:scale-105 transition-transform duration-300"
              />
              <span className="text-xl font-bold text-orange-700 font-cursive">
                Curry Corner
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {["Home", "Menu", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-gray-800 hover:text-orange-600 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
              <button className="ml-4 inline-flex items-center rounded-full bg-gradient-to-r from-orange-500 to-orange-700 px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 transform">
                Order Now
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 12.65a2 2 0 002 1.35h9.42a2 2 0 002-1.63l2.81-11.66A2 2 0 0020.25 1H4"></path>
                </svg>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="inline-flex items-center justify-center p-2 rounded-md text-orange-700 hover:text-orange-600 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-5 py-6">
          <div className="flex justify-end">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 space-y-2">
            {["Home", "Menu", "About", "Contact"].map((item) => (
              <a
                key={item}
                onClick={() => setIsMobileMenuOpen(false)}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-orange-600 hover:bg-orange-50 transition-colors"
              >
                {item}
              </a>
            ))}
            <div className="pt-4">
              <button className="w-full flex justify-center items-center rounded-md bg-gradient-to-r from-orange-500 to-orange-700 px-4 py-2 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 transform">
                Order Now
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 12.65a2 2 0 002 1.35h9.42a2 2 0 002-1.63l2.81-11.66A2 2 0 0020.25 1H4"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
}

export default Navbar;