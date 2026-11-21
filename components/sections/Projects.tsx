"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { projects } from "@/lib/data";
import { SectionWrapper } from "@/components/SectionWrapper";

export function Projects() {
  const technologies = [
    "Todos",
    ...Array.from(new Set(projects.flatMap((project) => project.technologies))),
  ];
  const [filter, setFilter] = useState("Todos");
  const filtered =
    filter === "Todos"
      ? projects
      : projects.filter((project) => project.technologies.includes(filter));

  return (
    <SectionWrapper id="projetos" eyebrow="Portfólio" title="Trabalhos feitos">
      <div className="mb-8 flex flex-wrap gap-2" aria-label="Filtrar projetos">
        {technologies.map((technology) => (
          <button
            key={technology}
            type="button"
            onClick={() => setFilter(technology)}
            aria-pressed={filter === technology}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              filter === technology
                ? "bg-primary-600 text-white"
                : "border border-slate-200 bg-white text-slate-600 hover:border-primary-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            }`}
          >
            {technology}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={project.image}
                alt={`Prévia do projeto ${project.title}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-500/10 dark:text-primary-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-4">
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-600 hover:underline dark:text-primary-400"
                  >
                    <ExternalLink className="size-4" /> Demo
                  </a>
                ) : null}
                {project.repositoryUrl ? (
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:underline dark:text-slate-300"
                  >
                    <Github className="size-4" /> Repositório
                  </a>
                ) : null}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
