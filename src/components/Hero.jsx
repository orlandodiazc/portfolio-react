import Container from './Container.jsx'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

export default function Hero() {
  return (
    <section className="h-[calc(100vh-3.5rem)] min-h-[24rem] bg-[url('/hero-bg.svg')]">
      <Container className="h-full flex flex-col justify-center text-gray-900 ">
        <div className="flex flex-col">
          <h1>Hi, I am Orlando</h1>
          <h2 className="text-4xl mb-4">Front End Developer</h2>
          <p className="max-w-[64ch">
            I can help you build a product, feature, or website. Please look through some of my work
            and experience. If you like what you see and have a project you need to be coded, don't
            hesitate to contact me.
          </p>
          <ul className="flex gap-3 items-center mb-12">
            <li>
              <a href="https://www.linkedin.com/in/orlando-diaz-conde">
                <BsLinkedin size={24} className="hover:text-violet-900 hover:text-opacity-70" />
              </a>
            </li>
            <li>
              <a href="https://github.com/orlandodiazc">
                <BsGithub size={24} className="hover:text-violet-900 hover:text-opacity-70" />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}
