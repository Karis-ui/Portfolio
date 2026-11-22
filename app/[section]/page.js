import { notFound } from "next/navigation";
import Portfolio from "@/components/Portfolio";

const sections = {
  security: "Security",
  lab: "Live Lab",
  automation: "Automation",
  engineering: "Engineering",
  projects: "Projects",
  certifications: "Credentials",
  trends: "Trends",
  hackathons: "Hackathons",
  about: "About",
  contact: "Contact",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(sections).map((section) => ({ section }));
}

export async function generateMetadata({ params }) {
  const { section } = await params;
  const title = sections[section];

  if (!title) return {};

  return {
    title: `${title} | Charles Macharia Kariuki`,
    description: `${title} section of Charles Macharia Kariuki's portfolio.`,
  };
}

export default async function PortfolioSectionPage({ params }) {
  const { section } = await params;

  if (!sections[section]) notFound();

  return <Portfolio page={section} />;
}
