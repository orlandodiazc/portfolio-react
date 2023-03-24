import Container from './Container.jsx'
import Project from './Project.jsx'

const MOCK_PROJECTS = [
  {
    id: 0,
    name: 'Space Travelers',
    image: '/portfolio/spacetravelers.png',
    description: 'SPA that shows up-to-date data on Space-X missions and rockets.',
    technologies: ['React', 'Redux', 'Redux Toolkit', 'Bootstrap'],
    liveLink: 'https://lighthearted-sfogliatella-77e09a.netlify.app/',
    sourceLink: 'https://github.com/orlandodiazc/event-reservations'
  },
  {
    id: 1,
    name: 'Mathematicians',
    image: '/portfolio/mathematicians.png',
    description:
      'Single Page Application that allows the user to make quick calculations, it also has welcome and quote pages',
    technologies: ['React', 'Jest', 'React Testing Library', 'Bootstrap'],
    liveLink: 'https://effulgent-douhua-34f1cc.netlify.app/',
    sourceLink: 'https://github.com/orlandodiazc/mathematicians'
  },
  {
    id: 2,
    name: 'Todo List',
    image: '/portfolio/todolist.png',
    description:
      'To do list is JavaScript project that allows you to add, delete and edit your daily tasks.',
    technologies: ['Javascript', 'CSS', 'HTML5', 'Webpack'],
    liveLink: 'https://stunning-bonbon-dbeffd.netlify.app/',
    sourceLink: 'https://github.com/orlandodiazc/to-do-list'
  }
]

export default function Portfolio() {
  return (
    <section className="bg-neutral-100">
      <Container className="py-16">
        <h2 className="uppercase">PORTFOLIO</h2>
        <p className="mb-6 font-bold text-xl">Each project is a unique piece of development.</p>
        <div className="flex flex-col gap-16">
          {MOCK_PROJECTS.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  )
}
