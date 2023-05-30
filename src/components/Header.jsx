import { useState, useEffect } from 'react'
import { MdMenu, MdClose, MdLightMode, MdDarkMode } from 'react-icons/md'
import * as Switch from '@radix-ui/react-switch'
import PropTypes from 'prop-types'

const defaultNavigation = [
  { name: 'Home', href: '#home', current: true },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Contact', href: '#contact', current: false }
]

export default function Header({ initialThemeValue }) {
  const [open, setOpen] = useState(false)
  const [isDarkMode, setDarkMode] = useState(initialThemeValue)
  const [navigation, setNavigation] = useState(defaultNavigation)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  function handleToggle() {
    setDarkMode((prev) => !prev)
  }

  console.log(navigation)
  return (
    <header className="bg-neutral-100 dark:bg-neutral-900/80 backdrop-blur-[3px] dark:text-gray-100 fixed w-full z-10">
      <nav className="text-xl shadow-sm dark:shadow-none">
        <div className="max-w-5xl m-auto px-2">
          <div className="flex justify-between h-14 items-center">
            <a className="flex items-center gap-2 font-mono font-bold" href="/">
              <img width="40px" height="auto" src="/logo.png" alt="Bird Logo" />{' '}
              <span className=" mt-1">ORLANDO.DEV</span>
            </a>
            <div className="flex gap-12 items-center">
              <div className="hidden md:flex gap-10">
                <ul className="flex gap-5 items-center">
                  {navigation.map((item) => {
                    return (
                      <li
                        key={item.name}
                        className={`font-mono mt-1 grid place-content-center px-2 py-1 rounded ${
                          item.current ? 'bg-neutral-400/50' : ''
                        }`}
                      >
                        <a
                          className="hover:text-violet-700"
                          href={item.href}
                          onClick={() => {
                            setNavigation((prev) =>
                              prev.map((navLink) =>
                                navLink.href === item.href
                                  ? { ...navLink, current: true }
                                  : { ...navLink, current: false }
                              )
                            )
                          }}
                        >
                          {item.name}
                        </a>
                      </li>
                    )
                  })}
                </ul>
                <div className="flex gap-1 items-center">
                  <Switch.Root
                    onCheckedChange={handleToggle}
                    checked={isDarkMode}
                    className="w-[42px] h-[25px] bg-violet-900/40 rounded-full relative shadow-[0_0_4px_rgb(0,0,0,0.2)] focus:shadow-[0px_1px_2px_rgb(0,0,0,1)] dark:focus:shadow-gray-600 data-[state=checked]:bg-gray-800 outline-none"
                  >
                    <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_1px_1px] transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                  </Switch.Root>
                  {isDarkMode ? <MdDarkMode /> : <MdLightMode />}
                </div>
              </div>
            </div>
            <button
              type="button"
              className="md:hidden"
              onClick={() => setOpen((prevState) => !prevState)}
            >
              <span className="sr-only">Open navigation menu</span>
              {open ? (
                <MdClose aria-hidden="true" size={36} />
              ) : (
                <MdMenu aria-hidden="true" size={36} />
              )}
            </button>
          </div>
          {open && (
            <div className="flex flex-col items-center">
              <ul className="flex flex-col items-center gap-4 pb-4 md:hidden">
                {navigation.map((item) => {
                  return (
                    <li key={item.name} className="flex hover:text-violet-900">
                      <a href={item.href}>{item.name}</a>
                    </li>
                  )
                })}
              </ul>
              <div className="flex gap-1 items-center mb-5 cursor-pointer">
                <Switch.Root
                  onCheckedChange={handleToggle}
                  checked={isDarkMode}
                  className="w-[42px] h-[25px] bg-violet-900/40 rounded-full relative shadow-[0_0_4px_rgb(0,0,0,0.2)] focus:shadow-[0_0_0_1px_rgb(0,0,0,0.5] data-[state=checked]:bg-gray-800 outline-none "
                >
                  <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_1px_1px] transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px] " />
                </Switch.Root>
                {isDarkMode ? <MdDarkMode /> : <MdLightMode />}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  initialThemeValue: PropTypes.bool.isRequired
}
