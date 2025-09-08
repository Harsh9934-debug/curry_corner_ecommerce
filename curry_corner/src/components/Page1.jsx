import React, { useState, useEffect } from 'react';

function Page1() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
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
    "Samosa",
    "Chicken Briyani",
    "Kadhi Paneer"
  ];

  const dishDescriptions = [
    "Tender chicken in rich tomato cream sauce with aromatic spices",
    "Grilled chicken chunks in our signature spiced curry sauce",
    "Crispy fried dumplings stuffed with potatoes and vegetables",
    "Tender marinated chicken topped with cashews & cilantro.Served over basmati rice.",
    "Paneer cooked in a rich,aromatic blend of spices,tomatoes & bell peppers"
  ];

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

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
        <div className="text-center text-white p-4 md:p-8 max-w-4xl mx-auto">
          {/* Animated title with continuous text change */}
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent drop-shadow-2xl transition-all duration-1000">
            {dishTitles[currentImage]}
          </h2>
          
          {/* Animated description with continuous text change */}
          <p className="text-sm md:text-xl lg:text-2xl max-w-xs md:max-w-2xl mx-auto mb-4 md:mb-8 text-orange-100 drop-shadow-md transition-all duration-1000">
            {dishDescriptions[currentImage]}
          </p>
          
          {/* Animated button with continuous hover effect */}
          
        </div>
      </div>
      
      {/* Navigation arrows - smaller on mobile */}
      <button
        onClick={prevImage}
        className={`absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white rounded-full transition-all duration-300 z-10 ${isMobile ? 'p-2' : 'p-3 md:p-4'} animate-pulse-slow`}
      >
        <svg className={`${isMobile ? 'w-4 h-4' : 'w-6 h-6'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextImage}
        className={`absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white rounded-full transition-all duration-300 z-10 ${isMobile ? 'p-2' : 'p-3 md:p-4'} animate-pulse-slow`}
      >
        <svg className={`${isMobile ? 'w-4 h-4' : 'w-6 h-6'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
  

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        /* Touch-friendly styles for mobile */
        @media (max-width: 768px) {
          button {
            -webkit-tap-highlight-color: transparent;
          }
          
          /* Prevent zoom on double-tap */
          .carousel-content {
            touch-action: manipulation;
          }
        }
      `}</style>
    </section>
  );
}

export default Page1;