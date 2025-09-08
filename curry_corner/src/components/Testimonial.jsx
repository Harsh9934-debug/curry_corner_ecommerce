import React, { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Sophia M.",
    feedback:
      "The food here is absolutely divine! The Biryani Rice was so fragrant and full of flavor.",
    role: "Food Blogger",
  },
  {
    name: "Liam R.",
    feedback:
      "Butter Chicken melted in my mouth — easily the best I’ve had in years!",
    role: "Chef",
  },
  {
    name: "Isabella K.",
    feedback:
      "The Palak Paneer was creamy, rich, and cooked to perfection. Highly recommend!",
    role: "Vegetarian Enthusiast",
  },
  {
    name: "Ethan D.",
    feedback:
      "Tandoori Chicken was smoky, juicy, and bursting with spices. A real masterpiece.",
    role: "Traveler",
  },
  {
    name: "Olivia P.",
    feedback:
      "From presentation to taste, every dish was a delight. I'll definitely return!",
    role: "Food Critic",
  },
  {
    name: "Noah B.",
    feedback:
      "The flavors were bold yet balanced. Truly a top-notch dining experience.",
    role: "Gourmet Enthusiast",
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
      return "z-40 scale-105 rotate-y-0 opacity-100 shadow-2xl ring-2 ring-orange-400/40";
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
    <section className="w-full bg-gradient-to-r from-orange-50 to-orange-100 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-14">
          What Our Customers Say ❤️
        </h2>

        <div className="relative flex justify-center items-center perspective-[2000px] h-[420px]">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-700 ease-in-out transform-gpu ${getClass(
                index
              )}`}
            >
              <div className="bg-white rounded-3xl px-10 py-12 w-[300px] md:w-[360px] shadow-xl hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.3)] hover:-translate-y-2 transition-all duration-500">
                <p className="text-lg md:text-xl italic text-gray-700 mb-6 leading-relaxed">
                  "{t.feedback}"
                </p>
                <h4 className="text-xl font-semibold text-gray-900">
                  {t.name}
                </h4>
                
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
