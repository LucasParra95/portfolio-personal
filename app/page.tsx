import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TechnologiesSection } from "@/components/technologies-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { SkillsSection } from "@/components/skills-section"

export default function PortfolioPage() {
  return (
    <div className="relative">
      <Navbar />
      <main className="scroll-smooth">
        <HeroSection />
        <AboutSection />
        <TechnologiesSection/>
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}
