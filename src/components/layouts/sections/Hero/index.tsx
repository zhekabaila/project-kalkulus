/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useTheme } from '@/contexts/themeContext'
import Image from 'next/image'

import Link from 'next/link'
import { IoArrowDownCircleOutline } from 'react-icons/io5'

const Hero = () => {
  const { darkMode } = useTheme()
  return (
    <section
      className="relative flex items-center justify-center h-screen px-4 pt-32 pb-20 lg:p-36"
      id="hero"
    >
      <div className="relative size-full">
        <div className="absolute inset-0 size-full">
          {darkMode ? (
            <Image
              src="/images/wave-dark.svg"
              width={1000}
              height={1000}
              alt="wave"
              className="size-full"
            />
          ) : (
            <Image
              src="/images/wave.svg"
              width={1000}
              height={1000}
              alt="wave"
              className="size-full"
            />
          )}
        </div>
        <div className="flex flex-col items-center justify-center bg-white/10 dark:bg-gray-500/10 backdrop-blur-lg rounded-2xl size-full border-2 border-gray-500/20 p-4 lg:p-0">
          <h1 className="text-center font-medium text-5xl lg:text-7xl leading-tight dark:text-sun">
            Selamat Datang Di <br />
            <span className="text-blue-500 dark:text-jeruk">Website</span> Kami!
          </h1>
          <p className="text-sm lg:text-base text-center mt-4 lg:mt-8 dark:text-sun max-w-5xl mx-auto">
            Panduan lengkap mengenai fungsi trigonometri yang mencakup
            penjelasan tentang fungsi dasar seperti sinus, cosinus, dan tangen.
            Situs ini menyediakan rumus-rumus penting, grafik fungsi, contoh
            soal, serta kalkulator interaktif yang dapat memudahkan anda.
          </p>
          <div className="flex items-center justify-center gap-x-6 mt-6">
            <Link
              href="#tentang"
              className="flex items-center gap-x-3 bg-blue-500 dark:bg-jeruk border border-blue-500 dark:border-jeruk px-4 lg:px-5 py-2 lg:py-3 rounded-full"
            >
              <p className="text-white text-base lg:text-lg font-medium">
                Jelajahi
              </p>
              <IoArrowDownCircleOutline size={24} color="#ffffff" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
