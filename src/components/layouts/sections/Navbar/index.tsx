/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { IoIosMoon, IoIosSunny } from 'react-icons/io'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { menus } from '@/constant/manus'
import { useTheme } from '@/contexts/themeContext'
// import { HiOutlineMenuAlt4 } from 'react-icons/fi'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'

const Navbar = () => {
  const [blurNavbar, setBlurNavbar] = useState<boolean>(false)
  const { darkMode, toggleTheme } = useTheme()

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setBlurNavbar(true)
    } else {
      setBlurNavbar(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className="flex items-center justify-between lg:justify-center gap-x-2 fixed top-0 right-0 left-0 z-50 px-4 lg:px-0 pt-4 lg:pt-5">
      <a
        href="#hero"
        className={`flex items-center justify-between lg:justify-normal w-full lg:w-auto ${
          blurNavbar
            ? 'bg-white/20 dark:bg-black/20 backdrop-blur-2xl'
            : 'bg-white dark:bg-[#2c2e30]'
        } border border-solid border-black/20 p-5 rounded-full lg:rounded-r-3xl lg:rounded-l-full`}
      >
        <div className="flex items-center gap-x-3">
          {darkMode ? (
            <Image
              src="/logo/main-logo-dark.png"
              width={30}
              height={30}
              alt="Logo"
            />
          ) : (
            <Image
              src="/logo/main-logo-light.png"
              width={30}
              height={30}
              alt="Logo"
            />
          )}
          <h1 className="text-base font-medium dark:text-[#F5F5F5]">
            Trigonometry
          </h1>
        </div>
        <button className="block lg:hidden" type="button">
          {!darkMode ? (
            <HiOutlineMenuAlt4 size={28} />
          ) : (
            <HiOutlineMenuAlt4 size={28} color="#F5F5F5" />
          )}
        </button>
      </a>

      <ul
        className={`hidden lg:flex items-center justify-center gap-x-9 w-auto ${
          blurNavbar
            ? 'bg-white/20 dark:bg-black/20 backdrop-blur-2xl'
            : 'bg-white dark:bg-[#2c2e30]'
        } border border-solid border-black/20 py-[23px] px-8 rounded-lg`}
      >
        {menus.map(({ name, link }, key) => (
          <li key={key}>
            <Link href={link} className="font-medium dark:text-[#F5F5F5]">
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <div
        className={`hidden lg:flex items-center gap-x-3 ${
          blurNavbar
            ? 'bg-white/20 dark:bg-black/20 backdrop-blur-2xl'
            : 'bg-white dark:bg-[#2c2e30]'
        } border border-solid border-black/20 p-5 rounded-l-3xl rounded-r-full`}
      >
        <button type="button" onClick={toggleTheme}>
          {!darkMode ? (
            <IoIosMoon size={28} />
          ) : (
            <IoIosSunny size={28} color="#F5F5F5" />
          )}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
