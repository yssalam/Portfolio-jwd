import miniQuizImage from "@/images/projects/mini-quiz.png";
import mosqueCmsImage from "@/images/projects/mosque-cms.png";
import removieImage from "@/images/projects/removie.png";
import osbImage from "@/images/projects/osb.png";

export interface Project {
  id: number;
  title: string;
  category: string;
  date: string;
  description: string;
  technologies: string[];
  image: string;
  url?: string;
}

export interface SkillGroup {
  title: string;
  description: string;
  technologies: string[];
}

export interface Experience {
  period: string;
  position: string;
  company: string;
  type: string;
  description: string;
}

export const profile = {
  name: "Yoga Subhi Salam",
  proname: "yssalam",
  role: "Junior Web Developer",
  location: "Bandung, Indonesia",
  email: "yoga.subhisalam15@gmail.com",
  github: "https://github.com/yssalam",
  linkedin: "https://linkedin.com/in/yssalam",
};

export const stats = [
  {
    value: "2024",
    label: "Mulai berkarya",
  },
  {
    value: "10+",
    label: "Proyek selesai",
  },
  {
    value: "5+",
    label: "Teknologi",
  },
];

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Antarmuka yang rapi dan responsif.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description: "Fondasi aplikasi dan data.",
    technologies: ["Laravel", "PHP", "MySQL"],
  },
  {
    title: "Design & UX",
    description: "Dari ide ke pengalaman nyata.",
    technologies: ["Figma", "Responsive UI", "Accessibility"],
  },
  {
    title: "Workflow",
    description: "Alur kerja yang terstruktur.",
    technologies: ["Git & GitHub", "Vercel", "REST API"],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Removie App",
    category: "WEB APPLICATION",
    date: "January 2026",
    description: "Movie searching web app using React and API.",
    technologies: ["React", "API", "Tailwind CSS"],
    image: removieImage,
    url: "https://removie-tau.vercel.app/",
  },

  {
    id: 2,
    title: "One Shine Beads",
    category: "E-COMMERCE",
    date: "Juli 2025",
    description:
      "Website e-commerce untuk kebutuhan operasional dan penjualan produk.",
    technologies: ["React", "Supabase", "Tailwind CSS"],
    image: osbImage,
    url: "https://one-shine-beads.vercel.app/",
  },

  {
    id: 3,
    title: "Mini Quiz",
    category: "WEB APPLICATION",
    date: "Oktober 2025",
    description:
      "Aplikasi quiz berbasis web dengan React dan integrasi REST API.",
    technologies: ["React", "REST API", "CSS"],
    image: miniQuizImage,
    url: "https://mini-quiz-app-eosin.vercel.app/",
  },
  {
    id: 4,
    title: "Mosque CMS",
    category: "FULLSTACK WEB APPLICATION",
    date: "September 2026",
    description:
      "Fullstack mosque website with a CMS dashboard for managing articles, events, gallery, and mosque information.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Supabase"],
    image: mosqueCmsImage,
    url: "https://mosque-website-ebon.vercel.app/",
  },
];

export const process = [
  {
    number: "01",
    title: "Pahami masalahnya",
    description:
      "Mulai dari tujuan, konteks, dan kebutuhan pengguna. Solusi yang tepat lahir dari pertanyaan yang tepat.",
  },
  {
    number: "02",
    title: "Bangun dengan teliti",
    description:
      "Komponen yang konsisten, kode yang terstruktur, dan layout responsif menjadi dasar pengalaman yang baik.",
  },
  {
    number: "03",
    title: "Uji, rilis, tingkatkan",
    description:
      "Uji aksesibilitas dan pengalaman sebelum rilis, lalu iterasi berdasarkan kebutuhan pengguna.",
  },
];

export const experiences: Experience[] = [
  {
    period: "2024 — 2025",
    position: "Freelance Developer",
    company: "Independent",
    type: "Freelance",
    description:
      "Membantu mengembangkan aplikasi dan website berdasarkan kebutuhan project dan pengguna.",
  },
  {
    period: "2024 — 2025",
    position: "Admin Aplikasi UMKM",
    company: "One Shine Beads",
    type: "Part-time",
    description:
      "Mengelola dan memantau sistem aplikasi untuk mendukung operasional UMKM sehari-hari.",
  },
];
