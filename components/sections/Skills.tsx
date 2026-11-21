"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import { SectionWrapper } from "@/components/SectionWrapper";

export function Skills() {
  return (
    <SectionWrapper
      id="skills"
      eyebrow="Competências"
      title="Skills"
      className="bg-white dark:bg-slate-900/40"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <article
            key={category.title}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="mb-6 text-xl font-bold">{category.title}</h3>
            <div className="space-y-5">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        aria-hidden="true"
                        className="grid size-8 place-items-center rounded-lg bg-primary-100 text-[10px] font-bold text-primary-700 dark:bg-primary-500/15 dark:text-primary-300"
                      >
                        {skill.icon}
                      </span>
                      <span className="font-semibold">{skill.name}</span>
                    </div>
                    <span className="text-sm text-slate-500">{skill.level}%</span>
                  </div>
                  <div
                    role="progressbar"
                    aria-label={`${skill.name}: ${skill.level}%`}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={skill.level}
                    className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800"
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className="h-full rounded-full bg-primary-600"
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
