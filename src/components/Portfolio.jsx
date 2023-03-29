import Container from './Container.jsx'
import Project from './Project.jsx'

const MOCK_PROJECTS = [
  {
    id: 0,
    name: 'Air-Pollution-Stats',
    image: '/portfolio/air-pollution.png',
    description: 'Weather app where you can browse air pollution statistics for any location.',
    technologies: ['React', 'Redux', 'TailwindCSS'],
    liveLink: 'https://gleeful-licorice-f5bb44.netlify.app/',
    sourceLink: 'https://github.com/orlandodiazc/air-pollution-stats'
  },
  {
    id: 1,
    name: 'Space-Travelers',
    image: '/portfolio/space-travelers.png',
    description:
      'SPA that allows you to browse upcoming SpaceX missions, select your preferred one, and reserve your spot with just a few clicks.',
    technologies: ['React', 'Jest', 'React Testing Library', 'Bootstrap'],
    liveLink: 'https://lighthearted-sfogliatella-77e09a.netlify.app/',
    sourceLink: 'https://github.com/orlandodiazc/event-reversations'
  },
  {
    id: 2,
    name: 'Mathematicians',
    image: '/portfolio/mathematicians.png',
    description:
      'Single Page Application that allows the user to make quick calculations, it also has welcome and quote pages.',
    technologies: ['React', 'Jest', 'Bootstrap', 'React Testing Library'],
    liveLink: 'https://effulgent-douhua-34f1cc.netlify.app/',
    sourceLink: 'https://github.com/orlandodiazc/mathematicians'
  }
]

export default function Portfolio() {
  return (
    <section id="projects" className="bg-neutral-100 dark:bg-neutral-900 dark:text-gray-100">
      <Container className="py-16">
        <h2 className="uppercase dark:text-violet-500">PORTFOLIO</h2>
        <p className="mb-6 font-bold text-lg font-mono dark:text-gray-100">
          Each project is a unique piece of development 📖
        </p>
        <div className="flex flex-col gap-12 sm:gap-16">
          {MOCK_PROJECTS.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  )
}
