import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Portfolio from './components/Portfolio.jsx'
import TechStack from './components/TechStack.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="bg-white dark:bg-neutral-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
