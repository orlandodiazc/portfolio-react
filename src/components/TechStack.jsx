import Container from './Container.jsx'
import * as Tooltip from '@radix-ui/react-tooltip'

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
    <section className="bg-neutral-100 dark:bg-neutral-900">
      <Container className="pb-16 pt-8">
        <h2 className="mb-5 uppercase dark:text-violet-500">TECH STACK</h2>
        <div className="flex flex-col md:flex-row gap-3 items-center mb-8">
          <h3 className="text-center text-gray-800 dark:text-gray-100 border-b-2 py-2 md:border-b-0 md:border-r-2 border-gray-900 dark:border-gray-200 md:mr-3 md:py-1 w-[15ch]">
            Front-end
          </h3>
          <ul className="flex gap-6 ml-3 justify-center md:justify-start items-center flex-wrap">
            <Tooltip.Provider delayDuration={500}>
              {MOCK_TECHS.map((tech) => (
                <Tooltip.Root key={tech.name}>
                  <Tooltip.Trigger>
                    <li className="h-12 w-12 flex items-center justify-center">
                      <img className="grow" src={tech.imgLink} alt={tech.name} />
                    </li>
                  </Tooltip.Trigger>
                  <Tooltip.Content className="bg-white text-gray-700 px-2 py-1 rounded shadow-[0_0px_4px_rgb(0,0,0,0.2)]">
                    {tech.name}
                    <Tooltip.Arrow fill="white" className="mb-1" />
                  </Tooltip.Content>
                </Tooltip.Root>
              ))}
            </Tooltip.Provider>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
          <h3 className="text-center text-gray-800 dark:text-gray-100  border-b-2 py-2 md:border-b-0 md:border-r-2 border-gray-900 dark:border-gray-200 md:mr-3 md:py-1 w-[15ch]">
            Tools
          </h3>
          <ul className="flex flex-wrap gap-3 md:gap-6 md:ml-6 items-center justify-center tracking-wide text-gray-600 dark:text-gray-300">
            <li>Git</li>
            <li>Responsive Development</li>
            <li>Gitflow</li>
            <li>GitHub</li>
            <li>TDD</li>
          </ul>
        </div>
      </Container>
    </section>
  )
}

// transform hover:scale-125 ease-in-out duration-150
