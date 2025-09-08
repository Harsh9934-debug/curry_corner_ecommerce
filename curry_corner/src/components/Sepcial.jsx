import React, { useState, useEffect } from 'react';

function Special() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const images = [
    "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1dHRlciUyMGNoaWNrZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpY2tlbiUyMHRpa2thJTIwbWFzYWxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMDY1fGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyYW5pJTIwcmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFsYWslMjBwYW5lZXJ8ZW58MHx8MHx8fDA%3D%3D&auto=format&fit=crop&w=1200&q=80"
  ];

  const dishes = [
    { 
      name: "Butter Chicken", 
      price: "$16.99", 
      description: "Chicken cooked in a mild buttery curry sauce",
      spiceLevel: 2,
      cookingTime: "25 min",
      bestseller: true
    },
    { 
      name: "Chicken Tikka Masala", 
      price: "$15.99", 
      description: "Marinated chicken simmered in rich creamy tomato-based sauce",
      spiceLevel: 3,
      cookingTime: "30 min"
    },
    { 
      name: "Chicken 65", 
      price: "$13.99", 
      description: "Boneless chicken marinated in yogurt, curry leaves, green chilies & tamarind",
      spiceLevel: 4,
      cookingTime: "20 min",
      appetizer: true
    },
    { 
      name: "Lamb Biryani", 
      price: "$16.99", 
      description: "Fragrant basmati rice with tender lamb, saffron & aromatic spices",
      spiceLevel: 3,
      cookingTime: "40 min"
    },
    { 
      name: "Palak Paneer", 
      price: "$14.99", 
      description: "Indian cheese cubes in fresh spinach sauce with traditional herbs",
      spiceLevel: 2,
      cookingTime: "20 min",
      vegetarian: true
    }
  ];

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const renderSpiceLevel = (level) => {
    return (
      <div className="flex items-center space-x-0.5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 transition-colors duration-300 ${i < level ? 'text-red-500' : 'text-gray-400'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M12.394 2.535a.5.5 0 00-.788 0l-7 11a.5.5 0 00.394.776h14a.5.5 0 00.394-.776l-7-11z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section id="specials" className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4 shadow-lg transform -rotate-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Chef's Special Selection
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Today's Specialties
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our chef's recommendations crafted with authentic spices and premium ingredients.
        </p>
      </div>
      
      {/* Image Carousel */}
      <div 
        className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {images.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
          >
            <img 
              src={img} 
              alt={dishes[index].name}
              className="w-full h-full object-cover transform transition-transform duration-10000 ease-linear group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            
            {/* Dish Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold drop-shadow-md leading-tight">{dishes[index].name}</h3>
                  <p className="text-lg md:text-xl font-bold text-amber-300 mt-1">{dishes[index].price}</p>
                </div>
                <div className="flex flex-col items-end space-y-2 mt-1">
                  {dishes[index].bestseller && (
                    <span className="text-xs font-semibold bg-amber-500 text-white px-3 py-1 rounded-full shadow-lg">
                      BEST SELLER
                    </span>
                  )}
                  {dishes[index].vegetarian && (
                    <span className="text-xs font-semibold bg-green-600 text-white px-3 py-1 rounded-full shadow-lg">
                      VEGETARIAN
                    </span>
                  )}
                  {dishes[index].appetizer && (
                    <span className="text-xs font-semibold bg-blue-500 text-white px-3 py-1 rounded-full shadow-lg">
                      APPETIZER
                    </span>
                  )}
                </div>
              </div>
              
              <p className="text-amber-100 mb-4 text-sm md:text-base drop-shadow-md max-w-md">{dishes[index].description}</p>
              
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center bg-black/30 px-3 py-1 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{dishes[index].cookingTime}</span>
                </div>
                <div className="flex items-center bg-black/30 px-3 py-1 rounded-full">
                  {renderSpiceLevel(dishes[index].spiceLevel)}
                  <span className="ml-2">{['Mild', 'Medium', 'Spicy', 'Hot', 'Extra Hot'][dishes[index].spiceLevel - 1]}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-orange-600 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-orange-600 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${index === currentImage ? 'bg-amber-400 scale-125 ring-2 ring-amber-200' : 'bg-white/80 hover:bg-white'}`}
            />
          ))}
        </div>
      </div>
      
      {/* Dish selector thumbnails */}
      <div className="mt-8 grid grid-cols-5 gap-2 max-w-2xl mx-auto">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`relative h-16 md:h-20 rounded-lg overflow-hidden transition-all duration-300 ${index === currentImage ? 'ring-2 ring-orange-500 ring-offset-2 scale-105' : 'opacity-80 hover:opacity-100'}`}
          >
            <img 
              src={img} 
              alt={dishes[index].name}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}></div>
          </button>
        ))}
      </div>
      
      {/* Call to action */}
      <div className="mt-12 text-center">
        <button className="bg-gradient-to-r from-orange-600 to-orange-800 hover:from-orange-700 hover:to-orange-900 text-white font-semibold py-3 px-8 md:py-4 md:px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center text-base md:text-lg">
          Explore Full Menu
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 ml-3" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        
        <p className="text-sm text-gray-500 mt-4 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>
          Click on the thumbnails to explore our specials
        </p>
      </div>
    </section>
  );
}

export default Special;