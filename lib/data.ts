import type {
  Certificate,
  Education,
  Hobby,
  Project,
  SkillCategory,
  SocialLink,
} from "@/types";

// TODO: Dados ficticios marcados para substituicao.
export const profile = {
  name: "Thaís Oliveira",
  title: "Desenvolvedora de Software",
  intro:
    "Desenvolvo software com base sólida: da análise de requisitos ao código em produção.",
  avatar: "https://drive.google.com/file/d/1aA5vW3BOeBzxgigjADL-bytbbcoRc6bZ/view?usp=drive_link",
  email: "thaisgeovanna001@gmail.com",
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Dashboard Financeiro",
    description:
      "Painel responsivo para acompanhamento de receitas, despesas e metas mensais.",
    image: "/images/project-finance.svg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://example.com",
    repositoryUrl: "https://github.com/",
    featured: true,
  },
  {
    id: 2,
    title: "Catálogo de Viagens",
    description:
      "Experiência moderna de descoberta e reserva de destinos com filtros dinâmicos.",
    image: "/images/project-travel.svg",
    technologies: ["React", "TypeScript", "API REST"],
    demoUrl: "https://example.com",
    repositoryUrl: "https://github.com/",
  },
  {
    id: 3,
    title: "App de Produtividade",
    description:
      "Organizador de tarefas com projetos, prioridades e acompanhamento de progresso.",
    image: "/images/project-productivity.svg",
    technologies: ["Next.js", "Zustand", "Tailwind CSS"],
    demoUrl: "https://example.com",
    repositoryUrl: "https://github.com/",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90, icon: "React" },
      { name: "Next.js", level: 85, icon: "Next" },
      { name: "TypeScript", level: 82, icon: "TS" },
      { name: "Tailwind CSS", level: 88, icon: "TW" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 75, icon: "Node" },
      { name: "PostgreSQL", level: 70, icon: "SQL" },
      { name: "API REST", level: 78, icon: "API" },
    ],
  },
  {
    title: "Ferramentas/DevOps",
    skills: [
      { name: "Git & GitHub", level: 86, icon: "Git" },
      { name: "Docker", level: 68, icon: "DK" },
      { name: "Vercel", level: 80, icon: "V" },
    ],
  },
];

export const education: Education[] = [
  {
    course: "Bacharelado em Ciência da Computação",
    institution: "Universidade Exemplo",
    period: "2022 — 2026",
    description:
      "Formação voltada a engenharia de software, desenvolvimento web e experiência do usuário.",
  },
  {
    course: "Curso Técnico em Informática",
    institution: "Instituição Exemplo",
    period: "2019 — 2021",
    description:
      "Base em lógica de programação, bancos de dados, redes e desenvolvimento de sistemas.",
  },
];

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Next.js — Guia Completo",
    issuer: "Instituição Exemplo",
    year: "2025",
    image: "/certificates/certificate-1.svg",
  },
  {
    id: 2,
    title: "Acessibilidade Web",
    issuer: "Instituição Exemplo",
    year: "2024",
    image: "/certificates/certificate-2.svg",
  },
  {
    id: 3,
    title: "Git e GitHub na Prática",
    issuer: "Instituição Exemplo",
    year: "2024",
    image: "/certificates/certificate-3.svg",
  },
];

export const hobbies: Hobby[] = [
  {
    title: "Fotografia",
    description: "Registro paisagens e pequenos detalhes do cotidiano.",
    icon: "camera",
  },
  {
    title: "Leitura",
    description: "Tecnologia, ficção científica e desenvolvimento pessoal.",
    icon: "book",
  },
  {
    title: "Música",
    description: "Exploro playlists, artistas independentes e novos estilos.",
    icon: "music",
  },
  {
    title: "Jogos",
    description: "Jogos cooperativos e narrativas interativas inspiram ideias.",
    icon: "game",
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    icon: "linkedin",
  },
  {
    label: "E-mail",
    href: `mailto:${profile.email}`,
    icon: "mail",
  },
];
