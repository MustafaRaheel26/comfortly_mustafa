'use client'

import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-0">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <p className="text-teal-500 font-semibold text-sm">WELCOME TO CHAIRY</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 leading-snug">
            Best Furniture Collection For Your Interior.
          </h1>
          <button className="mt-6 px-6 py-3 bg-teal-500 text-white font-medium rounded-full hover:bg-teal-600 transition">
            Shop Now →
          </button>
        </div>
        {/* Hero Image */}
        <div className="flex justify-center">
          <Image
            src="/chair.png"
            alt="Hero Chair"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
      </section>

      {/* Brand Logos */}
      <section className="container mx-auto px-4 py-8 grid grid-cols-3 sm:grid-cols-6 gap-4 items-center justify-items-center">
        {["zapier", "pipedrive", "cib", "z-logo", "burnt-toast", "pandadoc", "moz"].map(
          (logo, idx) => (
            <Image
              key={idx}
              src={`/brand-${logo}.png`}
              alt={logo}
              width={100}
              height={40}
              className="h-8 object-contain"
            />
          )
        )}
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array(4)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={`/sample-product-${idx + 1}.png`}
                    alt={`Product ${idx + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                  {/* Badge */}
                  {idx === 0 && (
                    <span className="absolute top-2 left-2 bg-teal-500 text-white text-xs px-3 py-1 rounded-full">
                      New
                    </span>
                  )}
                  {idx === 1 && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                      Sale
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-gray-800 font-medium text-lg">Library Stool Chair</h3>
                  <p className="text-gray-500 text-sm mt-2">$20</p>
                  <button className="mt-4 w-full px-4 py-2 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

