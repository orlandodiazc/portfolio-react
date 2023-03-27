import { useEffect } from 'react'

import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Portfolio from './components/Portfolio.jsx'
import TechStack from './components/TechStack.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  let darkModeStatus = null

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkModeStatus = true
  } else {
    darkModeStatus = false
  }

  return (
    <div className="bg-white dark:bg-neutral-900 dark:text-white">
      <Header initialThemeValue={darkModeStatus} />
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
