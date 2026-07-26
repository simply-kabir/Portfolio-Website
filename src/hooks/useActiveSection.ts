"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = [
  "projects",
  "experience",
  "skills",
  "about",
  "contact",
];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      }
    );

    SECTION_IDS.forEach((id) => {
      const section = document.getElementById(id);

      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}