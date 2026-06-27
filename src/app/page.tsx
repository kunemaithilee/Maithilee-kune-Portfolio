import { HeroSection } from "@/components/sections/hero"
import { StorySection } from "@/components/sections/story"
import { SkillsSection } from "@/components/sections/skills"
import { ProjectsSection } from "@/components/sections/projects"
import { ExperienceSection } from "@/components/sections/experience"
import { EducationSection } from "@/components/sections/education"
import { CertificationsSection } from "@/components/sections/certifications"
import { WhyBuildSection } from "@/components/sections/why-build"
import { ContactSection } from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <WhyBuildSection />
      <ContactSection />
    </>
  )
}
