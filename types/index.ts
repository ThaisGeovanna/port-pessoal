export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  repositoryUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  title: "Frontend" | "Backend" | "Ferramentas/DevOps";
  skills: Skill[];
}

export interface Education {
  course: string;
  institution: string;
  period: string;
  description: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year: string;
  image: string;
}

export interface Hobby {
  title: string;
  description: string;
  icon: "camera" | "book" | "music" | "game" | "plane";
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "whatsapp";
}
