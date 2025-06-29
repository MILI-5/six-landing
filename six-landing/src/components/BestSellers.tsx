import React, { useRef } from 'react';

const products = [
  {
    id: 1,
    name: 'Glow Serum',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=400&fit=crop&crop=center',
    price: '$29',
    description: 'Brightening vitamin C serum'
  },
  {
    id: 2,
    name: 'Hydra Cream',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop&crop=center',
    price: '$35',
    description: '24-hour hydration moisturizer'
  },
  {
    id: 3,
    name: 'Pure Cleanser',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=400&fit=crop&crop=center',
    price: '$22',
    description: 'Gentle daily cleanser'
  },
  {
    id: 4,
    name: 'Radiance Mask',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400&h=400&fit=crop&crop=center',
    price: '$31',
    description: 'Weekly brightening treatment'
  },
  {
    id: 5,
    name: 'Eye Cream',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=center',
    price: '$28',
    description: 'Anti-aging eye treatment'
  },
  {
    id: 6,
    name: 'Sunscreen SPF 50',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=400&fit=crop&crop=center',
    price: '$25',
    description: 'Broad spectrum protection'
  }
];

const BestSellers: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const slide = (dir: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;
    const slideAmount = slider.offsetWidth * 0.7; // Slide by 70% of container
    const current = slider.scrollLeft;
    const target = dir === 'left' ? current - slideAmount : current + slideAmount;
    
    // Use native smooth scrolling
    slider.scrollTo({
      left: target,
      behavior: 'smooth'
    });
  };

  return (
    <section className="w-full py-12 px-4 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">Best Selling Products</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Discover our most loved skincare essentials, formulated with premium natural ingredients for visible results.</p>
        
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
                className="min-w-[280px] max-w-[280px] bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center snap-center transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-gray-100 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="text-center mb-4">
                  <h3 className="font-bold text-xl mb-1 text-gray-800">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                  <div className="text-green-700 font-bold text-xl">{product.price}</div>
                </div>
                <button
                  className="mt-auto w-full px-6 py-3 rounded-full bg-green-700 text-white font-semibold shadow-lg transition-all duration-200 active:scale-95 focus:outline-none hover:bg-green-600 hover:shadow-xl"
                  onClick={() => alert(`Added ${product.name} to cart!`)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          
          {/* Slide Buttons (show on mobile/tablet only) */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-lg rounded-full w-12 h-12 flex items-center justify-center md:hidden z-10 hover:bg-green-50 active:scale-90 transition-all duration-200"
            onClick={() => slide('left')}
            aria-label="Scroll left"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-lg rounded-full w-12 h-12 flex items-center justify-center md:hidden z-10 hover:bg-green-50 active:scale-90 transition-all duration-200"
            onClick={() => slide('right')}
            aria-label="Scroll right"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers; 