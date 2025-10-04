"use client";

import Lottie, { LottieRefCurrentProps } from "lottie-react";
import darkModeButtonAnim from "@/../public/animation/dark-mode-button.json";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

export default function ThemeToggleButton() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  // const [mounted, setMounted] = useState(false);
  const [pendingTheme, setPendingTheme] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // useEffect(() => {
  //   if(!mounted) setMounted(true);
  // }, [mounted]);

  // Show moon in dark mode, sun in light mode
  useEffect(() => {
    if ( !lottieRef.current || isAnimating) return;
    lottieRef.current.setSpeed(1.5);
    // setMounted(true)
    const currentTheme = theme ?? resolvedTheme;
    if (currentTheme === "dark") {
      lottieRef.current.goToAndStop(0, true); // Moon for dark
    } else if (currentTheme === "light") {
      lottieRef.current.goToAndStop(250, true); // Sun for light
    }
  }, [theme, resolvedTheme, isAnimating]);

  const handleToggle = () => {
    if (!lottieRef.current || isAnimating) return;
    setIsAnimating(true);
    const currentTheme = theme ?? resolvedTheme;
    if (currentTheme === "dark") {
      lottieRef.current.playSegments([0, 200], true); // Moon to Sun
      setPendingTheme("light");
    } else if (currentTheme === "light") {
      lottieRef.current.playSegments([200, 0], true); // Sun to Moon
      setPendingTheme("dark");
    }
  };

  const handleComplete = () => {
    if (pendingTheme) {
      setTheme(pendingTheme);
      setPendingTheme(null);
    }
    setIsAnimating(false);
  };

  // if (!mounted) return null;

  return (
    <button
      className="w-18 h-18 md:w-20 md:h-20 lg:w-21 lg:h-21 xl:w-25 xl:h-25"
      onClick={handleToggle}
      aria-label="Toggle Theme"
      type="button"
      // tabIndex={0}
    >
      <Lottie
        animationData={darkModeButtonAnim}
        loop={false}
        lottieRef={lottieRef}
        autoplay={false}
        onComplete={handleComplete}
        className="cursor-pointer"
        // style={{ pointerEvents: "none"}}
      />
    </button>
  );
}