import React, { useEffect, useRef } from 'react';

const Loader: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate loading, then fade out
    const timer = setTimeout(() => {
      if (loaderRef.current) {
        loaderRef.current.style.opacity = '0';
        loaderRef.current.style.transition = 'opacity 1s ease-out';
        setTimeout(onFinish, 1000);
      }
    }, 1200); // 1.2s loader
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#f3f7e7] transition-opacity duration-1000"
    >
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold tracking-wide text-gray-900 mb-2">Six Skincare</span>
        <span className="text-sm text-gray-500">Glow Naturally</span>
      </div>
    </div>
  );
};

export default Loader; 