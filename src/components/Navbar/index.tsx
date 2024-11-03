/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { IoIosMoon } from 'react-icons/io'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

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
    <nav className="flex items-center justify-center fixed top-0 right-0 left-0">
      <div className="grid grid-cols-3 gap-x-3 mt-5 w-full">
        <div className="flex items-center justify-end">
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
        </div>
        <div
          className={`flex items-center justify-center w-full ${
            blurNavbar ? 'bg-white/20 backdrop-blur-2xl' : 'bg-white'
          } border border-solid border-black/20 p-5 rounded-lg`}
        >
          <ul className="flex items-center justify-center gap-x-9">
            <li>
              <Link href="#" className="font-medium">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="font-medium">
                Definition
              </Link>
            </li>
            <li>
              <Link href="#" className="font-medium">
                Formula
              </Link>
            </li>
            <li>
              <Link href="#" className="font-medium">
                Example
              </Link>
            </li>
            <li>
              <Link href="#" className="font-medium">
                Calculator
              </Link>
            </li>
            <li>
              <Link href="#" className="font-medium">
                Members
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-start">
          <div
            className={`flex items-center gap-x-3 ${
              blurNavbar ? 'bg-white/20 backdrop-blur-2xl' : 'bg-white'
            } border border-solid border-black/20 p-5 rounded-l-3xl rounded-r-full`}
          >
            <button type="button">
              <IoIosMoon size={28} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
