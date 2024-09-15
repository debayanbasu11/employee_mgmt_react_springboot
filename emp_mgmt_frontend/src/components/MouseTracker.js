import React, { useState } from 'react';

// MouseTracker component using render props
export  default function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY
    });
  };

  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      {/* Call the render prop function */}
      {render(position)}
    </div>
  );
}