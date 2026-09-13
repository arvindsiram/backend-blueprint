import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  Blocks,
  BookOpen,
  Box,
  Braces,
  Check,
  ChevronDown,
  CircleUserRound,
  Code2,
  Database,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  LockKeyhole,
  Mail,
  Menu,
  Network,
  Server,
  ShieldCheck,
  Workflow,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems, portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const engineeringPrinciples = [
  {
    number: "01",
    title: "API Design",
    icon: Braces,
    text: "Design clear REST APIs with predictable endpoints, request/response structures, validation, and appropriate HTTP semantics.",
  },
  {
    number: "02",
    title: "Application Architecture",
    icon: Layers3,
    text: "Separate controllers, services, repositories, and domain logic to keep applications maintainable and easier to extend.",
  },
  {
    number: "03",
    title: "Data & Persistence",
    icon: Database,
    text: "Design relational data models and work with PostgreSQL using JPA/Hibernate while keeping data access organized.",
  },
  {
    number: "04",
    title: "Security & Access",
    icon: ShieldCheck,
    text: "Build authentication and authorization into applications using concepts such as JWT, Spring Security, and role-based access control.",
  },
] as const;

const currentFocus = [
  ["Spring Boot", "Building REST APIs and learning backend architecture."],
  ["PostgreSQL", "Improving database design and SQL skills."],
  ["Docker", "Learning containerization and deployment workflows."],
  ["Backend Security", "Understanding authentication, authorization, JWT, and RBAC."],
  ["Software Architecture", "Learning how to structure maintainable backend applications."],
] as const;

const buildInterests = [
  ["Institutional Systems", "Backend systems for managing structured information and workflows.", Workflow],
  ["Research Infrastructure", "APIs and services supporting repositories, publications, projects, and data.", BookOpen],
  ["Internal Tools", "Secure applications that simplify repetitive administrative workflows.", Wrench],
] as const;

const architecture = [
  ["Client", CircleUserRound, "Request origin"],
  ["REST API", Braces, "HTTP interface"],
  ["Spring Boot", Server, "Application runtime"],
  ["Service Layer", Layers3, "Business logic"],
  ["PostgreSQL", Database, "Persistence"],
] as const;

function SectionHeading({
  index,
  title,
  subtitle,
  light = false,
}: {
  index: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-12 max-w-2xl md:mb-16">
      <div className={cn("mb-4 flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-widest", light ? "text-accent" : "text-primary")}>
        <span>{index}</span><span className={cn("h-px w-8", light ? "bg-accent" : "bg-primary")} />
      </div>
      <h2 className={cn("font-display text-3xl font-semibold leading-tight md:text-5xl", light ? "text-primary-foreground" : "text-foreground")}>{title}</h2>
      {subtitle ? <p className={cn("mt-5 text-base leading-7 md:text-lg", light ? "text-dark-muted" : "text-muted-foreground")}>{subtitle}</p> : null}
    </div>
  );
}

function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return <div data-reveal className={cn("reveal", className)}>{children}</div>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-18 md:px-8" aria-label="Primary navigation">
        <a href="#top" className="group flex items-center gap-2 font-display text-lg font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <span className="flex size-7 items-center justify-center rounded-sm bg-primary font-mono text-xs font-bold text-primary-foreground">A</span>
          {portfolio.shortName}
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{item.label}</a>
          ))}
          <Button asChild size="sm"><a href={portfolio.resumeUrl} target="_blank" rel="noreferrer"><FileText />View Resume</a></Button>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation menu"><Menu /></Button>
          </SheetTrigger>
          <SheetContent className="w-[88%] border-l-border bg-background p-7">
            <SheetHeader className="border-b border-border pb-6 text-left">
              <SheetTitle className="font-display text-xl">{portfolio.shortName}</SheetTitle>
              <SheetDescription>CSE Undergraduate · IIIT Sri City</SheetDescription>
            </SheetHeader>
            <div className="mt-8 flex flex-col gap-1">
              {navItems.map((item, index) => (
                <SheetClose asChild key={item.href}>
                  <a href={item.href} className="flex items-center justify-between border-b border-border py-4 text-lg font-medium text-foreground">
                    <span>{item.label}</span><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                  </a>
                </SheetClose>
              ))}
            </div>
            <Button asChild className="mt-8 w-full"><a href={portfolio.resumeUrl} target="_blank" rel="noreferrer"><ArrowDownToLine />View Resume</a></Button>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}

