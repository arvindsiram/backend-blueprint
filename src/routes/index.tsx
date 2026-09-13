import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Siram Chiru Arvind — CSE Undergraduate & Backend Developer" },
      { name: "description", content: "Personal portfolio of Siram Chiru Arvind, a CSE undergraduate at IIIT Sri City interested in Java, Spring Boot, backend engineering, APIs, databases, and software systems." },
      { property: "og:title", content: "Siram Chiru Arvind — CSE Undergraduate & Backend Developer" },
      { property: "og:description", content: "Portfolio of an IIIT Sri City CSE undergraduate focused on Java, Spring Boot, APIs, databases, and practical backend systems." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: PortfolioPage,
});
