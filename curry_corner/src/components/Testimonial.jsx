import React, { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Nichols, Jillyan.",
    feedback:
      "highly recommend! the food was incredible. best samosas i’ve ever had. even our 6 & 3 year old loved them! our dishes were full of flavor and the staff was friendly and attentive.",
    // role: "Food Blogger",
    rating: 5, // Added rating for potential future use or visual enhancement
  },
  {
    name: "Mann, Tyler.",
    feedback:
      "Fantastic food, would absolutely recommend it to everyone",
    // role: "Chef",
    rating: 5,
  },
  {
    name: "Chokshi, Shachi.",
    feedback:
      "Delicious food with most reasonable price, staff is polite, property is new and clean… highly recommend for food lovers",
    // role: "Vegetarian Enthusiast",
    rating: 4,
  },
  {
    name: "Villareal, Samantha.",
    feedback:
      "Tandoori Chicken was smoky, juicy, and bursting with spices. A real masterpiece.",
    // role: "Traveler",
    rating: 5,
  },
  {
    name: "Olivia P.",
    feedback:
      "Highly recommend, food was delicious! I will definitely be back.",
    // role: "Food Critic",
    rating: 5,
  },
];

function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  // Auto rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getClass = (index) => {
    const left1 = (current - 1 + testimonials.length) % testimonials.length;
    const left2 = (current - 2 + testimonials.length) % testimonials.length;
    const right1 = (current + 1) % testimonials.length;
    const right2 = (current + 2) % testimonials.length;

    if (index === current) {
      return "z-40 scale-105 rotate-y-0 opacity-100 shadow-2xl"; // Removed ring-2 for highlight
    }
    if (index === left1) {
      return "z-30 -translate-x-48 scale-95 -rotate-y-15 opacity-90 blur-[1px]";
    }
    if (index === right1) {
      return "z-30 translate-x-48 scale-95 rotate-y-15 opacity-90 blur-[1px]";
    }
    if (index === left2) {
      return "z-20 -translate-x-80 scale-90 -rotate-y-25 opacity-70 blur-sm";
    }
    if (index === right2) {
      return "z-20 translate-x-80 scale-90 rotate-y-25 opacity-70 blur-sm";
    }
    return "opacity-0 pointer-events-none";
  };

  return (
    <section className="relative w-full  py-20 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-0 w-24 h-24 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-14 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          What Our Customers Say <span className="text-gray-800">❤️</span>
        </h2>

        <div className="relative flex justify-center items-center perspective-[2000px] h-[420px]">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-700 ease-in-out transform-gpu ${getClass(
                index
              )}`}
              style={{ backfaceVisibility: 'hidden' }} // Prevents flickering on some browsers
            >
              <div className="bg-white rounded-3xl px-10 py-12 w-[300px] md:w-[360px] shadow-xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.3)] transition-all duration-500 transform hover:-translate-y-2">
                <p className="text-lg md:text-xl italic text-gray-700 mb-6 leading-relaxed">
                  "{t.feedback}"
                </p>
                <h4 className="text-xl font-semibold text-gray-900">
                  {t.name}
                </h4>
                <span className="text-sm text-orange-600 font-medium">
                  {t.role}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-10 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === current
                  ? "bg-orange-600 scale-125 shadow-md"
                  : "bg-gray-300 hover:bg-orange-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;