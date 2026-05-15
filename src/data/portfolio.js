import {
  FaReact, FaNodeJs, FaLaravel, FaPhp, FaPython, FaJava,
  FaGitAlt, FaFigma, FaUnity, FaHtml5, FaGithub, FaLinkedin,
  FaInstagram, FaTwitter, FaGamepad, FaShoppingCart, FaTicketAlt,
  FaServer, FaCss3Alt, FaCode
} from 'react-icons/fa';
import {
  SiJavascript, SiKotlin, SiLua,
  SiTailwindcss, SiMysql, SiTypescript, SiVite
} from 'react-icons/si';

export const personalInfo = {
  name: "M. Fahri Ramadhan",
  nickname: "Fahri",
  role: "Full-Stack Developer",
  roles: ["Full-Stack Developer", "UI/UX Designer", "Game Developer", "Mobile Developer"],
  bio: "I craft smooth digital experiences by bridging engineering + design — building products that are clean, fast, and easy to use.",
  education: "Information Systems, Universitas Sriwijaya",
  organization: "Head of Ristek HIMSI 2026 | Expert Staff Ristek BEM UNSRI 2026",
  location: "Palembang, Indonesia",
  email: "fahrirmdhn171006@gmail.com",
  github: "https://github.com/PurpsCorps",
  linkedin: "https://linkedin.com/in/m-fahri-ramadhan",
  twitter: "https://x.com/pahriirm",
  instagram: "https://instagram.com/_fahrirm",
};

export const stats = [
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Projects Completed", value: 50, suffix: "+" },
  { label: "Happy Clients", value: 30, suffix: "+" },
  { label: "Tech Mastered", value: 15, suffix: "+" },
];

export const skills = [
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e", level: 90 },
  { name: "React", icon: FaReact, color: "#61dafb", level: 88 },
  { name: "PHP", icon: FaPhp, color: "#777bb4", level: 85 },
  { name: "Laravel", icon: FaLaravel, color: "#ff2d20", level: 85 },
  { name: "Node.js", icon: FaNodeJs, color: "#339933", level: 80 },
  { name: "Python", icon: FaPython, color: "#3776ab", level: 75 },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6", level: 78 },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4", level: 90 },
  { name: "MySQL", icon: SiMysql, color: "#4479a1", level: 82 },
  { name: "Java", icon: FaJava, color: "#007396", level: 70 },
  { name: "Kotlin", icon: SiKotlin, color: "#7f52ff", level: 65 },
  { name: "C#", icon: FaCode, color: "#239120", level: 70 },
  { name: "C++", icon: FaCode, color: "#00599c", level: 68 },
  { name: "Lua", icon: SiLua, color: "#2c2d72", level: 80 },
  { name: "HTML5", icon: FaHtml5, color: "#e34f26", level: 95 },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572b6", level: 92 },
  { name: "Git", icon: FaGitAlt, color: "#f05032", level: 85 },
  { name: "Figma", icon: FaFigma, color: "#f24e1e", level: 80 },
  { name: "Unity", icon: FaUnity, color: "#ffffff", level: 65 },
  { name: "Vite", icon: SiVite, color: "#646cff", level: 85 },
];

export const projects = [
  {
    title: "SI FEST 2025",
    description: "Event ticket and competition registration platform with barcode/QR integration. Features admin dashboard, real-time analytics, and automated email notifications.",
    tech: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    icon: FaTicketAlt,
    color: "#00f0ff",
    link: "https://sifestunsri.com",
    github: "#",
  },
  {
    title: "HiLo Sarcopenia",
    description: "Ticket selling platform with barcode scanner, QRIS payment integration, and Google account linking. Built with a comprehensive admin panel using Filament.",
    tech: ["Laravel", "Tailwind CSS", "MySQL", "Filament"],
    icon: FaTicketAlt,
    color: "#a855f7",
    link: "https://hilosarcopenia.my.id",
    github: "#",
  },
  {
    title: "Vector Hosting",
    description: "Web hosting e-commerce platform with automated payment verification, server provisioning, and real-time uptime monitoring dashboard.",
    tech: ["React", "Laravel", "Tailwind CSS", "MySQL"],
    icon: FaServer,
    color: "#00ff88",
    link: "https://vector-hosting.com",
    github: "#",
  },
  {
    title: "Game TopUp Platform",
    description: "Game top-up e-commerce with integrated payment gateways, real-time price updates, and instant delivery system for multiple game titles.",
    tech: ["React", "Laravel", "MySQL", "Filament"],
    icon: FaGamepad,
    color: "#ff006e",
    link: "#",
    github: "#",
  },
  {
    title: "FiveM Roleplay Server",
    description: "Custom GTA V FiveM roleplay server with complete economy system, custom UI overlays, job systems, and interactive game mechanics.",
    tech: ["Lua", "JavaScript", "HTML5", "MySQL"],
    icon: FaGamepad,
    color: "#f7df1e",
    link: "#",
    github: "#",
  },
  {
    title: "E-Commerce Windows App",
    description: "Desktop e-commerce application built for Windows with offline-first capabilities, barcode scanning, and integrated inventory management.",
    tech: ["C#", "MySQL", "Unity"],
    icon: FaShoppingCart,
    color: "#61dafb",
    link: "#",
    github: "#",
  },
];

export const socialLinks = [
  { name: "GitHub", icon: FaGithub, url: "https://github.com/PurpsCorps", color: "#ffffff" },
  { name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/in/m-fahri-ramadhan", color: "#0077b5" },
  { name: "Twitter", icon: FaTwitter, url: "https://x.com/pahriirm", color: "#1da1f2" },
  { name: "Instagram", icon: FaInstagram, url: "https://instagram.com/_fahrirm", color: "#e4405f" },
];

export const terminalCommands = [
  { cmd: "whoami", output: "fahri@portfolio ~ Full-Stack Developer" },
  { cmd: "cat about.txt", output: "I craft smooth digital experiences by bridging engineering + design — building products that are clean, fast, and easy to use." },
  { cmd: "cat education.txt", output: "📚 Information Systems — Universitas Sriwijaya (UNSRI)\n🏛️ Head of Ristek HIMSI 2026 | Expert Staff Ristek BEM UNSRI 2026" },
  { cmd: "ls skills/", output: "JavaScript  PHP  React  Laravel  Node.js  Python\nKotlin  Java  Lua  C#  C++  TypeScript\nTailwind  MySQL  Git  Figma  Unity  Vite" },
  { cmd: "cat location.txt", output: "📍 Palembang, Indonesia" },
];
