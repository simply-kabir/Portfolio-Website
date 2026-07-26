"use client";

import { useContext } from "react";
import { ScrollContext } from "@/context/scrollcontext";

export function useScrollProgress() {
  return useContext(ScrollContext).progress;
}