import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
`;

const Particle = styled.div`
  position: absolute;
  background: ${({ color }) => color};
  border-radius: 50%;
  pointer-events: none;
  opacity: ${({ opacity }) => opacity};
  filter: blur(${({ blur }) => blur}px);
  animation: float ${({ duration }) => duration}s linear infinite;
  animation-delay: ${({ delay }) => delay}s;
  
  @keyframes float {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(5px, 5px) rotate(5deg); }
    50% { transform: translate(0, 10px) rotate(0deg); }
    75% { transform: translate(-5px, 5px) rotate(-5deg); }
  }
`;

const ParticlesBackground = ({ count = 30 }) => {
  const containerRef = useRef(null);
  const particlesRef = useRef([]);
  const resizeObserver = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create particles
    const createParticles = () => {
      // Clear existing particles
      particlesRef.current.forEach(particle => {
        if (particle.element && particle.element.parentNode === container) {
          container.removeChild(particle.element);
        }
      });
      particlesRef.current = [];

      const { width, height } = container.getBoundingClientRect();
      
      // Particle colors with different opacities
      const colors = [
        'rgba(0, 243, 255, 0.8)',  // cyan
        'rgba(0, 255, 90, 0.6)',   // green
        'rgba(0, 168, 255, 0.5)',  // blue
        'rgba(255, 255, 255, 0.3)' // white
      ];

      for (let i = 0; i < count; i++) {
        const size = Math.random() * 6 + 2; // 2px to 8px
        const x = Math.random() * width;
        const y = Math.random() * height;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const opacity = Math.random() * 0.5 + 0.3; // 0.3 to 0.8
        const blur = Math.random() * 4 + 1; // 1px to 5px blur
        const duration = Math.random() * 20 + 10; // 10s to 30s
        const delay = Math.random() * -30; // Start at random time in animation
        
        const particle = document.createElement('div');
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.background = color;
        particle.style.opacity = opacity;
        particle.style.filter = `blur(${blur}px)`;
        particle.style.animation = `float ${duration}s linear infinite`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.position = 'absolute';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        
        container.appendChild(particle);
        
        // Store reference for cleanup
        particlesRef.current.push({
          element: particle,
          x,
          y,
          size,
          color,
          opacity,
          blur,
          duration,
          delay
        });
      }
    };

    // Handle window resize
    const handleResize = () => {
      createParticles();
    };

    // Use ResizeObserver for better performance than window resize
    if (window.ResizeObserver) {
      resizeObserver.current = new ResizeObserver(handleResize);
      resizeObserver.current.observe(container);
    } else {
      window.addEventListener('resize', handleResize);
    }

    // Initial creation
    createParticles();

    // Cleanup
    return () => {
      if (resizeObserver.current) {
        resizeObserver.current.disconnect();
      } else {
        window.removeEventListener('resize', handleResize);
      }
      
      // Remove all particles
      particlesRef.current.forEach(particle => {
        if (particle.element && particle.element.parentNode === container) {
          container.removeChild(particle.element);
        }
      });
      particlesRef.current = [];
    };
  }, [count]);

  return <ParticlesContainer ref={containerRef} className="particles-container" />;
};

export default ParticlesBackground;
