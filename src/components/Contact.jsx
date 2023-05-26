import Container from './Container.jsx'

export default function Contact() {
  return (
    <section id="contact" className="bg-violet-800 dark:bg-violet-900/50">
      <Container className="pt-16 pb-8 text-gray-200 text-center">
        <h2 className="uppercase text-amber-500 mb-4">CONTACT</h2>
        <p className="mb-6 text-lg font-bold text-gray-200  hover:text-gray-100">
          If you have an application you are interested in developing, a feature that you need built
          or a project that needs coding. I’d love to assist you further.
        </p>

        <form className="mb-6" name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <div className="grid gap-3 max-w-xl m-auto px-5 text-black">
            <input
              className="px-3 py-2 rounded-lg border border-violet-900 outline-violet-500"
              type="text"
              name="name"
              id="user_name"
              maxLength="30"
              placeholder="Name"
              required
            />
            <input
              className="px-3 py-2 rounded-lg border border-gray-500 outline-violet-500"
              type="email"
              name="email"
              id="user_email"
              placeholder="Email"
              required
            />
            <textarea
              className="min-h-[2.7rem] mb-5 px-3 py-2 rounded-lg border border-gray-500 outline-violet-500"
              name="message"
              rows="4"
              maxLength="500"
              id="user_message"
              placeholder="Write your message here"
              required
            ></textarea>
            <button
              className="mx-auto grid place-content-center px-5 py-3 font-bold text-gray-200 rounded-lg bg-green-800 outline outline-0 hover:outline-1"
              type="submit"
            >
              Get In Touch
            </button>
          </div>
        </form>
        <p className="text-gray-200 font-bold text-base">
          You can also contact me at{': '}
          <a
            className="text-amber-500 underline underline-offset-4"
            href="mailto:orlandodiazconde@gmail.com"
          >
            orlandodiazconde@gmail.com
          </a>
        </p>
      </Container>
    </section>
  )
}
