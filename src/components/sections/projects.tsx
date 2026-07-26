"use client";

import { useProjectCarousel } from "@/components/projects/use-project-carousel";
import ProjectBelt from "@/components/projects/project-belt";
import ProjectIndicator from "@/components/projects/project-indicator";

export default function Projects() {
  const {
    activeIndex,
    setActiveIndex,
    nextProject,
    prevProject,
    currentProject,
    canGoNext,
    canGoPrev,
  } = useProjectCarousel();

  return (
    <section
      id="projects"
      className="relative flex flex-col justify-between w-full min-h-screen bg-[#060608] py-10 sm:py-14 overflow-hidden text-white transition-colors duration-1000 select-none"
    >
      {/* Ambient Theme Background Glow — Smoothly transitions color based on active project */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(${currentProject.ambientColor}, 0.12) 0%, rgba(10, 8, 12, 0.04) 50%, transparent 80%)`,
        }}
      />

      {/* Top & Bottom Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,#060608_0%,transparent_12%,transparent_88%,#060608_100%)] z-10" />

      {/* Editorial Section Heading with Navigation Controls ABOVE the Belt */}
      <div className="relative z-20 mx-auto w-full max-w-[1280px] px-6 sm:px-10 flex items-end justify-between pt-2 mb-2">
        <div className="flex flex-col text-left">
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/40 font-mono mb-2">
            PROJECTS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white">
            Products I've Built
          </h2>
        </div>

        {/* Navigation Arrow Buttons Flanking Above Belt */}
        <div className="flex items-center gap-3">
          <button
            onClick={prevProject}
            disabled={!canGoPrev}
            aria-label="Previous project"
            className={`flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full border transition-all duration-300 ${
              canGoPrev
                ? "bg-white/[0.06] hover:bg-white/[0.16] border-white/15 text-white/70 hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
                : "bg-white/[0.02] border-white/5 text-white/20 opacity-40 cursor-not-allowed"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextProject}
            disabled={!canGoNext}
            aria-label="Next project"
            className={`flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full border transition-all duration-300 ${
              canGoNext
                ? "bg-white/[0.06] hover:bg-white/[0.16] border-white/15 text-white/70 hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
                : "bg-white/[0.02] border-white/5 text-white/20 opacity-40 cursor-not-allowed"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Static Horizontal Project Belt */}
      <div className="relative z-20 w-full my-auto">
        <ProjectBelt
          activeIndex={activeIndex}
          onSelectProject={setActiveIndex}
        />
      </div>

      {/* Dynamic Project Indicator Metadata */}
      <div className="relative z-20 w-full pb-2">
        <ProjectIndicator project={currentProject} />
      </div>
    </section>
  );
}