function ArchitectureVisual() {
  return (
    <div className="architecture-panel relative mx-auto max-w-md overflow-hidden border border-border bg-card p-5 shadow-technical md:p-7">
      <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
        <div><p className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">Request lifecycle</p><p className="mt-1 text-xs text-muted-foreground">Layered backend architecture</p></div>
        <div className="flex gap-1.5" aria-hidden="true"><span className="size-2 rounded-full bg-border" /><span className="size-2 rounded-full bg-border" /><span className="size-2 rounded-full bg-primary" /></div>
      </div>
      <div className="space-y-0">
        {architecture.map(([name, Icon, detail], index) => (
          <div key={name}>
            <div className="group flex items-center gap-4 border border-border bg-background p-3.5 transition-colors hover:border-primary/40">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-sm bg-secondary text-primary"><Icon className="size-4" /></span>
              <div className="min-w-0 flex-1"><p className="text-sm font-semibold text-foreground">{name}</p><p className="text-xs text-muted-foreground">{detail}</p></div>
              <span className="font-mono text-[10px] text-muted-foreground">L{index + 1}</span>
            </div>
            {index < architecture.length - 1 ? <div className="flex h-6 justify-center"><div className="h-full w-px bg-border" /><ChevronDown className="absolute mt-3 size-3 text-primary" /></div> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="technical-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-14 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div className="max-w-3xl">
          <p className="mb-6 flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-widest text-primary"><span className="size-2 bg-primary" />CSE Undergraduate · IIIT Sri City</p>
          <h1 className="font-display text-5xl font-semibold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">Building reliable backend systems with <span className="text-primary">Java & Spring Boot.</span></h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">I'm a Computer Science undergraduate at IIIT Sri City interested in backend engineering, APIs, databases, and building practical software systems that solve real problems.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg"><a href="#projects">View Projects<ArrowDown /></a></Button>
            <Button asChild size="lg" variant="outline"><a href={portfolio.resumeUrl} target="_blank" rel="noreferrer"><ArrowDownToLine />Download Resume</a></Button>
          </div>
          <div className="mt-10 border-l-2 border-primary pl-4"><p className="font-mono text-xs leading-6 text-muted-foreground">Java · Spring Boot · REST APIs · PostgreSQL · SQL · Docker · Git</p></div>
        </div>
        <ArchitectureVisual />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-20 px-5 py-24 md:px-8 md:py-32">
      <Reveal className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
        <SectionHeading index="01" title="About Me" />
        <div>
          <p className="font-display text-2xl leading-relaxed text-foreground md:text-3xl">I'm Arvind, a Computer Science undergraduate at IIIT Sri City with an interest in backend development and practical software engineering.</p>
          <p className="mt-7 text-base leading-8 text-muted-foreground">I enjoy understanding how systems work behind the interface — from API design and business logic to databases, authentication, and deployment. I'm particularly interested in building software that is structured, maintainable, and useful beyond a classroom prototype.</p>
          <div className="mt-8 flex gap-4 border-t border-border pt-7"><Code2 className="mt-1 size-5 shrink-0 text-primary" /><p className="text-sm leading-6 text-muted-foreground"><strong className="font-semibold text-foreground">Currently learning and building</strong> with Java, Spring Boot, PostgreSQL, Docker, and modern backend development practices.</p></div>
        </div>
      </Reveal>
    </section>
  );
}

function Skills() {
  const icons = [Server, Database, LockKeyhole, Wrench];
  return (
    <section id="skills" className="scroll-mt-20 border-y border-border bg-secondary/45 px-5 py-24 md:px-8 md:py-32">
      <Reveal className="mx-auto max-w-7xl">
        <SectionHeading index="02" title="Technical Skills" subtitle="A focused toolkit for learning how dependable backend applications are designed, built, and maintained." />
        <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {portfolio.skills.map((skill, index) => {
            const Icon = icons[index] ?? Server;
            return <article key={skill.category} className="bg-card p-6 transition-colors hover:bg-background md:p-8"><div className="mb-8 flex size-10 items-center justify-center rounded-sm bg-secondary text-primary"><Icon className="size-5" /></div><h3 className="font-display text-xl font-semibold text-foreground">{skill.category}</h3><ul className="mt-5 space-y-3">{skill.items.map((item) => <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground"><span className="size-1 bg-primary" />{item}</li>)}</ul></article>;
          })}
        </div>
      </Reveal>
    </section>
  );
}

function BackendEngineering() {
  return (
    <section className="px-5 py-24 md:px-8 md:py-32">
      <Reveal className="mx-auto max-w-7xl">
        <SectionHeading index="03" title="How I Approach Backend Engineering" subtitle="Principles I use while learning to turn requirements into structured software systems." />
        <div className="grid gap-5 md:grid-cols-2">
          {engineeringPrinciples.map(({ number, title, icon: Icon, text }) => <article key={number} className="technical-card group border border-border bg-card p-7 md:p-9"><div className="flex items-start justify-between"><span className="font-mono text-sm font-semibold text-primary">{number}</span><Icon className="size-5 text-muted-foreground transition-colors group-hover:text-primary" /></div><h3 className="mt-10 font-display text-2xl font-semibold text-foreground">{title}</h3><p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">{text}</p></article>)}
        </div>
      </Reveal>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 bg-primary px-5 py-24 md:px-8 md:py-32">
      <Reveal className="mx-auto max-w-7xl">
        <SectionHeading index="04" title="Selected Projects" subtitle="A collection of systems and experiments that demonstrate how I learn and build." light />
        <div className="grid gap-5 lg:grid-cols-3">
          {portfolio.projects.map((project) => <article key={project.number} className="project-card flex min-h-[380px] flex-col border border-dark-border bg-dark-surface p-7 md:p-8"><div className="flex items-center justify-between"><span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">Project {project.number}</span><Box className="size-5 text-dark-muted" /></div><div className="my-auto py-12"><p className="font-mono text-xs uppercase tracking-widest text-dark-muted">Placeholder</p><h3 className="mt-3 font-display text-2xl font-semibold text-primary-foreground">{project.description}</h3><p className="mt-4 text-sm leading-7 text-dark-muted">{project.problem}</p></div><div className="border-t border-dark-border pt-5"><div className="flex items-center justify-between text-xs text-dark-muted"><span>Technical details pending</span><span className="flex items-center gap-1.5"><span className="size-1.5 rounded-full bg-accent" />Ready to update</span></div></div></article>)}
        </div>
        <p className="mt-8 max-w-2xl text-sm leading-6 text-dark-muted">Each card is prepared for a problem statement, technology stack, technical highlights, repository, and live demo when available.</p>
      </Reveal>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="scroll-mt-20 px-5 py-24 md:px-8 md:py-32">
      <Reveal className="mx-auto max-w-7xl">
        <SectionHeading index="05" title="Education" />
        <div className="grid overflow-hidden border border-border bg-card lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-7 md:p-12"><div className="flex size-12 items-center justify-center rounded-sm bg-primary text-primary-foreground"><GraduationCap className="size-6" /></div><p className="mt-10 font-mono text-xs font-semibold uppercase tracking-widest text-primary">{portfolio.education.period}</p><h3 className="mt-3 font-display text-3xl font-semibold text-foreground">{portfolio.education.institution}</h3><p className="mt-2 text-lg text-muted-foreground">{portfolio.education.degree}</p></div>
          <div className="border-t border-border bg-secondary/45 p-7 md:p-12 lg:border-l lg:border-t-0"><p className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">Relevant Areas</p><ul className="mt-7 grid gap-4 sm:grid-cols-2">{portfolio.education.relevantAreas.map((area) => <li key={area} className="flex items-center gap-3 text-sm text-foreground"><Check className="size-4 text-primary" />{area}</li>)}</ul></div>
        </div>
      </Reveal>
    </section>
  );
}

function RnDInterest() {
  const map = ["Backend Architecture", "Reusable APIs", "Database Systems", "Authentication & Access Control", "Institutional Applications"];
  return (
    <section id="rnd" className="scroll-mt-20 border-y border-border bg-secondary/45 px-5 py-24 md:px-8 md:py-32">
      <Reveal className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div><SectionHeading index="06" title="Why R&D at IIIT Sri City?" /><p className="text-lg leading-8 text-foreground">I'm interested in contributing to software that is used beyond a classroom setting. The R&D digital ecosystem presents an opportunity to work on problems involving backend architecture, APIs, databases, access control, repositories, project management, and institutional workflows.</p><p className="mt-6 text-base leading-8 text-muted-foreground">The combination of technical development and real institutional requirements particularly interests me because it requires software to be structured, maintainable, secure, and useful to different types of users.</p></div>
        <div className="border border-border bg-card p-6 shadow-technical md:p-8"><div className="mb-7 flex items-center gap-3 border-b border-border pb-5"><Network className="size-5 text-primary" /><h3 className="font-display text-xl font-semibold text-foreground">What interests me</h3></div><div>{map.map((item, index) => <div key={item}><div className="flex items-center gap-4 border border-border bg-background px-4 py-3.5"><span className="font-mono text-[10px] text-primary">0{index + 1}</span><span className="text-sm font-medium text-foreground">{item}</span></div>{index < map.length - 1 ? <div className="ml-7 h-5 w-px bg-primary/40" /> : null}</div>)}</div></div>
      </Reveal>
    </section>
  );
}

function CurrentFocus() {
  return (
    <section className="px-5 py-24 md:px-8 md:py-32"><Reveal className="mx-auto max-w-7xl"><SectionHeading index="07" title="Currently Exploring" subtitle="Areas where I am actively deepening my understanding through study and hands-on building." /><div className="border-t border-border">{currentFocus.map(([title, text], index) => <article key={title} className="group grid gap-2 border-b border-border py-6 transition-colors md:grid-cols-[5rem_0.7fr_1.3fr] md:items-center md:gap-6 md:py-7"><span className="font-mono text-xs text-primary">0{index + 1}</span><h3 className="font-display text-xl font-semibold text-foreground">{title}</h3><p className="text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div></Reveal></section>
  );
}

function LookingToBuild() {
  return (
    <section className="border-y border-border bg-secondary/45 px-5 py-24 md:px-8 md:py-32"><Reveal className="mx-auto max-w-7xl"><SectionHeading index="08" title="What I'm Looking to Build" subtitle="The kinds of useful, structured systems I would like to contribute to as I grow as a backend developer." /><div className="grid gap-px border border-border bg-border md:grid-cols-3">{buildInterests.map(([title, text, Icon]) => <article key={title} className="bg-card p-7 md:p-9"><Icon className="size-6 text-primary" /><h3 className="mt-10 font-display text-2xl font-semibold text-foreground">{title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{text}</p></article>)}</div></Reveal></section>
  );
}

function ResumeCTA() {
  return <section id="resume" className="scroll-mt-20 px-5 py-16 md:px-8 md:py-24"><Reveal className="mx-auto max-w-7xl border border-primary bg-primary p-8 md:flex md:items-center md:justify-between md:p-12"><div><p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">Resume</p><h2 className="mt-3 font-display text-3xl font-semibold text-primary-foreground md:text-4xl">Want the complete picture?</h2><p className="mt-4 max-w-2xl text-sm leading-6 text-dark-muted">View my resume for my education, technical skills, projects, and experience.</p></div><Button asChild size="lg" variant="secondary" className="mt-7 md:mt-0"><a href={portfolio.resumeUrl} target="_blank" rel="noreferrer"><ArrowDownToLine />Download Resume</a></Button></Reveal></section>;
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 px-5 py-24 md:px-8 md:py-32"><Reveal className="mx-auto max-w-7xl"><div className="max-w-3xl"><SectionHeading index="09" title="Let's Build Something Useful" subtitle="I'm interested in backend engineering, software systems, and opportunities to work on meaningful technical projects." /></div><div className="flex flex-col gap-3 sm:flex-row"><Button asChild size="lg"><a href={`mailto:${portfolio.contactEmail}`}><Mail />Email Me</a></Button><Button asChild size="lg" variant="outline"><a href={portfolio.linkedin} target="_blank" rel="noreferrer"><Linkedin />LinkedIn<ExternalLink /></a></Button><Button asChild size="lg" variant="outline"><a href={portfolio.github} target="_blank" rel="noreferrer"><Github />GitHub<ExternalLink /></a></Button></div><p className="mt-6 text-sm text-muted-foreground">Academic email: <a href={`mailto:${portfolio.email}`} className="text-foreground underline decoration-border underline-offset-4 hover:decoration-primary">{portfolio.email}</a></p></Reveal></section>
  );
}

function Footer() {
  return <footer className="border-t border-border bg-secondary/45 px-5 py-10 md:px-8"><div className="mx-auto max-w-7xl"><div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><p className="font-display text-xl font-semibold text-foreground">{portfolio.shortName}</p><p className="mt-1 text-sm text-muted-foreground">CSE Undergraduate · IIIT Sri City</p></div><nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground" aria-label="Footer navigation"><a href="#about">About</a><a href="#projects">Projects</a><a href={portfolio.resumeUrl} target="_blank" rel="noreferrer">Resume</a><a href={portfolio.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={`mailto:${portfolio.contactEmail}`}>Email</a></nav></div><div className="mt-9 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><p>© 2026 {portfolio.name}</p><p className="font-mono">Designed for clarity. Built with purpose.</p></div></div></footer>;
}

export function PortfolioPage() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: 0.08 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <div className="min-h-screen bg-background"><Navbar /><main><Hero /><About /><Skills /><BackendEngineering /><Projects /><Education /><RnDInterest /><CurrentFocus /><LookingToBuild /><ResumeCTA /><Contact /></main><Footer /></div>;
}