import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

type AnimationType = 
  | "fade-in-up" 
  | "fade-in-down" 
  | "fade-in-left" 
  | "fade-in-right" 
  | "scale-in" 
  | "blur-in";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
}

const animationClasses: Record<AnimationType, { initial: string; visible: string }> = {
  "fade-in-up": {
    initial: "opacity-0 translate-y-8",
    visible: "opacity-100 translate-y-0",
  },
  "fade-in-down": {
    initial: "opacity-0 -translate-y-8",
    visible: "opacity-100 translate-y-0",
  },
  "fade-in-left": {
    initial: "opacity-0 -translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  "fade-in-right": {
    initial: "opacity-0 translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  "scale-in": {
    initial: "opacity-0 scale-95",
    visible: "opacity-100 scale-100",
  },
  "blur-in": {
    initial: "opacity-0 blur-sm",
    visible: "opacity-100 blur-0",
  },
};

export function AnimatedSection({
  children,
  className,
  animation = "fade-in-up",
  delay = 0,
  duration = 600,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold });
  const animClasses = animationClasses[animation];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out will-change-transform",
        isVisible ? animClasses.visible : animClasses.initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default AnimatedSection;
