"use client";

import Image from "next/image";

export default function About({ progress }: { progress: number }) {
  // Simple hardware-accelerated active state based on progress threshold
  const isActive = progress >= 0.55;

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#070709] py-12 text-white">
      {/* Background Soft Edge Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.7)_100%)] z-10" />

      {/* Main 2-Column Layout */}
      <div className="relative z-20 mx-auto grid h-full w-full max-w-[1360px] grid-cols-1 items-center gap-12 px-8 lg:grid-cols-[55%_45%] lg:px-16">
        
        {/* LEFT COLUMN (55%) — Mindset, Philosophy, Heading, Paragraphs */}
        <div
          className="flex flex-col justify-center py-6 lg:py-12 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            opacity: isActive ? 1 : 0,
            transform: isActive ? "translate3d(0, 0, 0)" : "translate3d(0, 20px, 0)",
            willChange: "opacity, transform",
          }}
        >
          {/* Identity Label */}
          <p className="text-[12px] uppercase tracking-[0.35em] text-white/50 font-mono mb-4">
            IDENTITY
          </p>

          {/* Large Editorial Visual Anchor Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-[76px] font-light tracking-tight text-white leading-[1.05] mb-10">
            Building intelligent products that solve real problems.
          </h1>

          {/* Three Concise Mindset & Engineering Paragraphs */}
          <div className="space-y-6 max-w-[620px] text-white/70 font-light text-base lg:text-lg leading-relaxed">
            <p>
              Software is more than code—it is a medium for thought. I approach engineering not as a series of isolated features, but as an ongoing pursuit to make complex computational systems feel calm, effortless, and deeply intuitive.
            </p>
            <p>
              My fascination with artificial intelligence stems from a desire to build tools that augment human cognition rather than replace it. From neural architectures to micro-interactions, every detail is engineered with purpose and aesthetic restraint.
            </p>
            <p>
              I believe the best products disappear into their utility. True craftsmanship lies at the intersection of deep technical rigor, unyielding performance, and an obsession with meaningful user experiences.
            </p>
          </div>

          {/* Current Focus Block */}
          <div className="mt-12 pt-8 border-t border-white/10 max-w-[620px]">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/40 font-mono mb-4">
              CURRENTLY
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6 text-xs lg:text-sm text-white/80 font-light">
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
                B.Tech Computer Science (AI & ML)
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN (45%) — Transparent Portrait & CAD Blueprint Lines (Upper-Right Quadrant) */}
        <div
          className="relative flex h-full min-h-[580px] lg:min-h-[720px] w-full items-start justify-center overflow-visible pt-4 lg:pt-10 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            opacity: isActive ? 1 : 0,
            transform: isActive ? "scale3d(1, 1, 1)" : "scale3d(0.98, 0.98, 1)",
            willChange: "opacity, transform",
          }}
        >
          {/* Blueprint-Inspired Technical Construction Lines (Focal point aligned with face) */}
          <svg
            className="absolute inset-0 h-full w-full pointer-events-none select-none opacity-40"
            viewBox="0 0 500 700"
            fill="none"
          >
            <line x1="40" y1="0" x2="40" y2="700" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.8" strokeDasharray="3 5" />
            <line x1="460" y1="0" x2="460" y2="700" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.8" strokeDasharray="3 5" />
            <line x1="0" y1="120" x2="500" y2="120" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.8" strokeDasharray="3 5" />
            <line x1="0" y1="480" x2="500" y2="480" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.8" strokeDasharray="3 5" />
            
            <circle cx="250" cy="220" r="140" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.8" />
            <circle cx="250" cy="220" r="200" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="0.8" strokeDasharray="2 6" />
            <line x1="235" y1="220" x2="265" y2="220" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" />
            <line x1="250" y1="205" x2="250" y2="235" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" />
            
            <text x="48" y="112" fill="rgba(255, 255, 255, 0.25)" fontSize="9" fontFamily="monospace">FOCAL.ALIGN // FACE.01</text>
            <text x="382" y="472" fill="rgba(255, 255, 255, 0.25)" fontSize="9" fontFamily="monospace">AXIS // X.45</text>
          </svg>

          {/* Soft off-white radial illumination behind upper face focal area */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.045)_0%,transparent_65%)]" />

          {/* Transparent PNG Portrait — Top-Anchored Editorial Alignment */}
          <div className="relative h-[520px] lg:h-[640px] w-full max-w-[460px] overflow-visible">
            <Image
              src="/about/portrait.png"
              alt="Portrait of Kabir"
              fill
              priority
              unoptimized
              className="object-contain object-top filter contrast-[1.02] desaturate-[0.10] transition-all duration-700 hover:desaturate-0"
              sizes="(min-width: 1024px) 45vw, 90vw"
            />
          </div>
        </div>

      </div>
    </section>
  );
}