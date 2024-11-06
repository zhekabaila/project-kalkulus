'use client'

import { functionTypes } from '@/constant/functionTypes'
import {
  Eksponensial,
  Kuadrat,
  Linear,
  Logaritma,
  Rasional,
  Trigonometri,
} from '@/components/common/Cards/Function'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '@/contexts/themeContext'

const Explanation = () => {
  const { darkMode } = useTheme()

  return (
    <section
      className="relative flex items-center justify-center p-4 py-20 lg:p-36 border-t-4 border-t-blue-500 dark:border-t-jeruk"
      id="penjelasan"
    >
      <div className="absolute inset-0 size-full -z-40">
        {darkMode ? (
          <Image
            src="/images/abstract-line-dark.svg"
            alt="dqw"
            width={1000}
            height={1000}
            className="size-full"
          />
        ) : (
          <Image
            src="/images/abstract-line.svg"
            alt="dqw"
            width={1000}
            height={1000}
            className="size-full"
          />
        )}
      </div>
      <div className="size-full">
        <h2 className="text-center text-3xl lg:text-5xl font-bold dark:text-jeruk">
          Penjelasan
        </h2>
        <div className="grid grid-cols-2 mt-20 gap-20">
          <div className="col-span-2 lg:col-span-1 space-y-7 bg-white/20 dark:bg-gray-600/20 backdrop-blur-md rounded-xl border-2 border-white/30 dark:border-gray-600/30 p-16">
            <h3 className="text-3xl font-semibold dark:text-sun">
              Apa itu{' '}
              <span className="text-blue-500 dark:text-jeruk">fungsi?</span>
            </h3>
            <p className="text-lg font-medium text-justify dark:text-sun">
              Dalam kalkulus, fungsi didefinisikan sebagai suatu relasi atau
              aturan yang menghubungkan setiap elemen dalam satu himpunan, yang
              disebut domain (daerah asal), dengan tepat satu elemen dalam
              himpunan lain, yang disebut kodomain (daerah hasil). Fungsi
              dilambangkan sebagai f(x), di mana x adalah variabel input dari
              domain, dan f(x) adalah hasil output di kodomain yang sesuai
              dengan input tersebut.
            </p>
          </div>
          <div className="col-span-2 lg:col-span-1 space-y-7 bg-white/20 dark:bg-gray-600/20 backdrop-blur-md rounded-xl border-2 border-white/30 dark:border-gray-600/30 p-16">
            <h3 className="text-3xl font-semibold dark:text-sun">
              Ada berapa jenis{' '}
              <span className="text-blue-500 dark:text-jeruk">fungsi?</span>
            </h3>
            <div className="text-lg font-medium text-justify">
              <p className="mb-3 dark:text-sun">
                Fungsi terbagi menjadi 6, yaitu:
              </p>
              <ul className="list-disc list-inside dark:text-sun">
                {functionTypes.map(({ name, link }, key) => (
                  <li key={key}>
                    <Link
                      href={link}
                      className="dark:text-sun hover:text-blue-500  hover:dark:text-jeruk transition-all ease-in-out duration-200"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Linear />
          <Kuadrat />
          <Eksponensial />
          <Logaritma />
          <Trigonometri />
          <Rasional />
        </div>
      </div>
    </section>
  )
}

export default Explanation
