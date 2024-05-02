import Image from "next/image";
import ProjectCard from "@/components/ProjectCard"

export default function ProjectsPage() {
    const projects = [
        {name: 'D&D Spell Search', link: 'https://dndspellsearch.bigtomcodes.com', description: 'Built using React, HTML and CSS, this app pulls from an open source JSON API to provide a searchable, filterable game aid for the popular RPG, Dungeons & Dragons.', imgLink: 'dndspellsearch.png', videoLink: './public/dndspellsearch.mp4'},
        {name: 'BigTomPaints', link: 'https://bigtompaints.bigtomcodes.com', description: 'Built using Next.js, React, Tailwind.css, Zustand and integrated with Stripe, here is an ecommerce app to advertise and sell my services as a commission painter for tabletop wargame minis.', imgLink: 'bigtompaints.png', videoLink: './public/bigtompaints.mp4'}
    ]
  return (
    <main className="flex flex-col flex-1 mx-auto max-w-[900px] w-full bg-slate-950">
      {projects.map((project, projectIndex) => {
        return (
            <ProjectCard key={projectIndex} project={project} index={projectIndex} />
        )
      })}
    </main>
  );
}