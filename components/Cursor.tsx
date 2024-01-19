"use client"
import React, { useState, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

const FollowCursorCircle: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    // Add event listener to track mouse movement
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array means this effect runs once after initial render

  const circleStyle: React.CSSProperties = {
    top: position.y - 10 + 'px',
    left: position.x - 10 + 'px',
    transition: '.15s'
  };

  return <div style={circleStyle} className='w-[25px] h-[25px] rounded-full border border-accent-foreground fixed'></div>;
};

export default FollowCursorCircle;