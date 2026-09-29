import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="Game Project: Princess Academy"
          description="My OOP project, rebuilt from a plain HTML page."
          tech="Java . OOP"
          link="https://github.com/neilcenpedrosa/GameProj_PrincessAcademy"
        />
        <ProjectCard
          year="2026"
          title="Study Spot"
          description="A web app where you can find study spots in your area."
          tech="SQL . PHP"
          link="https://github.com/neilcenpedrosa"
        />
        <ProjectCard
          year="2026"
          title="Tap & Eat"
          description="An app where you can browse some resturants."
          tech="Kotlin . Android SDK"
          link="https://github.com/neilcenpedrosa"
        />
        <ProjectCard
          year="2026"
          title="Disaster Alert System"
          description="A web app that can send alerts to the public during disasters."
          tech="Figma "
          link="https://github.com/neilcenpedrosa"
        />
      </div>
    </section>
  )
}