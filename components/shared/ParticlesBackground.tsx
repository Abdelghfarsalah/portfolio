"use client";

import { useEffect } from "react";

export default function ParticlesBackground() {
  useEffect(() => {
    let particles: { destroy?: () => void } | undefined;
    let cancelled = false;

    const initParticles = async () => {
      const module = await import("particlesjs");

      if (cancelled) return;
          const isMobile = window.innerWidth < 768;

      const particlesJs = module.default || module;
      particles = particlesJs.init({
        selector: ".particles-background",
        maxParticles: isMobile ? 20 : 110,
        sizeVariations: 4,
        speed: 0.6,
        color: ["#ffffff"],
        minDistance: 90,
        
        connectParticles: true,
      });
    };

    initParticles();

    return () => {
      cancelled = true;
      particles?.destroy?.();
    };
  }, []);

  return <canvas className="particles-background" aria-hidden="true" />;
}
