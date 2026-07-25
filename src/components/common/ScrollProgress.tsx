import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      if (documentHeight > 0) {
        const scrolled = (window.scrollY / documentHeight) * 100;
        setScrollWidth(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-[100] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-500 transition-all duration-150 ease-out shadow-[0_0_10px_#2563EB]"
        style={{ width: `${scrollWidth}%` }}
      />
    </div>
  );
};
