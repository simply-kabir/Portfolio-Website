"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Lighting from "./lighting";
import WorkspaceShell from "./workspaceshell";
import CameraRig from "./camera-rig";

export default function SceneCanvas({ progress = 0 }: { progress?: number }) {
  // Canvas opacity cross-fades smoothly between progress 0.50 and 0.70
  // in both scroll directions (down to About, up to Monitor).
  const opacity = progress < 0.50 ? 1 : Math.max(0, 1 - (progress - 0.50) / 0.20);

  return (
    <div
      style={{
        opacity,
        visibility: opacity === 0 ? "hidden" : "visible",
        pointerEvents: opacity === 0 ? "none" : "auto",
        transition: "opacity 0.05s linear",
        width: "100%",
        height: "100%",
      }}
    >
      <Canvas
        frameloop={opacity === 0 ? "demand" : "always"}
        dpr={[1, 2]}
        shadows ="variance"
        camera={{ position: [0, 1.3, 6.1], fov: 33, manual: true }}
        gl={{ antialias: true, alpha: true, toneMappingExposure: 1.25 }}
        style={{ width: "100%", height: "100%" }}
      >
        <Suspense fallback={null}>
          <Lighting />
          <WorkspaceShell progress={progress} />
          <CameraRig progress={progress} />
        </Suspense>
      </Canvas>
    </div>
  );
}