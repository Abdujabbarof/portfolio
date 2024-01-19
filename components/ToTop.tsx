"use client"
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const ToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-[15px] right-[15px]  ${isVisible ? 'block' : 'hidden'} z-[10] shadow-sm p-[10px] rounded-full cursor-pointer bg-muted-foreground`}
      onClick={scrollToTop}
    >
      <ArrowUp />
    </button>
  );
};

export default ToTopButton;
