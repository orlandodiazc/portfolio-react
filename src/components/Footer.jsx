import { BsGithub, BsLinkedin } from 'react-icons/bs'
import Container from './Container.jsx'

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-violet-900/20 py-6">
      <Container className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-between">
        <p className="mb-0 mt-[5px] tracking-wide text-center text-gray-200 hover:text-white">
          Built using React, TailwindCSS and RadixUI, 2023.
        </p>
        <ul className="flex gap-3 items-center">
          <li>
            <a href="https://www.linkedin.com/in/orlando-diaz-conde">
              <BsLinkedin size={24} className="text-white hover:text-amber-500" />
            </a>
          </li>
          <li>
            <a href="https://github.com/orlandodiazc">
              <BsGithub size={24} className="text-white hover:text-amber-500" />
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  )
}
