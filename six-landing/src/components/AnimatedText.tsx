import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const words = containerRef.current?.querySelectorAll('.animated-word');
    if (!words) return;

    // Simple animation without ScrollTrigger
    gsap.set(words, { opacity: 0, color: '#a3a3a3' });
    
    const tl = gsap.timeline();
    tl.to(words, {
      opacity: 1,
      color: '#111827',
      stagger: 0.08,
      duration: 0.7,
      ease: 'power2.out',
      delay: 0.5, // Delay after component mounts
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