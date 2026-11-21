"use client";

import { BookOpen, Camera, Gamepad2, Music2 } from "lucide-react";
import { hobbies } from "@/lib/data";
import { SectionWrapper } from "@/components/SectionWrapper";

const icons = {
  camera: Camera,
  book: BookOpen,
  music: Music2,
  game: Gamepad2,
  plane: Camera,
};

export function Hobbies() {
  return (
    <SectionWrapper
      id="hobbies"
      eyebrow="Além do código"
      title="Hobbies pessoais"
      className="bg-white dark:bg-slate-900/40"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {hobbies.map((hobby) => {
          const Icon = icons[hobby.icon];
          return (
            <article
              key={hobby.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-primary-300 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="grid size-12 place-items-center rounded-2xl bg-primary-100 text-primary-700 dark:bg-primary-500/15 dark:text-primary-300">
                <Icon className="size-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{hobby.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {hobby.description}
              </p>
            </article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
