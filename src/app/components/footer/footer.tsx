"use client";

import React, { useState, useEffect } from "react";
import { Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import { FaPinterest } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        {/* Logo and Description */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-4">
            <Image src="/logoicon.png" alt="Logo Icon" width={30} height={30} />
            Comforty
          </h2>
          <p className="text-gray-500 mt-4 leading-relaxed">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus.
          </p>
          {/* Social Media Links */}
          <div className="flex mt-4 space-x-4">
            {[
              { Icon: Twitter, href: "https://twitter.com" },
              { Icon: Facebook, href: "https://facebook.com" },
              { Icon: Instagram, href: "https://instagram.com" },
              { Icon: FaPinterest, href: "https://pinterest.com" },
              { Icon: Youtube, href: "https://youtube.com" },
            ].map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-teal-600 transition"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Category Links */}
        <div>
          <h3 className="text-teal-600 font-semibold">Category</h3>
          <ul className="mt-4 space-y-2">
            {["Sofa", "Armchair", "Wing Chair", "Desk Chair", "Wooden Chair", "Park Bench"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.replace(" ", "-").toLowerCase()}`}
                    className="text-gray-500 hover:text-teal-600 transition"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-teal-600 font-semibold">Support</h3>
          <ul className="mt-4 space-y-2">
            {["Help & Support", "Terms & Conditions", "Privacy Policy", "Help"].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.replace(" ", "-").toLowerCase()}`}
                  className="text-gray-500 hover:text-teal-600 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-teal-600 font-semibold">Newsletter</h3>
          <p className="text-gray-500 mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
          </p>
          <form className="flex flex-col sm:flex-row mt-4 space-y-2 sm:space-y-0">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full sm:rounded-l-full sm:rounded-r-none focus:outline-none focus:ring-1 focus:ring-teal-500 w-full"
            />
            <button
              type="submit"
              className="bg-teal-500 text-white px-6 py-2 rounded-full sm:rounded-l-none sm:rounded-r-full hover:bg-teal-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
          <p className="text-xs text-gray-500">
            © {year} - Blogy - Designed & Developed by Zokirsoft
          </p>
          <div className="flex items-center space-x-6">
            <Image src="/Group 13.png" alt="Group" width={120} height={120} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

