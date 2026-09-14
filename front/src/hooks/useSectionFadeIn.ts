import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Registrar el plugin de ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

interface UseSectionFadeInOptions {
  xOffset?: number;
  duration?: number;
  delay?: number;
}

export function useSectionFadeIn<T extends HTMLElement = HTMLElement>({
  xOffset = -50,
  duration = 0.8,
  delay = 0,
}: UseSectionFadeInOptions = {}) {
  const sectionRef = useRef<T>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        sectionRef.current,
        {
          opacity: 0,
          x: xOffset,
        },
        {
          opacity: 1,
          x: 0,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%', // Se dispara cuando la parte superior de la sección entra al 85% de la pantalla
            toggleActions: 'play none none none', // Se ejecuta una sola vez al entrar
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return sectionRef;
}
