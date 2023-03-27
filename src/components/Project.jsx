import { BsLink45Deg, BsGithub } from 'react-icons/bs'
import PropTypes, { string } from 'prop-types'

export default function Project({ project }) {
  return (
    <article className="shadow-[0_2px_6px_rgb(0,0,0,0.2)] rounded-xl bg-white dark:bg-neutral-800 dark:text-white-100">
      <div className="flex flex-col items-center sm:flex-row gap-6 py-4 px-3 sm:px-6 sm:py-5">
        <div
          className={`flex aspect-[16/10] sm:w-[55%] overflow-hidden rounded-xl shadow-[0_1px_6px_rgb(0,0,0,0.2)] ${
            project.id % 2 === 0 ? '' : 'sm:order-1'
          }`}
        >
          <img
            src={project.image}
            className="m-auto w-full"
            alt="Project screenshot"
            width="100%"
            height="auto"
          />
        </div>
        <div className="flex-1 flex flex-col text-center justify-center">
          <h3 className="uppercase dark:text-white">{project.name}</h3>
          <p className="dark:text-gray-300">{project.description}</p>
          <ul className="flex justify-center items-start flex-wrap gap-1 mb-5">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="text-gray-900 dark:text-white text-sm px-2 py-1 rounded shadow-[0_2px_4px_rgb(0,0,0,0.2)]"
              >
                {tech}
              </li>
            ))}
          </ul>
          <div className="flex gap-2 justify-center">
            <button
              type="button"
              className="border border-violet-900 dark:border-violet-800 border-opacity-50 px-4 py-1 rounded hover:bg-violet-900 hover:bg-opacity-10"
            >
              <a className="flex items-center gap-2" href={project.sourceLink}>
                <BsGithub size={22} />
                Github
              </a>
            </button>
            <button
              type="button"
              className="border border-violet-900/50 dark:border-violet-800 px-3 py-1 rounded hover:bg-violet-900 hover:bg-opacity-10"
            >
              <a className="flex items-center gap-2" href={project.liveLink}>
                <BsLink45Deg size={22} />
                See Live
              </a>
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(string),
    sourceLink: PropTypes.string.isRequired,
    liveLink: PropTypes.string.isRequired
  })
}
