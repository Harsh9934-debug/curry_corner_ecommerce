import React from 'react';

const features = [
  {
    title: 'Authentic Recipes',
    desc: 'Traditional flavors crafted with regional spices and family techniques.',
  },
  {
    title: 'Fresh Ingredients',
    desc: 'We source the freshest produce and quality ingredients daily.',
  },
  {
    title: 'Fast Delivery',
    desc: 'Hot and fresh at your doorstep with reliable delivery partners.',
  },
  {
    title: 'Vegetarian Options',
    desc: 'A wide range of delicious vegetarian and vegan-friendly dishes.',
  },
];

function Features() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 [font-family:cursive] text-center">Why Curry Corner?</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-orange-100">
              <h3 className="font-semibold text-neutral-900">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;


