/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { IoIosMoon, IoIosSunny } from 'react-icons/io'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { menus } from '@/constant/manus'
import { useTheme } from '@/contexts/themeContext'
import { HiOutlineMenuAlt4, HiOutlineX } from 'react-icons/hi'

const Navbar = () => {
  const [blurNavbar, setBlurNavbar] = useState<boolean>(false)
  const { darkMode, toggleTheme } = useTheme()
  const [openNavbar, setOpenNavbar] = useState<boolean>(false)

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
    <>
      <nav className="flex items-center justify-between lg:justify-center gap-x-2 fixed top-0 w-screen z-50 px-4 lg:px-0 pt-4 lg:pt-5">
        <div
          className={`flex items-center justify-between lg:justify-normal w-full lg:w-auto ${
            blurNavbar
              ? 'bg-white/20 dark:bg-black/20 backdrop-blur-2xl'
              : 'bg-white dark:bg-[#2c2e30]'
          } border border-solid border-black/20 p-5 rounded-full lg:rounded-r-3xl lg:rounded-l-full`}
        >
          <Link href="/" className="flex items-center gap-x-3">
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
              Trigonometri
            </h1>
          </Link>
          <button
            className="block lg:hidden"
            type="button"
            onClick={() => setOpenNavbar((e) => !e)}
          >
            {!darkMode ? (
              openNavbar ? (
                <HiOutlineX size={28} />
              ) : (
                <HiOutlineMenuAlt4 size={28} />
              )
            ) : openNavbar ? (
              <HiOutlineX size={28} color="#F5F5F5" />
            ) : (
              <HiOutlineMenuAlt4 size={28} color="#F5F5F5" />
            )}
          </button>
        </div>

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
      <div
        className={`lg:hidden fixed top-[106px] transition-all duration-700 ease-in-out z-50 w-full ${
          openNavbar ? 'right-0' : '-right-full'
        }`}
      >
        <ul
          className={`flex flex-col items-end justify-center gap-y-6 w-auto mx-4 ${
            blurNavbar
              ? 'bg-white/20 dark:bg-black/20 backdrop-blur-2xl'
              : 'bg-white dark:bg-[#2c2e30]'
          } border border-solid border-black/20 py-[23px] px-8 rounded-lg`}
        >
          {menus.map(({ name, link }, key) => (
            <li key={key}>
              <Link
                href={link}
                onClick={() => setOpenNavbar(false)}
                className="font-medium dark:text-[#F5F5F5]"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Navbar
