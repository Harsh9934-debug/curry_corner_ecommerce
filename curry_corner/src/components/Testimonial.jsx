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
];

function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  // Auto rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-gradient-to-r from-orange-50 to-orange-100 py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          What Our Customers Say ❤️
        </h2>

        <div className="relative perspective-[1200px] h-[300px] flex items-center justify-center">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`absolute w-full max-w-3xl px-6 transition-all duration-1000 ease-in-out`}
              style={{
                transform:
                  index === current
                    ? "rotateY(0deg) scale(1)"
                    : index < current
                    ? "rotateY(-90deg) scale(0.9)"
                    : "rotateY(90deg) scale(0.9)",
                opacity: index === current ? 1 : 0,
              }}
            >
              <div className="bg-white rounded-3xl shadow-2xl px-10 py-12 transform transition duration-500 hover:rotate-1 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
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

        {/* Navigation dots */}
        <div className="flex justify-center mt-10 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
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
