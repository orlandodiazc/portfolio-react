import Container from './Container.jsx'
import { BsGithub } from 'react-icons/bs'
import { BiMailSend } from 'react-icons/bi'

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen min-h-[24rem] bg-[url('/hero-bg.svg')] dark:bg-none relative overflow-hidden pt-14"
    >
      <div className="blur-6xl w-3/4 aspect-square -translate-y-1/2 opacity-20 hidden dark:block absolute  bg-violet-900  rounded-full"></div>
      <div className="blur-6xl w-96 aspect-square right-0 bottom-0 translate-y-1/2 translate-x-1/2 opacity-70 hidden dark:block absolute  bg-green-900  rounded-full"></div>
      {/* <div className="hidden dark:block absolute blur-3xl right-0 top-0 opacity-20 bg-violet-900 w-80 h-80 rounded-3xl"></div>
      <div className="hidden dark:block absolute blur-3xl right-0 bottom-0 opacity-20 bg-violet-900 w-96 h-96 rounded-3xl"></div>
      <div className="hidden dark:block absolute blur-3xl inset-52 opacity-25 bg-violet-900 h-100 aspect-square rounded-3xl"></div> */}
      <Container className="h-full flex flex-col justify-center text-gray-900 dark:text-gray-100 ">
        <div className="flex flex-col text-center items-center sm:items-start sm:text-left">
          <div>
            <h1 className="text-5xl sm:text-6xl leading-tight">
              Hey There! <br />
              I'm Orlando Diaz
            </h1>
            <h2 className="text-2xl font-sans  text-violet-900 dark:text-violet-500 sm:text-4xl mb-4 tracking-normal">
              Front End Developer
            </h2>
            <p className="max-w-[64ch] dark:text-gray-200 mb-2">
              I can help you build a product, feature, or website. Please look through some of my
              work and experience. If you like what you see and have a project you need to be coded,
              don't hesitate to contact me.
            </p>
          </div>
          <ul className="flex gap-3 items-center">
            <li>
              <a href="https://github.com/orlandodiazc">
                <BsGithub size={24} className="hover:text-violet-700 dark:hover:text-violet-900" />
              </a>
            </li>
            <li>
              <a href="mailto:orlandodiazconde@gmail.com">
                <BiMailSend
                  size={26}
                  className="hover:text-violet-700 dark:hover:text-violet-900 mt-[3px]"
                />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}
