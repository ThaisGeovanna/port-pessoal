"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { profile } from "@/lib/data";
import { SectionWrapper } from "@/components/SectionWrapper";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome com pelo menos 2 caracteres."),
  email: z.string().trim().email("Informe um e-mail válido."),
  message: z
    .string()
    .trim()
    .min(10, "Escreva uma mensagem com pelo menos 10 caracteres."),
});

type ContactValues = z.infer<typeof contactSchema>;

export function Contact() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(values: ContactValues) {
    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Não foi possível enviar agora. Use o e-mail direto abaixo.",
        );
      }

      setStatus("success");
      setStatusMessage("Mensagem enviada com sucesso!");
      reset();
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Não foi possível enviar agora. Use o e-mail direto abaixo.",
      );
    }
  }

  const inputClass =
    "mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-primary-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100";

  return (
    <SectionWrapper id="contato" eyebrow="Vamos conversar" title="Contato">
      <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
        <aside>
          <p className="max-w-md text-slate-600 dark:text-slate-300">
            Tem uma oportunidade ou projeto em mente? Envie uma mensagem e
            retornarei o contato assim que possível.
          </p>
          <div className="mt-6 space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-lg text-sm font-semibold hover:text-primary-600"
            >
              <Mail className="size-5" /> {profile.email}
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg text-sm font-semibold hover:text-primary-600"
            >
              <Github className="size-5" /> GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg text-sm font-semibold hover:text-primary-600"
            >
              <Linkedin className="size-5" /> LinkedIn
            </a>
          </div>
        </aside>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-bold">
                Nome
              </label>
              <input
                id="name"
                autoComplete="name"
                className={inputClass}
                placeholder="Seu nome"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                {...register("name")}
              />
              {errors.name ? (
                <p id="name-error" className="mt-1 text-sm text-red-600">
                  {errors.name.message}
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-bold">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                className={inputClass}
                placeholder="voce@exemplo.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                {...register("email")}
              />
              {errors.email ? (
                <p id="email-error" className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              ) : null}
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="text-sm font-bold">
              Mensagem
            </label>
            <textarea
              id="message"
              rows={5}
              className={`${inputClass} resize-y`}
              placeholder="Conte um pouco sobre seu projeto..."
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              {...register("message")}
            />
            {errors.message ? (
              <p id="message-error" className="mt-1 text-sm text-red-600">
                {errors.message.message}
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary-600 px-5 py-3 font-bold text-white transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send className="size-4" />
            {status === "loading" ? "Enviando..." : "Enviar mensagem"}
          </button>

          <div aria-live="polite" className="mt-4">
            {status === "success" ? (
              <p className="font-semibold text-green-700 dark:text-green-400">
                {statusMessage}
              </p>
            ) : null}
            {status === "error" ? (
              <p className="font-semibold text-red-700 dark:text-red-400">
                {statusMessage}
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </SectionWrapper>
  );
}
