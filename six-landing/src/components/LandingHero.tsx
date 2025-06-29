import React, { useEffect, useRef } from 'react';
import AnimatedText from './AnimatedText';

const LandingHero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.style.opacity = '0';
      heroRef.current.style.transform = 'translateY(40px)';
      heroRef.current.style.transition = 'opacity 1.2s ease-out, transform 1.2s ease-out';
      
      setTimeout(() => {
        if (heroRef.current) {
          heroRef.current.style.opacity = '1';
          heroRef.current.style.transform = 'translateY(0)';
        }
      }, 100);
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-12 md:py-24 px-4 md:px-16 bg-gradient-to-br from-[#f3f7e7] to-[#e8f5e8] min-h-screen"
    >
      <div className="flex-1 flex flex-col items-start max-w-xl">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
          GLOW <span className="text-green-700">NATURALLY</span>
        </h1>
        <AnimatedText text="Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate all skin. Combining the finest natural ingredients, every element is chosen to deliver visible results and a luxurious feel." />
        <div className="flex gap-4 mt-8">
          <button className="px-8 py-4 bg-green-700 text-white font-semibold rounded-full hover:bg-green-600 transition-colors duration-200 shadow-lg hover:shadow-xl">
            Shop Now
          </button>
          <button className="px-8 py-4 border-2 border-green-700 text-green-700 font-semibold rounded-full hover:bg-green-700 hover:text-white transition-all duration-200">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="relative">
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&crop=center"
              alt="Skincare products"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-100 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-green-700 font-bold text-sm text-center">100%<br/>Natural</span>
          </div>
          <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
            <span className="text-green-700 font-bold text-xs text-center">Cruelty<br/>Free</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero; 