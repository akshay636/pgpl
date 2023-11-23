'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Button from '../Button/Button'
import useIsMobile from '@/hooks/useIsMobile'
import Dropdown from '../Dropdown/Dropdown'

const headerData = [
  'Home',
  'About Us',
  'Departments',
  'Training and Placements',
  'Admissions and Courses',
  'NAAC',
  'Campus Life',
  'News',
  'Contact Us',
]

const Navbar = () => {
  const [showDepartment, setShowDepartment] = useState(false)
  const isMobile = useIsMobile();
  const [showMenu, setShowMenu] = useState(false)
  const handleDepartment = () => {
    setShowDepartment(!showDepartment)
  }
  const hanldeMobileMenu = () => {
    setShowMenu(!showMenu)
  }
  useEffect(()=>{
    setShowMenu(isMobile)
  },[isMobile])

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="flex flex-wrap flex-row justify-between items-center mx-auto max-w-screen p-4">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://www.theskclnct.com/images/skclnct_group_logo.png"
            className="h-8"
            alt="Flowbite Logo"
          />
        </a>
        <Button
          onClick ={hanldeMobileMenu}
          btnType="secondary"
          data-collapse-toggle="mega-menu-full"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </Button>
        <div
          id="mega-menu-full"
          className={`${showMenu?'hidden':'flex'} items-center justify-between font-medium w-full md:flex md:w-auto md:order-1`}
        >
          <ul className={`flex flex-col p-2 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-5 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}>
            {headerData.map((name) => (
              <li key={name} className={`${showMenu?'hidden':'flex'}`}>
                {name === 'Departments' ? (
              <Dropdown name='Departments'/>
                ) : (
                  <Link
                    legacyBehavior
                    href={`/${name.toLowerCase()}`}
                    key={name}
                  >
                    <a
                      className="block py-1 px-1 text-xs text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                      aria-current="page"
                    >
                      {name}
                    </a>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {showDepartment && (
        <div
          id="mega-menu-full-dropdown"
          className="mt-1 border-gray-200  text-xs shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600"
        >
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
            <ul>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Online Stores</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Segmentation</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Marketing CRM</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Online Stores</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Segmentation</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Marketing CRM</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
