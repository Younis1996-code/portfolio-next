"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?:
    | "fade-up"
    | "fade-down"
    | "fade-left"
    | "fade-right"
    | "fade-up-left"
    | "fade-up-right"
    | "fade-down-left"
    | "fade-down-right"
    | "zoom-in"
    | "zoom-out"
    | "flip-up"
    | "flip-down"
    | "flip-left"
    | "flip-right"
    | "rotate-z"
    | "rotate-z-inverse";
  duration?: number; // ms
  delay?: number; // ms
  once?: boolean; // animate only once or every time
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation = "fade-up",
  duration = 1500,
  delay = 0,
  once = true,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [once]);

  // Base class
  const base = "absolutetransition-all will-change-transform";

  // Hidden states
  const hidden = {
    "fade-up": "opacity-0 translate-y-8",
    "fade-down": "opacity-0 -translate-y-8",
    "fade-left": "opacity-0 -translate-x-8",
    "fade-right": "opacity-0 translate-x-8",
    "fade-up-left": "opacity-0 -translate-y-8 -translate-x-8",
    "fade-up-right": "opacity-0 -translate-y-8 translate-x-8",
    "fade-down-left": "opacity-0 translate-y-8 -translate-x-8",
    "fade-down-right": "opacity-0 translate-y-8 translate-x-8",
    "zoom-in": "opacity-0 scale-75",
    "zoom-out": "opacity-0 scale-125",
    "flip-up": "opacity-0 rotate-x-90",
    "flip-down": "opacity-0 -rotate-x-90",
    "flip-left": "opacity-0 rotate-y-90",
    "flip-right": "opacity-0 -rotate-y-90",
    "rotate-z": "opacity-0 rotate-[-180deg]",
    "rotate-z-inverse": "opacity-0 rotate-[180deg]",
  }[animation];

  // Visible states
  const visible = {
    "fade-up": "opacity-100 translate-y-0",
    "fade-down": "opacity-100 translate-y-0",
    "fade-left": "opacity-100 translate-x-0",
    "fade-right": "opacity-100 translate-x-0",
    "fade-up-left": "opacity-100 translate-x-0 translate-y-0",
    "fade-up-right": "opacity-100 translate-x-0 translate-y-0",
    "fade-down-left": "opacity-100 translate-x-0 translate-y-0",
    "fade-down-right": "opacity-100 translate-x-0 translate-y-0",
    "zoom-in": "opacity-100 scale-100",
    "zoom-out": "opacity-100 scale-100",
    "flip-up": "opacity-100 rotate-x-0",
    "flip-down": "opacity-100 rotate-x-0",
    "flip-left": "opacity-100 rotate-y-0",
    "flip-right": "opacity-100 rotate-y-0",
    "rotate-z": "opacity-100 rotate-0",
    "rotate-z-inverse": "opacity-100 rotate-0",
  }[animation];

  return (
    <div
      ref={ref}
      className={`${base} ${isVisible ? visible : hidden}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}ms`,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
