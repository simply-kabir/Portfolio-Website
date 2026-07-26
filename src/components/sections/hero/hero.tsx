"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import HeroBackground from "@/components/sections/hero/herobackground";
import HeroContent from "@/components/sections/hero/herocontent";
import About from "@/components/sections/about";
import ScreenOverlay from "@/components/ui/screen-overlay";
import { useDollyProgress } from "@/hooks/use-dolly-progress";

const SceneCanvas = dynamic(() => import("@/components/three/scenecanvas"), {
  ssr: false,
});

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useDollyProgress(sectionRef);

  const aboutOpacity = Math.min(Math.max((progress - 0.55) / 0.20, 0), 1);

  return (
    <section ref={sectionRef} id="hero" className="relative h-[165vh] w-full">
      {/* Anchor for the nav's "About" link — lands near the end of the pin range */}
      <div id="about" className="absolute left-0 w-full" style={{ top: "115vh" }} />

      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <HeroBackground progress={progress} />

        <div className="absolute inset-0 z-0">
          <SceneCanvas progress={progress} />
        </div>

        <div
          className="absolute inset-0 z-20 transition-opacity duration-75 ease-out"
          style={{
            opacity: aboutOpacity,
            pointerEvents: aboutOpacity > 0.5 ? "auto" : "none",
          }}
        >
          <About progress={progress} />
        </div>

        <ScreenOverlay progress={progress} />
      </div>
    </section>
  );
}