import { createContext } from "react";

export interface ScrollContextType {
  progress: number;
}

export const ScrollContext = createContext<ScrollContextType>({
  progress: 0,
});