import { functionTypes } from '@/constant/functionTypes'
import Image from 'next/image'
import Link from 'next/link'

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
          <div
            className="col-span-2 space-y-9 bg-white/20 backdrop-blur-md rounded-xl border-2 border-white/30 p-16"
            id="fungsi-linear"
          >
            <div className="flex flex-row gap-x-20">
              <div className="basis-1/ space-y-6 text-lg font-base text-justify">
                <h3 className="text-3xl font-semibold">
                  Fungsi <span className="text-blue-500">Linear</span>
                </h3>
                <div className="space-y-1">
                  <h4 className="text-xl font-semibold">
                    Apa itu fungsi{' '}
                    <span className="text-blue-500">linear?</span>
                  </h4>
                  <p className="">
                    fungsi yang membentuk garis lurus ketika digambarkan dalam
                    bidang koordinat.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold">Rumus</h4>
                  <div>
                    <p className="inline text-xl font-medium bg-gray-200 p-3 rounded-md">
                      f(x) = ax + b
                    </p>
                    <h5 className="mt-5">Keterangan:</h5>
                    <ul className="list-outside list-disc">
                      <li>
                        <span className="font-bold">a</span> adalah gradien atau
                        kemiringan garis, yang menunjukkan seberapa curam garis
                        tersebut.
                      </li>
                      <li>
                        <span className="font-bold">x</span> adalah variabel.
                      </li>
                      <li>
                        <span className="font-bold">b</span> adalah intersep
                        atau titik potong garis dengan sumbu-y, yaitu nilai f(x)
                        saat x=0.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-semibold">
                    Karakteristik Fungsi Linear.
                  </h4>
                  <div>
                    <ul className="list-outside list-disc">
                      <li>
                        Grafik berupa garis lurus: Fungsi ini menghasilkan garis
                        lurus pada grafik kartesius.
                      </li>
                      <li>
                        Gradien (Kemiringan): Menentukan apakah garis akan naik
                        (jika a{'>'}0), turun (jika a{'<'}0), atau mendatar
                        (jika a=0).
                      </li>
                      <li>
                        Hubungan proporsionalitas: Fungsi linear menunjukkan
                        hubungan yang proporsional atau konstan antara x dan
                        f(x).
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 flex flex-col items-center justify-center">
                <Image
                  src="/images/contoh_linear.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="aspect-video w-full h-auto"
                />
                <p className="text-lg font-medium mt-2">
                  Contoh soal: f(x)= x + 1
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-span-2 space-y-9 bg-white/20 backdrop-blur-md rounded-xl border-2 border-white/30 p-16"
            id="fungsi-kuadrat"
          >
            <div className="flex flex-row-reverse gap-x-20">
              <div className="basis-1/2 space-y-6 text-lg font-base text-justify">
                <h3 className="text-3xl font-semibold">
                  Fungsi <span className="text-blue-500">Kuadrat</span>
                </h3>
                <div className="space-y-1">
                  <h4 className="text-xl font-semibold">
                    Apa itu fungsi{' '}
                    <span className="text-blue-500">linear?</span>
                  </h4>
                  <p className="">
                    fungsi yang membentuk garis lurus ketika digambarkan dalam
                    bidang koordinat.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold">Rumus</h4>
                  <div>
                    <p className="inline text-xl font-medium bg-gray-200 p-3 rounded-md">
                      f(x) = ax + b
                    </p>
                    <h5 className="mt-5">Keterangan:</h5>
                    <ul className="list-outside list-disc">
                      <li>
                        <span className="font-bold">a</span> adalah gradien atau
                        kemiringan garis, yang menunjukkan seberapa curam garis
                        tersebut.
                      </li>
                      <li>
                        <span className="font-bold">x</span> adalah variabel.
                      </li>
                      <li>
                        <span className="font-bold">b</span> adalah intersep
                        atau titik potong garis dengan sumbu-y, yaitu nilai f(x)
                        saat x=0.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-semibold">
                    Karakteristik Fungsi Linear.
                  </h4>
                  <div>
                    <ul className="list-outside list-disc">
                      <li>
                        Grafik berupa garis lurus: Fungsi ini menghasilkan garis
                        lurus pada grafik kartesius.
                      </li>
                      <li>
                        Gradien (Kemiringan): Menentukan apakah garis akan naik
                        (jika a{'>'}0), turun (jika a{'<'}0), atau mendatar
                        (jika a=0).
                      </li>
                      <li>
                        Hubungan proporsionalitas: Fungsi linear menunjukkan
                        hubungan yang proporsional atau konstan antara x dan
                        f(x).
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 flex flex-col items-center justify-center">
                <Image
                  src="/images/contoh_linear.png"
                  alt=""
                  width={1000}
                  height={1000}
                  className="aspect-video w-full h-auto"
                />
                <p className="text-lg font-medium mt-2">
                  Contoh soal: f(x)= x + 1
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Explanation
