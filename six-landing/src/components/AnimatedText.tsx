import React, { useEffect, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const words = containerRef.current?.querySelectorAll('.animated-word');
    if (!words) return;

    // Simple CSS-based animation
    words.forEach((word, index) => {
      const element = word as HTMLElement;
      element.style.opacity = '0';
      element.style.color = '#a3a3a3';
      element.style.transition = 'opacity 0.7s ease-out, color 0.7s ease-out';
      
      setTimeout(() => {
        element.style.opacity = '1';
        element.style.color = '#111827';
      }, 500 + (index * 80)); // Stagger the animation
    });
  }, []);

  return (
    <p ref={containerRef} className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
      {text.split(' ').map((word, i) => (
        <span key={i} className="animated-word inline-block mr-1">
          {word}
        </span>
      ))}
    </p>
  );
};

export default AnimatedText; 