"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { certificates, education } from "@/lib/data";
import type { Certificate } from "@/types";
import { SectionWrapper } from "@/components/SectionWrapper";

export function Education() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  useEffect(() => {
    if (!selected) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selected]);

  return (
    <SectionWrapper id="formacao" eyebrow="Trajetória" title="Formação e certificados">
      <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <h3 className="mb-6 text-xl font-bold">Formação acadêmica</h3>
          <div className="space-y-0 border-l-2 border-primary-200 pl-6 dark:border-primary-900">
            {education.map((item) => (
              <article key={`${item.course}-${item.period}`} className="relative pb-8 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute -left-[31px] top-1 size-3 rounded-full border-2 border-white bg-primary-600 dark:border-slate-950"
                />
                <p className="text-sm font-bold text-primary-600 dark:text-primary-400">
                  {item.period}
                </p>
                <h4 className="mt-1 text-lg font-bold">{item.course}</h4>
                <p className="text-sm font-semibold text-slate-500">
                  {item.institution}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-xl font-bold">Certificados</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {certificates.map((certificate) => (
              <button
                key={certificate.id}
                type="button"
                onClick={() => setSelected(certificate)}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white text-left transition hover:-translate-y-1 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900"
                aria-label={`Ampliar certificado ${certificate.title}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={certificate.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold">{certificate.title}</h4>
                  <p className="mt-1 text-sm text-slate-500">
                    {certificate.issuer} · {certificate.year}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {selected ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Certificado ${selected.title}`}
          className="fixed inset-0 z-[70] grid place-items-center bg-slate-950/85 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelected(null);
          }}
        >
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-xl bg-white p-3 dark:bg-slate-900">
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Fechar modal"
              className="absolute right-5 top-5 z-10 grid size-10 place-items-center rounded-full bg-white text-slate-900 shadow"
            >
              <X className="size-5" />
            </button>
            <div className="relative aspect-[10/7]">
              <Image
                src={selected.image}
                alt={`Certificado ${selected.title}`}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </SectionWrapper>
  );
}
