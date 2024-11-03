/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { IoIosMoon } from 'react-icons/io'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { menus } from '@/constant/manus'

const Navbar = () => {
  const [blurNavbar, setBlurNavbar] = useState<boolean>(false)

  // Fungsi untuk menangani perubahan scroll
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
    <nav className="flex items-center justify-center gap-x-2 fixed top-0 right-0 left-0 z-50 pt-5">
      <div
        className={`flex items-center gap-x-3 ${
          blurNavbar ? 'bg-white/20 backdrop-blur-2xl' : 'bg-white'
        } border border-solid border-black/20 p-5 rounded-r-3xl rounded-l-full`}
      >
        <Image
          src="/logo/android-chrome-512x512.png"
          width={30}
          height={30}
          alt="Logo"
        />
        <h1 className="text-base font-medium">Trigonometry</h1>
      </div>

      <ul
        className={`flex items-center justify-center gap-x-9 w-auto ${
          blurNavbar ? 'bg-white/20 backdrop-blur-2xl' : 'bg-white'
        } border border-solid border-black/20 py-[23px] px-8 rounded-lg`}
      >
        {menus.map(({ name, link }, key) => (
          <li key={key}>
            <Link href={link} className="font-medium">
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <div
        className={`flex items-center gap-x-3 ${
          blurNavbar ? 'bg-white/20 backdrop-blur-2xl' : 'bg-white'
        } border border-solid border-black/20 p-5 rounded-l-3xl rounded-r-full`}
      >
        <button type="button">
          <IoIosMoon size={28} />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
