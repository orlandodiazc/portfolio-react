import Container from './Container'
import { useState } from 'react'
import { MdMenu, MdClose, MdComputer } from 'react-icons/md'

const navigation = [
  { name: 'Home', href: '#home', current: true },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Contact', href: '#contact', current: false }
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header>
      <nav className="font-sans font-medium text-md shadow">
        <div className="max-w-6xl m-auto">
          <div className="flex justify-between h-14 items-center">
            <a className="flex items-center gap-2" href="/">
              <MdComputer size={24} className="text-blue-500" /> Orlando Diaz
            </a>
            <ul className="hidden sm:flex gap-6">
              {navigation.map((item) => {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'section' : undefined}
                  >
                    {item.name}
                  </a>
                )
              })}
            </ul>
            <button
              type="button"
              className="sm:hidden"
              onClick={() => setOpen((prevState) => !prevState)}
            >
              <span className="sr-only">Open navigation menu</span>
              {open ? <MdClose aria-hidden="true" /> : <MdMenu aria-hidden="true" />}
            </button>
          </div>
          {open && (
            <ul className="flex flex-col items-center gap-2 sm:hidden">
              {navigation.map((item) => {
                return (
                  <a key={item.name} href={item.href}>
                    {item.name}
                  </a>
                )
              })}
            </ul>
          )}
        </div>
      </nav>
    </header>
  )
}
