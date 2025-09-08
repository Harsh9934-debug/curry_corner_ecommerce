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

  // Continuous animation effect
  useEffect(() => {
    if (isHovered) return;
    
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
      className="relative w-full h-[65vh] md:h-[75vh] lg:h-[100vh] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background images with continuous zoom effect */}
      {images.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
        >
          <img 
            src={img} 
            alt={`Special dish ${index + 1}`}
            className={`w-full h-full object-cover transition-all duration-[6000ms] ease-linear ${index === currentImage ? 'scale-110' : 'scale-100'}`}
          />
          
          {/* Dynamic gradient overlay that changes with image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        </div>
      ))}
      
      {/* Content overlay with continuous text animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white p-8 max-w-4xl mx-auto">
          <span className="inline-block bg-orange-500/90 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6 animate-pulse">
            Today's Special
          </span>
          
          {/* Animated title with continuous text change */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent drop-shadow-2xl transition-all duration-1000">
            {dishTitles[currentImage]}
          </h2>
          
          {/* Animated description with continuous text change */}
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-orange-100 drop-shadow-md transition-all duration-1000">
            {dishDescriptions[currentImage]}
          </p>
          
          {/* Animated button with continuous hover effect */}
          <button className="bg-gradient-to-r from-orange-600 to-orange-800 hover:from-orange-700 hover:to-orange-900 text-white font-semibold py-4 px-10 rounded-full transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-3xl group relative overflow-hidden">
            <span className="relative z-10">Order Now</span>
            <span className="absolute inset-0 bg-gradient-to-r from-orange-700 to-orange-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-white/20"></span>
          </button>
        </div>
      </div>
      
      {/* Continuous floating elements */}
      <div className="absolute top-10 left-10 animate-float-slow hidden lg:block">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 rotate-3">
          <div className="text-white text-center">
            <div className="text-2xl font-bold">$16.99</div>
            <div className="text-sm">Special Price</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-20 right-10 animate-float-medium hidden lg:block">
        <div className="bg-orange-500/20 backdrop-blur-md rounded-xl p-3 border border-orange-300/30 -rotate-6">
          <div className="text-white text-center">
            <div className="text-lg font-bold">Fresh</div>
            <div className="text-xs">Daily Made</div>
          </div>
        </div>
      </div>
      
      {/* Navigation arrows with continuous pulse effect */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-4 rounded-full transition-all duration-300 z-10 backdrop-blur-sm animate-pulse-slow"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-4 rounded-full transition-all duration-300 z-10 backdrop-blur-sm animate-pulse-slow"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Animated navigation dots with continuous glow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-4 h-4 rounded-full transition-all duration-500 ${index === currentImage ? 'bg-orange-500 scale-125 ring-4 ring-orange-200/50' : 'bg-white/70 hover:bg-white'}`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentImage && (
              <span className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-75"></span>
            )}
          </button>
        ))}
      </div>
      
     

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(3deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) rotate(-6deg); }
          50% { transform: translateY(-10px) rotate(-6deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default Page1;