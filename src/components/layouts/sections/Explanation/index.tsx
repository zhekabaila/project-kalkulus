import Linear from '@/components/common/Cards/Function/linear'
import Kuadrat from '@/components/common/Cards/Function/kuadrat'
import { functionTypes } from '@/constant/functionTypes'
import Image from 'next/image'
import Link from 'next/link'
import Eksponensial from '@/components/common/Cards/Function/eksponensial'
import Logaritma from '@/components/common/Cards/Function/logaritma'
import Trigonometri from '@/components/common/Cards/Function/trigonometri'
import Rasional from '@/components/common/Cards/Function/rasional'

const Explanation = () => {
  return (
    <section
      className="relative flex items-center justify-center p-36 border-t-4 border-t-blue-500"
      id="penjelasan"
    >
      <div className="absolute inset-0 size-full -z-40">
        <Image
          src="/images/abstract-line.svg"
          alt="dqw"
          width={1000}
          height={1000}
          className="size-full"
        />
      </div>
      <div className="size-full">
        <h2 className="text-center text-5xl font-bold">Penjelasan</h2>
        <div className="grid grid-cols-2 mt-20 gap-20">
          <div className="space-y-7 bg-white/20 backdrop-blur-md rounded-xl border-2 border-white/30 p-16">
            <h3 className="text-3xl font-semibold">
              Apa itu <span className="text-blue-500">fungsi?</span>
            </h3>
            <p className="text-lg font-medium text-justify">
              Dalam kalkulus, fungsi didefinisikan sebagai suatu relasi atau
              aturan yang menghubungkan setiap elemen dalam satu himpunan, yang
              disebut domain (daerah asal), dengan tepat satu elemen dalam
              himpunan lain, yang disebut kodomain (daerah hasil). Fungsi
              dilambangkan sebagai f(x), di mana x adalah variabel input dari
              domain, dan f(x) adalah hasil output di kodomain yang sesuai
              dengan input tersebut.
            </p>
          </div>
          <div className="space-y-7 bg-white/20 backdrop-blur-md rounded-xl border-2 border-white/30 p-16">
            <h3 className="text-3xl font-semibold">
              Ada berapa jenis <span className="text-blue-500">fungsi?</span>
            </h3>
            <div className="text-lg font-medium text-justify">
              <p className="mb-3">Fungsi terbagi menjadi 6, yaitu:</p>
              <ul className="list-disc list-inside">
                {functionTypes.map(({ name, link }, key) => (
                  <li key={key}>
                    <Link
                      href={link}
                      className="hover:text-blue-500 transition-all ease-in-out duration-200"
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
          <Rasional/>

        </div>
      </div>
    </section>
  )
}

export default Explanation
