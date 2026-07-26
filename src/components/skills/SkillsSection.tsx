"use client";

import { useCallback, useState } from "react";
import { skills } from "@/data/skills";
import { useScrollEntrance } from "@/hooks/useScrollEntrance";
import { SkillsWheel } from "./SkillsWheel";
import { SkillInformation } from "./SkillInformation";
import { SkillsTypography } from "./SkillsTypography";

export function SkillsSection() {
  const entrance = useScrollEntrance({ amount: 0.3 });
  const [activeSkillId, setActiveSkillId] = useState<string>(skills[0].id);

  const handleActiveSkillChange = useCallback((id: string) => {
    setActiveSkillId(id);
  }, []);

  const activeSkill = skills.find((s) => s.id === activeSkillId) ?? skills[0];

  return (
    <section
      ref={entrance.ref}
      id="skills"
      className="relative flex h-screen w-full items-center overflow-hidden bg-[#08070A]"
    >
      {/* Background Large Display Typography Layer */}
      <SkillsTypography />

      {/* Top & Bottom Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,#08070A_0%,transparent_12%,transparent_88%,#08070A_100%)] z-10" />

      {/* Subtle Ambient Glow Behind Wheel */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: "10%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(232, 163, 61, 0.04) 0%, rgba(184, 130, 58, 0.02) 40%, transparent 70%)",
        }}
      />

      {/* Left Panel — Skill Info */}
      <div className="relative z-20 w-full max-w-[42%] pl-12 md:pl-20 lg:pl-24">
        <SkillInformation skill={activeSkill} />
      </div>

      {/* Right Panel — Skill Wheel */}
      <div className="relative h-full flex-1 overflow-hidden">
        <SkillsWheel
          controls={entrance.controls}
          entranceComplete={entrance.entranceComplete}
          onEntranceComplete={entrance.onEntranceComplete}
          onActiveSkillChange={handleActiveSkillChange}
        />
      </div>
    </section>
  );
}