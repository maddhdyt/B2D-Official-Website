import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactLenis } from 'lenis/react';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
  const lenisRef = useRef();

  useEffect(() => {
    // Pastikan ScrollTrigger merespons update scroll Lenis
    if (lenisRef.current?.lenis) {
      lenisRef.current.lenis.on('scroll', ScrollTrigger.update);
    }

    // Sync GSAP ticker dengan Lenis raf
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    
    // Nonaktifkan lagSmoothing pada GSAP untuk mencegah delay animasi scroll
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    // root props membuat Lenis mengambil alih native window scroll
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}
