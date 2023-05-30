import ContactForm from './ContactForm.jsx'
import Container from './Container.jsx'

export default function Contact() {
  return (
    <section id="contact" className="bg-violet-800 dark:bg-violet-900/50">
      <Container className="pt-16 pb-8 text-gray-100 text-center">
        <h2 className="uppercase text-amber-500 mb-4">CONTACT</h2>
        <p className="mb-6 text-lg font-bold text-gray-200  hover:text-gray-100 max-w-3xl mx-auto">
          If you have an application you are interested in developing, a feature that you need built
          or a project that needs coding. I’d love to assist you further.
        </p>
        <ContactForm />
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
