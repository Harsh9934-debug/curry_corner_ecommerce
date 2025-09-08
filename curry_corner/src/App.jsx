import React from 'react';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 sm:px-6  lg:px-8 py-12 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-700 [font-family:cursive]">Welcome to Curry Corner!</h1>
        <p className="max-w-2xl text-neutral-800 mt-3">
          Discover delicious curries from around the world. Stay tuned for recipes, tips, and more!
        </p>
        <div className="mt-6 flex gap-3">
          <a href="#menu" className="inline-flex items-center rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-orange-700 active:bg-orange-800">Explore Menu</a>
          <a href="#contact" className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-orange-700 ring-1 ring-inset ring-orange-200 hover:bg-orange-50">Contact Us</a>
        </div>
      </main>
    </div>
  );
}

export default App;
