"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { profile, socialLinks } from "@/lib/data";

const icons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  whatsapp: Mail,
};

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative flex min-h-[calc(100vh-4rem)] scroll-mt-16 items-center overflow-hidden pt-16"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,.16),transparent_28%),radial-gradient(circle_at_15%_80%,rgba(147,197,253,.16),transparent_24%)]"
      />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1fr_.75fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-primary-600 dark:text-primary-400">
            Olá, eu sou
          </p>
          <h1
            id="hero-title"
            className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </h1>
          <p className="mt-3 text-xl font-semibold text-primary-600 dark:text-primary-400 sm:text-2xl">
            {profile.title}
          </p>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="rounded-lg bg-primary-600 px-5 py-3 font-semibold text-white shadow-soft transition hover:bg-primary-700"
            >
              Ver Projetos
            </a>
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 font-semibold hover:bg-white dark:border-slate-700 dark:hover:bg-slate-900"
            >
              <Download className="size-4" />
              Baixar CV
            </a>
          </div>

          <div className="mt-7 flex gap-2">
            {socialLinks.map((link) => {
              const Icon = icons[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={link.label}
                  className="grid size-11 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:-translate-y-1 hover:border-primary-500 hover:text-primary-600 dark:border-slate-700 dark:text-slate-300"
                >
                  <Icon className="size-5" />
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="relative mx-auto aspect-square w-full max-w-[390px]"
        >
          <div className="absolute inset-5 rounded-full bg-primary-500/10 blur-2xl" />
          <Image
            src={profile.avatar}
            alt={`Foto de perfil de ${profile.name}`}
            fill
            priority
            sizes="(max-width: 768px) 90vw, 390px"
            className="relative rounded-full border-8 border-white object-cover shadow-soft dark:border-slate-900"
          />
        </motion.div>
      </div>
    </section>
  );
}
