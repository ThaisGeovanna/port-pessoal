"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({
  id,
  title,
  eyebrow,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`scroll-mt-20 py-16 sm:py-20 lg:py-24 ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 max-w-2xl">
          {eyebrow ? (
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-primary-600 dark:text-primary-400">
              {eyebrow}
            </p>
          ) : null}
          <h2
            id={`${id}-title`}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            {title}
          </h2>
        </header>
        {children}
      </div>
    </motion.section>
  );
}
