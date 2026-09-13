export const portfolio = {
  name: "Siram Chiru Arvind",
  shortName: "Arvind",
  role: "CSE Undergraduate · Java & Spring Boot Backend Developer",
  institution: "IIIT Sri City",
  email: "siramchiru.a25@iiits.in",
  contactEmail: "arvindsiram11@gmail.com",
  linkedin: "https://www.linkedin.com/in/siram-chiru-arvind-4081bb3a6/",
  github: "https://github.com/ChiruArvind",
  resumeUrl: "/resume.html",
  skills: [
    { category: "Backend", items: ["Java", "Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate", "REST APIs"] },
    { category: "Database", items: ["PostgreSQL", "SQL", "Relational Database Design"] },
    { category: "Security", items: ["Spring Security", "JWT", "Authentication", "Role-Based Access Control"] },
    { category: "Tools & Infrastructure", items: ["Git", "GitHub", "Docker", "Linux", "Maven", "Postman"] },
  ],
  projects: Array.from({ length: 3 }, (_, index) => ({
    number: String(index + 1).padStart(2, "0"),
    name: `PROJECT ${String(index + 1).padStart(2, "0")}`,
    description: "Project details coming soon",
    problem: "Problem statement will be added with the project details.",
    technologies: [] as string[],
    highlights: [] as string[],
    github: "",
    demo: "",
  })),
  education: {
    institution: "IIIT Sri City",
    degree: "B.Tech — Computer Science & Engineering",
    period: "2025 — 2029",
    relevantAreas: [
      "Data Structures",
      "Database Systems",
      "Object-Oriented Programming",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
    ],
  },
} as const;

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "R&D", href: "#rnd" },
  { label: "Contact", href: "#contact" },
] as const;