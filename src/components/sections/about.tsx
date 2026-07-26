"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface Dust {
  x: number;
  y: number;
  r: number;
  alpha: number;
  speed: number;
  phase: number;
}

export default function About({ progress }: { progress: number }) {
  const isActive = progress >= 0.55;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Floating dust particles in volumetric warm rim light
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    const dusts: Dust[] = [];
    for (let i = 0; i < 16; i++) {
      dusts.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.6 + Math.random() * 0.8,
        alpha: 0.08 + Math.random() * 0.12,
        speed: 0.12 + Math.random() * 0.18,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;
    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < dusts.length; i++) {
        const d = dusts[i];
        d.phase += 0.005 * d.speed;
        d.y -= d.speed * 0.25;
        d.x += Math.sin(d.phase + time) * 0.2;

        if (d.y < 0) {
          d.y = height;
          d.x = Math.random() * width;
        }

        const currentAlpha = d.alpha * (0.6 + 0.4 * Math.sin(d.phase * 2));
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240, 210, 175, ${currentAlpha.toFixed(3)})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#060608] py-16 text-white">
      {/* Seamless Ambient Background Glow — Fades to pure #060608 before section boundaries */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_68%_50%,#140f0c_0%,#0a0807_40%,#060608_75%)] opacity-90" />

      {/* Top & Bottom Soft Fade Overlay — Completely eliminates sharp light boundaries at section edges */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,#060608_0%,transparent_12%,transparent_88%,#060608_100%)] z-10" />

      {/* Main 2-Column Responsive Layout — Perfectly Vertically Centered */}
      <div className="relative z-20 mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-8 px-8 lg:grid-cols-[52%_48%] lg:px-12">
        
        {/* LEFT COLUMN (52%) — Concise Editorial Text */}
        <div
          className="flex flex-col justify-center py-4 lg:py-6 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            opacity: isActive ? 1 : 0,
            transform: isActive ? "translate3d(0, 0, 0)" : "translate3d(0, 20px, 0)",
            willChange: "opacity, transform",
          }}
        >
          {/* Identity Eyebrow Label */}
          <p className="text-[12px] uppercase tracking-[0.35em] text-white/50 font-mono mb-3">
            IDENTITY
          </p>

          {/* Editorial Visual Anchor Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[72px] font-light tracking-tight text-white leading-[1.06] mb-8">
            Building intelligent products that solve real problems.
          </h1>

          {/* Concise & Punchy Mindset Paragraphs */}
          <div className="space-y-5 max-w-[560px] text-white/75 font-light text-base lg:text-lg leading-relaxed">
            <p>
              Engineering is the art of making complex systems feel calm and intuitive. I build at the intersection of artificial intelligence and full-stack software, creating tools that augment human capability.
            </p>
            <p>
              Every line of code and micro-interaction is written with intention—prioritizing unyielding performance, technical rigor, and aesthetic restraint.
            </p>
          </div>

          {/* Understated Current Focus Block */}
          <div className="mt-10 pt-6 border-t border-white/10 max-w-[560px]">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/40 font-mono mb-3">
              CURRENTLY
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-xs lg:text-sm text-white/80 font-light">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                Building AI-powered products
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                Exploring intelligent systems
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                Crafting digital experiences
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                B.Tech CS (AI & ML)
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN (48%) — Perfectly Vertically Centered with Left Column */}
        <div
          className="relative flex h-full w-full items-center justify-center lg:justify-start lg:pl-4 overflow-visible transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            opacity: isActive ? 1 : 0,
            transform: isActive ? "scale3d(1, 1, 1)" : "scale3d(0.98, 0.98, 1)",
            willChange: "opacity, transform",
          }}
        >
          {/* Layer 1: CAD Blueprint Lines (Behind light & portrait, 2% opacity) */}
          <svg
            className="absolute inset-0 h-full w-full pointer-events-none select-none opacity-20"
            viewBox="0 0 500 600"
            fill="none"
          >
            <line x1="40" y1="0" x2="40" y2="600" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.8" strokeDasharray="3 5" />
            <line x1="460" y1="0" x2="460" y2="600" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.8" strokeDasharray="3 5" />
            <line x1="0" y1="120" x2="500" y2="120" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.8" strokeDasharray="3 5" />
            <line x1="0" y1="480" x2="500" y2="480" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.8" strokeDasharray="3 5" />
            
            <circle cx="230" cy="300" r="140" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.8" />
            <circle cx="230" cy="300" r="190" stroke="rgba(255, 255, 255, 0.025)" strokeWidth="0.8" strokeDasharray="2 6" />
            <line x1="215" y1="300" x2="245" y2="300" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
            <line x1="230" y1="285" x2="230" y2="315" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
          </svg>

          {/* Layer 2: Volumetric Soft Warm Tungsten Light Scatter (#D89A5B) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 55% at 46% 48%, rgba(216, 154, 91, 0.10) 0%, rgba(184, 118, 56, 0.03) 48%, transparent 70%)",
            }}
          />

          {/* Layer 3: Floating Dust Particles Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 h-full w-full pointer-events-none z-10 opacity-70"
          />

          {/* Layer 4: Transparent PNG Portrait with Smooth Bottom Edge Gradient Fade */}
          <div
            className="relative h-[480px] sm:h-[540px] lg:h-[620px] w-full max-w-[440px] overflow-visible z-20"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 0%, black 48%, rgba(0, 0, 0, 0.5) 75%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, black 48%, rgba(0, 0, 0, 0.5) 75%, transparent 100%)",
            }}
          >
            <Image
              src="/about/portrait.png"
              alt="Portrait of Kabir"
              fill
              priority
              unoptimized
              className="object-contain object-center filter contrast-[1.02] desaturate-[0.05]"
              sizes="(min-width: 1024px) 45vw, 90vw"
            />
            {/* Soft Ambient Bottom Fade Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#060608] via-[#060608]/80 to-transparent pointer-events-none z-30" />
          </div>
        </div>

      </div>
    </section>
  );
}