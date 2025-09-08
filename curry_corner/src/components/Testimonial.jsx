import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sophia M.",
    feedback:
      "The food here is absolutely divine! The Biryani Rice was so fragrant and full of flavor.",
    role: "Food Blogger",
    rating: 5,
  },
  {
    name: "Liam R.",
    feedback:
      "Butter Chicken melted in my mouth — easily the best I’ve had in years!",
    role: "Chef",
    rating: 5,
  },
  {
    name: "Isabella K.",
    feedback:
      "The Palak Paneer was creamy, rich, and cooked to perfection. Highly recommend!",
    role: "Vegetarian Enthusiast",
    rating: 4,
  },
  {
    name: "Ethan D.",
    feedback:
      "Tandoori Chicken was smoky, juicy, and bursting with spices. A real masterpiece.",
    role: "Traveler",
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

  const getCardClass = (index) => {
    const offset = index - current;
    if (offset === 0) {
      return "opacity-100 scale-110 z-20";
    }
    if (offset === 1 || offset === -testimonials.length + 1) {
      return "opacity-60 scale-90 translate-x-32 z-10";
    }
    if (offset === -1 || offset === testimonials.length - 1) {
      return "opacity-60 scale-90 -translate-x-32 z-10";
    }
    return "opacity-0 scale-75 z-0 pointer-events-none";
  };

  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* SVG Background Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-20" aria-hidden="true">
        <pattern id="chili-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M12.394 2.535a.5.5 0 00-.788 0l-7 11a.5.5 0 00.394.776h14a.5.5 0 00.394-.776l-7-11z" fill="orange" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#chili-pattern)" />
      </svg>

      <div className="relative max-w-6xl mx-auto text-center z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-14">
          What Our Customers Say <span className="text-orange-600">❤️</span>
        </h2>

        <div className="relative flex justify-center items-center h-[400px]">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-700 ease-in-out transform-gpu ${getCardClass(
                index
              )}`}
            >
              <div className="bg-white rounded-3xl shadow-2xl px-8 py-10 w-[300px] md:w-[400px] border border-orange-200">
                <div className="flex justify-center items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-2xl ${i < t.rating ? 'text-yellow-500' : 'text-gray-300'}`}>★</span>
                  ))}
                </div>
                <p className="text-lg md:text-xl font-bold text-gray-800 mb-6 leading-relaxed">
                  "{t.feedback}"
                </p>
                <div className="flex flex-col items-center">
                  <h4 className="text-xl font-semibold text-gray-900">
                    {t.name}
                  </h4>
                  <span className="text-sm text-orange-600 font-medium">
                    {t.role}
                  </span>
                </div>
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
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
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