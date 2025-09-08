import React, { useState, useEffect } from 'react';

function Page1() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const images = [
    "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1dHRlciUyMGNoaWNrZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMHRpa2thJTIwbWFzYWxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFsYWslMjBwYW5lZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyYW5pJTIwcmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRhbmRvb3JpJTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80"
  ];

  const dishTitles = [
    "Butter Chicken Delight",
    "Tikka Masala Special",
    "Creamy Palak Paneer",
    "Fragrant Biryani Rice",
    "Authentic Tandoori Chicken"
  ];

  const dishDescriptions = [
    "Tender chicken in rich tomato cream sauce with aromatic spices",
    "Grilled chicken chunks in our signature spiced curry sauce",
    "Fresh spinach and cottage cheese in traditional herbs",
    "Basmati rice infused with saffron and exotic spices",
    "Marinated chicken cooked to perfection in clay oven"
  ];

  useEffect(() => {
    if (isHovered) return; // Pause animation when hovered
    
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section 
      id="menu" 
      className="relative w-full h-[55vh] md:h-[65vh] lg:h-[90vh] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        >
          <img 
            src={img} 
            alt={`Special dish ${index + 1}`}
            className="w-full h-full object-cover"
          />
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          
          {/* Animated content overlay */}
          <div className={`absolute bottom-0 left-0 right-0 p-8 text-white text-center transition-all duration-1000 delay-300 ${index === currentImage ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4 animate-pulse">
              Today's Special
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
              {dishTitles[index]}
            </h2>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-6 text-orange-100">
              {dishDescriptions[index]}
            </p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
              Order Now 
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      ))}
      
      {/* Navigation arrows */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 z-10 backdrop-blur-sm"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 z-10 backdrop-blur-sm"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Animated navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${index === currentImage ? 'bg-orange-500 scale-125 ring-2 ring-orange-200' : 'bg-white/70 hover:bg-white'}`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentImage && (
              <span className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-75"></span>
            )}
          </button>
        ))}
      </div>
      
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1 z-20 bg-black/20">
        <div 
          className="h-full bg-orange-500 transition-all duration-3000 ease-linear" 
          style={{ width: isHovered ? '0%' : '100%' }}
          key={currentImage}
        ></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-6 right-6 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20 animate-float">
          <div className="text-white text-center">
            <div className="text-2xl font-bold">$16.99</div>
            <div className="text-sm">Special Price</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page1;