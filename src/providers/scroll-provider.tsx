"use client";

import { useEffect, useMemo, useState } from "react";
import { ScrollContext } from "@/context/scrollcontext";

export default function ScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;

      const maxScroll =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const value =
        maxScroll <= 0
          ? 0
          : scrollTop / maxScroll;

      setProgress(value);
    };

    updateScroll();

    window.addEventListener(
      "scroll",
      updateScroll,
      { passive: true }
    );

    return () =>
      window.removeEventListener(
        "scroll",
        updateScroll
      );
  }, []);

  const value = useMemo(
    () => ({
      progress,
    }),
    [progress]
  );

  return (
    <ScrollContext.Provider value={value}>
      {children}
    </ScrollContext.Provider>
  );
}