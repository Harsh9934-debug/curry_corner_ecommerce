import React, { useState, useEffect } from 'react';

function Sepcial() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1dHRlciUyMGNoaWNrZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMHRpa2thJTIwbWFzYWxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFsYWslMjBwYW5lZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyYW5pJTIwcmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRhbmRvb3JpJTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=80"
  ];

  const dishes = [
    { name: "Butter Chicken", price: "$16.99", description: "Creamy tomato sauce with tender chicken" },
    { name: "Chicken Tikka Masala", price: "$15.99", description: "Grilled chicken in spiced curry sauce" },
    { name: "Palak Paneer", price: "$14.99", description: "Cottage cheese in spinach sauce" },
    { name: "Biryani Rice", price: "$13.99", description: "Fragrant rice with spices and herbs" },
    { name: "Tandoori Chicken", price: "$17.99", description: "Marinated chicken cooked in clay oven" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="menu" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="rounded-3xl bg-gradient-to-r from-orange-50 to-amber-50 p-8 ring-1 ring-orange-200 shadow-xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-orange-700">Today's Specials</h2>
          <p className="mt-3 text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover our chef's recommendations and seasonal favorites that will delight your taste buds.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Image Carousel */}
          <div className="relative w-full lg:w-1/2 h-80 rounded-2xl overflow-hidden shadow-lg">
            {images.map((img, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
              >
                <img 
                  src={img} 
                  alt={dishes[index].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-white">
                  <h3 className="text-xl font-bold">{dishes[index].name}</h3>
                  <p className="text-orange-300 font-semibold">{dishes[index].price}</p>
                </div>
              </div>
            ))}
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevImage}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-orange-700 rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all duration-200"
            >
              &lt;
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-orange-700 rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all duration-200"
            >
              &gt;
            </button>
            
            {/* Dots Indicator */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImage ? 'bg-orange-500 scale-110' : 'bg-white/80'}`}
                />
              ))}
            </div>
          </div>
          
          {/* Dish List */}
          <div className="w-full lg:w-1/2">
            <div className="grid gap-5">
              {dishes.map((dish, index) => (
                <div 
                  key={index}
                  className={`flex items-center p-4 rounded-xl transition-all duration-300 ${index === currentImage ? 'bg-orange-100 border-l-4 border-orange-500 shadow-md' : 'bg-white shadow-sm'}`}
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden mr-4 shadow-md">
                    <img 
                      src={images[index]} 
                      alt={dish.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-800">{dish.name}</h3>
                    <p className="text-sm text-gray-600">{dish.description}</p>
                  </div>
                  <div className="text-orange-700 font-bold">{dish.price}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button className="bg-gradient-to-r from-orange-600 to-orange-800 hover:from-orange-700 hover:to-orange-900 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                View Full Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sepcial;