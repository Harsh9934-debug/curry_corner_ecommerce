import React from 'react';
import Navbar from './components/Navbar.jsx';
import Page1 from './components/Page1.jsx'
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';
import Special from './components/Sepcial.jsx';

function App() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <Page1 />
      <Hero />
      <Special />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
