'use client';
import { useEffect } from 'react';
import fluidCursor from '../hooks/useFluidCursor';

const FluidCursor = () => {
  useEffect(() => {
    fluidCursor();
    
    // Custom cursor tracker
    const cursorDot = document.createElement('div');
    const cursorRing = document.createElement('div');
    
    cursorDot.className = 'cursor-dot';
    cursorRing.className = 'cursor-ring';
    
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorRing);
    
    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let ringX = 0;
    let ringY = 0;
    
    const speed = 0.2;
    const ringSpeed = 0.1;
    
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    
    // Check if hovering over interactive elements
    document.addEventListener('mouseover', (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'INPUT' ||
        e.target.tagName === 'TEXTAREA' ||
        e.target.closest('a') ||
        e.target.closest('button')
      ) {
        document.body.classList.add('cursor-hover');
      }
    });
    
    document.addEventListener('mouseout', (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'INPUT' ||
        e.target.tagName === 'TEXTAREA' ||
        e.target.closest('a') ||
        e.target.closest('button')
      ) {
        document.body.classList.remove('cursor-hover');
      }
    });
    
    // Animation loop
    const animate = () => {
      dotX += (mouseX - dotX) * speed;
      dotY += (mouseY - dotY) * speed;
      
      ringX += (mouseX - ringX) * ringSpeed;
      ringY += (mouseY - ringY) * ringSpeed;
      
      cursorDot.style.left = dotX + 'px';
      cursorDot.style.top = dotY + 'px';
      cursorDot.style.transform = 'translate(-50%, -50%)';
      
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top = ringY + 'px';
      cursorRing.style.transform = 'translate(-50%, -50%)';
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (cursorDot.parentNode) cursorDot.parentNode.removeChild(cursorDot);
      if (cursorRing.parentNode) cursorRing.parentNode.removeChild(cursorRing);
    };
  }, []);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        backgroundColor: 'transparent',
      }}
    >
      <canvas 
        id="fluid" 
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default FluidCursor;