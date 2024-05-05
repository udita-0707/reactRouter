import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const ConfettiComponent = () => {
  useEffect(() => {
    const end = Date.now() + 3000; // 3 seconds from now
    const colors = ['#bb0000', '#ffffff'];

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();

    // Cleanup function to stop the confetti when the component unmounts
    return () => {
      // You may add cleanup logic here if needed
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return null; // This component doesn't render anything directly
};

export default ConfettiComponent;
