import Container from './Container.jsx'

const MOCK_TECHS = [
  { name: 'JavaScript', imgLink: '/tech-logos/javascript.svg' },
  { name: 'React', imgLink: '/tech-logos/react.svg' },
  { name: 'Redux', imgLink: '/tech-logos/redux.png' },
  { name: 'HTML5', imgLink: '/tech-logos/html5.svg' },
  { name: 'Jest', imgLink: '/tech-logos/jest.svg' },
  { name: 'React Testing Library', imgLink: '/tech-logos/testing-library.svg' },
  { name: 'CSS3', imgLink: '/tech-logos/css3.svg' },
  { name: 'TailwindCSS', imgLink: '/tech-logos/tailwind.svg' },
  { name: 'Bootstrap', imgLink: '/tech-logos/bootstrap.svg' }
]

export default function TechStack() {
  return (
    <section className="bg-neutral-100">
      <Container className="py-16">
        <h2 className="mb-5 uppercase">TECH STACK</h2>
        <div className="flex gap-3 items-center mb-8">
          <h3 className="text-center text-gray-800 border-r-2 border-gray-900 mr-3 py-1 w-[15ch]">
            Front-end
          </h3>
          <ul className="flex gap-6 ml-3 items-center flex-wrap">
            {MOCK_TECHS.map((tech) => (
              <li className="h-12 w-12 flex items-center justify-center">
                <img className="grow" title={tech.name} src={tech.imgLink} alt={tech.name} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex">
          <h3 className="text-center text-gray-800 border-r-2 border-gray-900 mr-3 py-1 w-[15ch]">
            Tools
          </h3>
          <ul className="flex gap-6 ml-6 items-center tracking-wide text-gray-600">
            <li>Git</li>
            <li>Gitflow</li>
            <li>GitHub</li>
            <li>TDD</li>
            <li>Responsive Development</li>
          </ul>
        </div>
      </Container>
    </section>
  )
}
