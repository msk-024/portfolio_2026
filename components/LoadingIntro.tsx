"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const VISIBLE_DURATION_MS = 1200;

export default function LoadingIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion() ?? false;

  useEffect(() => {
    const delay = shouldReduceMotion ? 300 : VISIBLE_DURATION_MS;
    const timer = setTimeout(() => setIsVisible(false), delay);
    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          aria-hidden="true"
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: "var(--color-white)" }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: shouldReduceMotion ? 0.01 : 0.4,
              ease: "easeInOut",
            },
          }}
        >
          <div
            className="flex flex-col items-center gap-4 select-none text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <p
              className="text-[11px] tracking-[5px] uppercase"
              style={{ color: "var(--color-text-soft)" }}
            >
              Welcome
            </p>
            <p
              className="text-[22px] md:text-[26px] tracking-[3px]"
              style={{ color: "var(--color-text)" }}
            >
              Misaki Mochizuki
            </p>
            <p
              className="text-[11px] tracking-[5px] uppercase"
              style={{ color: "var(--color-text-soft)" }}
            >
              Portfolio
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
