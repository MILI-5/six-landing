import React, { useRef } from 'react';
import gsap from 'gsap';

const products = [
  {
    id: 1,
    name: 'Glow Serum',
    image: '/globe.svg',
    price: '$29',
  },
  {
    id: 2,
    name: 'Hydra Cream',
    image: '/window.svg',
    price: '$35',
  },
  {
    id: 3,
    name: 'Pure Cleanser',
    image: '/vercel.svg',
    price: '$22',
  },
  {
    id: 4,
    name: 'Radiance Mask',
    image: '/file.svg',
    price: '$31',
  },
];

const BestSellers: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const slide = (dir: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;
    const slideAmount = slider.offsetWidth * 0.7; // Slide by 70% of container
    const current = slider.scrollLeft;
    const target = dir === 'left' ? current - slideAmount : current + slideAmount;
    
    // Use native smooth scrolling instead of GSAP scrollTo
    slider.scrollTo({
      left: target,
      behavior: 'smooth'
    });
  };

  return (
    <section className="w-full py-12 px-4 md:px-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Best Selling Products</h2>
      <div className="relative">
        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto gap-6 scrollbar-hide snap-x snap-mandatory pb-4"
          style={{ scrollBehavior: 'smooth' }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[220px] max-w-[220px] bg-white rounded-xl shadow-md p-4 flex flex-col items-center snap-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 object-contain mb-4"
              />
              <div className="font-semibold text-lg mb-1 text-gray-800">{product.name}</div>
              <div className="text-green-700 font-bold mb-2">{product.price}</div>
              <button
                className="mt-auto px-4 py-2 rounded-full bg-green-700 text-white font-medium shadow transition-transform duration-200 active:scale-95 focus:outline-none"
                onClick={() => alert(`Added ${product.name} to cart!`)}
                onMouseDown={e => {
                  gsap.to(e.currentTarget, { scale: 0.93, duration: 0.15 });
                }}
                onMouseUp={e => {
                  gsap.to(e.currentTarget, { scale: 1, duration: 0.2, ease: 'elastic.out(1, 0.5)' });
                }}
                onMouseLeave={e => {
                  gsap.to(e.currentTarget, { scale: 1, duration: 0.2 });
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        {/* Slide Buttons (show on mobile/tablet only) */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-md rounded-full w-10 h-10 flex items-center justify-center md:hidden z-10 hover:bg-green-50 active:scale-90 transition"
          onClick={() => slide('left')}
          aria-label="Scroll left"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-md rounded-full w-10 h-10 flex items-center justify-center md:hidden z-10 hover:bg-green-50 active:scale-90 transition"
          onClick={() => slide('right')}
          aria-label="Scroll right"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </section>
  );
};

export default BestSellers; 