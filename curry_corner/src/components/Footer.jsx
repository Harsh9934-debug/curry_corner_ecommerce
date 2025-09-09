import React from "react";
import { MapPin, Clock, Facebook, Instagram, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="mt-16 bg-gradient-to-r from-orange-50 to-orange-100 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand / Copyright */}
        <div>
          <h2 className="text-2xl font-bold text-orange-700">Curry Corner</h2>
          <p className="mt-4 text-sm text-neutral-700 leading-relaxed">
            Bringing authentic flavors straight to your table with love ❤️
          </p>
          <p className="mt-6 text-xs text-neutral-500">
            © {new Date().getFullYear()} Curry Corner. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-orange-800 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#about"
                className="hover:text-orange-700 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className="hover:text-orange-700 transition-colors"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-orange-700 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Address & Hours */}
        <div>
          <h3 className="text-lg font-semibold text-orange-800 mb-4">
            Visit Us
          </h3>
          <div className="flex items-start gap-3 mb-3">
            <MapPin className="w-5 h-5 text-orange-600 mt-1" />
            <p className="text-sm text-neutral-700">
              915 Erie Ave <br /> Sheboygan, WI 53081
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-orange-600 mt-1" />
            <p className="text-sm text-neutral-700">
              Monday – Sunday: <br /> 11:00 am – 9:00 pm
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-orange-200 py-6">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-neutral-600">Made with 🍛 & ❤️ in Sheboygan</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-orange-700">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-orange-700">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="tel: 9202877519" className="hover:text-orange-700">
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
