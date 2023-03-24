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
      <nav className="text-xl shadow text-gray-900">
        <div className="max-w-5xl m-auto px-2">
          <div className="flex justify-between h-14 items-center">
            <a className="flex items-center gap-2" href="/">
              <MdComputer size={24} className="hover:text-violet-900 hover:text-opacity-70" />{' '}
              Orlando Diaz
            </a>
            <ul className="hidden sm:flex gap-8">
              {navigation.map((item) => {
                return (
                  <li key={item.name}>
                    <a
                      className="hover:text-violet-900"
                      href={item.href}
                      aria-current={item.current ? 'section' : undefined}
                    >
                      {item.name}
                    </a>
                  </li>
                )
              })}
            </ul>
            <button
              type="button"
              className="sm:hidden"
              onClick={() => setOpen((prevState) => !prevState)}
            >
              <span className="sr-only">Open navigation menu</span>
              {open ? (
                <MdClose aria-hidden="true" size={24} />
              ) : (
                <MdMenu aria-hidden="true" size={24} />
              )}
            </button>
          </div>
          {open && (
            <ul className="flex flex-col items-center gap-4 sm:hidden">
              {navigation.map((item) => {
                return (
                  <li key={item.name} className="">
                    <a href={item.href}>{item.name}</a>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </nav>
    </header>
  )
}
