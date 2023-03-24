import { BsLink45Deg, BsGithub } from 'react-icons/bs'
import PropTypes, { string } from 'prop-types'

export default function Project({ project }) {
  return (
    <article className="shadow-[0_2px_6px_rgb(0,0,0,0.2)] rounded-xl bg-white">
      <div className="flex items-center gap-6 py-6 px-8">
        <div
          className={`flex w-[55%] aspect-[16/10] bg-red-900 ${
            project.id % 2 === 0 ? '' : 'order-1'
          }`}
        >
          <img src={project.image} className="m-auto w-full" alt="Project screenshot" />
        </div>
        <div className="flex-1 flex flex-col text-center justify-center">
          <h3 className="uppercase">{project.name}</h3>
          <p>{project.description}</p>
          <ul className="flex justify-center items-start flex-wrap gap-1 mb-5">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="text-gray-900 text-sm p-1 rounded shadow-[0_2px_4px_rgb(0,0,0,0.2)]"
              >
                {tech}
              </li>
            ))}
          </ul>
          <div className="flex gap-2 justify-center">
            <button
              type="button"
              className="border border-violet-900 border-opacity-50 px-4 py-1 rounded hover:bg-violet-900 hover:bg-opacity-10"
            >
              <a className="flex items-center gap-2" href={project.sourceLink}>
                <BsGithub size={22} />
                Github
              </a>
            </button>
            <button
              type="button"
              className="border border-violet-900 border-opacity-50 px-3 py-1 rounded hover:bg-violet-900 hover:bg-opacity-10"
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
