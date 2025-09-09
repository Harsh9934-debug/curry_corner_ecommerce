import React from 'react';

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-700 [font-family:cursive]">
            Spice up your day with authentic flavors
          </h1>
          <p className="mt-4 text-neutral-800 max-w-xl">
            Fresh ingredients, rich spices, and recipes crafted with love. Order from our curated menu or explore chef specials.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#menu" className="inline-flex items-center rounded-md bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-orange-700 active:bg-orange-800">Order Now</a>
            <a href="#about" className="inline-flex items-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-orange-700 ring-1 ring-inset ring-orange-200 hover:bg-orange-50">Learn More</a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 bg-gradient-to-tr from-orange-200 via-orange-100 to-transparent rounded-3xl" />
          <img
            src="https://static.wixstatic.com/media/0aff6f_38fcdf2d22ef45379ffed56f59efff13~mv2.jpg/v1/crop/x_155,y_494,w_2514,h_947/fill/w_600,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0337_edited.jpg"
            alt="Signature curry bowl"
            className="w-full max-w-lg mx-auto rounded-3xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
