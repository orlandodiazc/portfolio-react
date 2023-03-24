import Container from './Container.jsx'

export default function Contact() {
  return (
    <section className="bg-violet-800">
      <Container className="py-16 text-gray-200">
        <h2 className="uppercase text-amber-400 ">CONTACT</h2>
        <p className="mb-6 font-bold text-gray-200 text-lg">
          If you have an application you are interested in developing, a feature that you need built
          or a project that needs coding. I’d love to assist you further.
        </p>

        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <div className="grid gap-3 max-w-xl m-auto px-5">
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
              name="msg"
              rows="4"
              maxLength="500"
              id="user_message"
              placeholder="Write your message here"
              required
            ></textarea>
            <button
              className="m-auto px-4 py-2 font-bold  rounded-lg bg-amber-400 outline outline-2 outline-amber-400  hover:bg-transparent"
              type="submit"
            >
              Get In Touch
            </button>
          </div>
        </form>
      </Container>
    </section>
  )
}
