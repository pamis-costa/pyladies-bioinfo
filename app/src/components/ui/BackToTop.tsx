// src/components/BackToTop.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // O botão aparece depois que rolar 400px para baixo
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="cursor-pointer fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-white shadow-[0_4px_0_0_rgba(0,0,0,0.8)] transition-all duration-300 hover:bg-primary hover:text-secondary border-2 border-transparent hover:border-secondary"
          aria-label="Voltar ao topo"
        >
          <HiArrowUp className="h-7 w-7" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}