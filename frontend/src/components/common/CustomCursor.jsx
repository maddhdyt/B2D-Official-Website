import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Only initialize on non-touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;
    
    // Set initial configuration
    gsap.set(cursor, { 
      xPercent: -50, 
      yPercent: -50,
      opacity: 0
    });

    // Create GSAP quickTo functions for highly performant mouse following
    // using a longer duration creates the premium trailing/inertia effect
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.45, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.45, ease: "power3.out" });

    let isVisible = false;

    const onMouseMove = (e) => {
      if (!isVisible) {
        gsap.to(cursor, { opacity: 0.8, duration: 0.3 });
        gsap.set(cursor, { x: e.clientX, y: e.clientY });
        isVisible = true;
      } else {
        xTo(e.clientX);
        yTo(e.clientY);
      }
    };

    // Event delegation to catch all interactive elements seamlessly
    const interactiveSelectors = [
      'a', 'button', 'input', 'textarea', 'select', 
      '[role="button"]', '.card', '.service-item', '.project-card', 
      '.insights-more-cta', '.insights-article-card'
    ].join(', ');

    const onMouseOver = (e) => {
      if (e.target.closest(interactiveSelectors)) {
        gsap.to(cursor, { 
          scale: 1.6, 
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          boxShadow: '0 0 15px rgba(59, 130, 246, 0.5), 0 0 30px rgba(59, 130, 246, 0.4), 0 0 60px rgba(59, 130, 246, 0.2)',
          duration: 0.3, 
          ease: 'power2.out' 
        });
      }
    };

    const onMouseOut = (e) => {
      if (e.target.closest(interactiveSelectors)) {
        gsap.to(cursor, { 
          scale: 1, 
          backgroundColor: 'transparent',
          boxShadow: '0 0 10px rgba(59, 130, 246, 0.3), 0 0 20px rgba(59, 130, 246, 0.2), 0 0 40px rgba(59, 130, 246, 0.1)',
          duration: 0.3, 
          ease: 'power2.out' 
        });
      }
    };

    const onMouseLeaveWindow = () => {
      isVisible = false;
      gsap.to(cursor, { opacity: 0, duration: 0.3 });
    };

    // Attach global event listeners
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mouseout", onMouseOut);
    document.addEventListener("mouseleave", onMouseLeaveWindow);

    // Cleanup listeners
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("mouseleave", onMouseLeaveWindow);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      // hidden on mobile since hover/mouse effects don't apply there
      className="pointer-events-none fixed top-0 left-0 z-[99999] rounded-full border-2 border-[#3B82F6]/80 hidden md:block"
      style={{
        width: '30px',
        height: '30px',
        boxShadow: '0 0 15px rgba(59, 130, 246, 0.5), inset 0 0 10px rgba(59, 130, 246, 0.2)',
        backgroundColor: 'rgba(59, 130, 246, 0.05)'
      }}
    />
  );
}
