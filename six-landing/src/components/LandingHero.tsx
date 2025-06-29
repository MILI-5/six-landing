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
      className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-12 md:py-24 px-4 md:px-16 bg-[#f3f7e7]"
    >
      <div className="flex-1 flex flex-col items-start max-w-xl">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
          GLOW <span className="text-green-700">NATURALLY</span>
        </h1>
        <AnimatedText text="Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate all skin. Combining the finest natural ingredients, every element is chosen to deliver visible results and a luxurious feel." />
      </div>
      <div className="flex-1 flex items-center justify-center">
        {/* Replace with actual hero image */}
        <div className="w-64 h-64 md:w-80 md:h-80 bg-green-100 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-2xl text-green-700">[Hero Image]</span>
        </div>
      </div>
    </section>
  );
};

export default LandingHero; 