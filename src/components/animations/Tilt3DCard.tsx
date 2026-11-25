"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface Tilt3DCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
}

/**
 * Interactive 3D perspective card with spring-damped pointer tilt and subtle specular sheen.
 */
export function Tilt3DCard({
  children,
  className,
  maxTilt = 8,
  glare = true,
}: Tilt3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glareOpacity = useMotionValue(0);

  const springConfig = { stiffness: 220, damping: 22, mass: 0.6 };
  const rotateX = useSpring(rawRotateX, springConfig);
  const rotateY = useSpring(rawRotateY, springConfig);
  const smoothGlareOpacity = useSpring(glareOpacity, { stiffness: 200, damping: 25 });

  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 248, 235, 0.24), transparent 62%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    rawRotateY.set((px - 0.5) * maxTilt * 2);
    rawRotateX.set((0.5 - py) * maxTilt * 2);
    glareX.set(px * 100);
    glareY.set(py * 100);
    glareOpacity.set(1);
  };

  const handleMouseLeave = () => {
    rawRotateX.set(0);
    rawRotateY.set(0);
    glareOpacity.set(0);
  };

  return (
    <div style={{ perspective: 1100 }} className="w-full h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: shouldReduceMotion ? 0 : rotateX,
          rotateY: shouldReduceMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={shouldReduceMotion ? undefined : { scale: 1.015 }}
        transition={{ duration: 0.25 }}
        className={cn("relative w-full h-full will-change-transform", className)}
      >
        {children}
        {glare && !shouldReduceMotion && (
          <motion.div
            aria-hidden="true"
            style={{
              background: glareBackground,
              opacity: smoothGlareOpacity,
            }}
            className="pointer-events-none absolute inset-0 z-20 rounded-[inherit]"
          />
        )}
      </motion.div>
    </div>
  );
}
