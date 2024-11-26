'use client'
import Image from 'next/image'
import { useTheme } from '@/contexts/themeContext'
import TrignonemetryTable from '@/components/common/Table/Trigonometri'
import ExplanationCard from '@/components/common/Cards/Explanation'
import Link from 'next/link'

const Explanation = () => {
  const { darkMode } = useTheme()

  return (
    <section
      className="p-4 py-20 lg:p-36 border-t-4 border-t-blue-500 dark:border-t-jeruk bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(/images/${
          darkMode ? 'abstract-line-dark.svg' : 'abstract-line.svg'
        })`,
      }}
      id="pembahasan"
    >
      <div className="mb-10 lg:mb-20">
        <h2 className="text-2xl lg:text-3xl font-semibold dark:text-sun">
          Pembahasan Materi
        </h2>
        <div className="bg-primary dark:bg-jeruk h-1.5 w-28 mt-2"></div>
      </div>
      <div className="size-full">
        <div className="grid grid-cols-2 gap-10 lg:gap-20">
          <ExplanationCard
            title="Definisi Fungsi"
            highlightTitle="Trigonometri Dasar"
          >
            <p className="text-sm lg:text-lg font-medium text-[#3d4048] dark:text-sun">
              Fungsi trigonometri adalah fungsi yang berhubungan dengan sudut
              dan segitiga, terutama segitiga siku-siku.
            </p>
          </ExplanationCard>

          <ExplanationCard
            title="Fungsi trigonometri dasar meliputi :"
            highlightTitle=""
          >
            <div className="text-sm lg:text-lg dark:text-sun">
              <ul className="list-outside list-disc space-y-2">
                <li>
                  <span className="font-bold text-primary dark:text-jeruk">
                    Sinus (sin):{' '}
                  </span>
                  Perbandingan sisi depan dengan sisi miring.
                </li>
                <li>
                  <span className="font-bold text-primary dark:text-jeruk">
                    Kosinus (cos):{' '}
                  </span>
                  Perbandingan sisi samping dengan sisi miring.
                </li>
                <li>
                  <span className="font-bold text-primary dark:text-jeruk">
                    Tangen (tan):{' '}
                  </span>
                  Perbandingan sisi depan dengan sisi samping.
                </li>
                <li>
                  <span className="font-bold text-primary dark:text-jeruk">
                    Sekan (sec):{' '}
                  </span>
                  Kebalikan dari kosinus.
                </li>
                <li>
                  <span className="font-bold text-primary dark:text-jeruk">
                    Kosekan (csc):{' '}
                  </span>
                  Kebalikan dari sinus.
                </li>
                <li>
                  <span className="font-bold text-primary dark:text-jeruk">
                    Kotan (cot):{' '}
                  </span>
                  Kebalikan dari tangen.
                </li>
              </ul>
            </div>
          </ExplanationCard>

          <ExplanationCard
            title="Identitas Trigonometri Dasar"
            highlightTitle=""
            span
          >
            <div className="text-sm lg:text-lg grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h4 className="font-semibold">
                  Identitas{' '}
                  <span className="text-primary dark:text-jeruk">
                    Pythagoras:
                  </span>
                </h4>
                <ul className="mt-4 space-y-2">
                  <li>
                    <p className="flex justify-start">
                      {String.raw`$$sin^2 \theta + cos^2 \theta = 1$$`}
                    </p>
                  </li>
                  <li>
                    <p className="flex justify-start">
                      {String.raw`$$1 + tan^2 \theta = sec^2 \theta$$`}
                    </p>
                  </li>
                  <li>
                    <p className="flex justify-start">
                      {String.raw`$$1 + cot^2 \theta = csc^2 \theta$$`}
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">
                  Identitas{' '}
                  <span className="text-primary dark:text-jeruk">
                    Penjumlahan
                  </span>{' '}
                  dan{' '}
                  <span className="text-primary dark:text-jeruk">
                    Pengurangan:
                  </span>
                </h4>
                <ul className="text-[#3d4048] mt-4 space-y-2">
                  <li>
                    <h5 className="font-medium text-primary dark:text-jeruk">
                      Sinus:
                    </h5>
                    <p className="flex justify-start">
                      {String.raw`$$sin(a \pm b) = {sin \space a \space cos \space b \pm cos \space a \space sin \space b}$$`}
                    </p>
                  </li>
                  <li>
                    <h5 className="font-medium text-primary dark:text-jeruk">
                      Cosinus:
                    </h5>
                    <p className="flex justify-start">
                      {String.raw`$$cos(a \pm b) = {cos \space a \space cos \space b \mp sin \space a \space sin \space b}$$`}
                    </p>
                  </li>
                  <li>
                    <h5 className="font-medium text-primary dark:text-jeruk">
                      Tangen:
                    </h5>
                    <p className="flex justify-start">
                      {String.raw`$$tan(a \pm b) = {tan \space a \mp tan \space b \over 1 \mp tan \space a \space tan \space b}$$`}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </ExplanationCard>

          <ExplanationCard
            title="Fungsi Trigonometri dalam"
            highlightTitle="Kalkulus:"
            span
          >
            <p className="text-sm lg:text-lg font-medium text-justify">
              Dalam Kalkulus, fungsi trigonometri sering kali diintegrasikan dan
              diturunkan.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 text-sm lg:text-lg">
              <div>
                <h5 className="font-medium text-primary dark:text-jeruk">
                  Turunan:
                </h5>
                <ul className="mt-4 space-y-4">
                  <li>
                    <p className="flex justify-start">
                      {String.raw`$$ {d \over dx} \space sin \space x =  cos \space x$$`}
                    </p>
                  </li>
                  <li>
                    <p className="flex justify-start">
                      {String.raw`$$ {d \over dx} \space cos \space x =  -sin \space x$$`}
                    </p>
                  </li>
                  <li>
                    <p className="flex justify-start">
                      {String.raw`$$ {d \over dx} \space tan \space x = sec^2 x$$`}
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-primary dark:text-jeruk">
                  Integral:
                </h5>
                <ul className="mt-4 space-y-4">
                  <li>
                    <p className="flex justify-start">
                      {String.raw`$$ \int \space sin \space x \space dx = -cos \space x + C$$`}
                    </p>
                  </li>
                  <li>
                    <p className="flex justify-start">
                      {String.raw`$$ \int \space cos \space x \space dx = sin \space x + C$$`}
                    </p>
                  </li>
                  <li>
                    <p className="flex justify-start">
                      {String.raw`$$ \int \space sec^2 \space x \space dx = tan \space x + C$$`}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </ExplanationCard>

          <ExplanationCard
            title="Sudut Istimewa"
            highlightTitle="Trigonometri"
            span
          >
            <TrignonemetryTable />
          </ExplanationCard>

          <ExplanationCard
            title="Grafik Fungsi"
            highlightTitle="Trigonometri:"
            span
          >
            <p className="text-sm lg:text-lg font-medium dark:text-sun">
              Fungsi trigonometri adalah suatu fungsi yang grafiknya berulang
              secara terus menerus dalam periode tertentu.
            </p>
          </ExplanationCard>

          <ExplanationCard
            title="Unsur Unsur Grafik"
            highlightTitle="Trigonometri:"
          >
            <ul className="space-y-7 text-sm lg:text-lg">
              <li>
                <h5 className="font-bold text-primary dark:text-jeruk">
                  Amplitudo
                </h5>
                <ul className="list-disc list-outside space-y-2">
                  <li>
                    <b>Amplitudo</b> adalah nilai maksimum dari grafik fungsi
                    trigonometri. Untuk fungsi sinus dan kosinus standar,
                    amplitudo adalah 1. Amplitudo menunjukkan {'"'}
                    tinggi
                    {'" '}
                    atau {'"'}ketinggian{'"'} grafik dari titik keseimbangannya
                    (sumbu x).
                  </li>
                  <li>
                    <b>Contoh:</b> Pada grafik{' '}
                    <span>{String.raw`$$ y = 2 \space sin \space x$$`}</span>{' '}
                    amplitudo adalah 2, yang berarti grafik akan mencapai nilai
                    maksimum 2 dan minimum -2.
                  </li>
                </ul>
              </li>
              <li>
                <h5 className="font-bold text-primary dark:text-jeruk">
                  Periode
                </h5>
                <ul className="list-disc list-outside space-y-2">
                  <li>
                    <b>Periode</b> adalah panjang satu siklus penuh dari grafik,
                    yaitu jarak pada sumbu x yang diperlukan untuk pola grafik
                    berulang kembali.
                  </li>
                  <li>
                    <b>Fungsi sinus dan kosinus</b> memiliki periode standar 2π,
                    artinya grafik akan mengulang pola setiap 2π satuan pada
                    sumbu x.
                  </li>
                  <li>
                    <b>Fungsi tangen</b> memiliki periode standar π/piπ, karena
                    grafik tangen mengulang pola setiap π\piπ satuan pada sumbu
                    x.
                  </li>
                </ul>
              </li>
              <li>
                <h5 className="font-bold text-primary dark:text-jeruk">
                  Frekuensi
                </h5>
                <ul className="list-disc list-outside space-y-2">
                  <li>
                    <b>Frekuensi</b> adalah jumlah siklus yang terjadi dalam
                    satu satuan panjang pada sumbu x. Frekuensi berbanding
                    terbalik dengan periode.
                  </li>
                  <li>
                    <div className="gap-x-3">
                      Jika, <span>{String.raw`$$ f(x) = sin(bx) $$`}</span>
                      maka frekuensi adalah b, dan periode menjadi{' '}
                      <span>{String.raw`$$ 2 \pi \over b $$`}</span>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </ExplanationCard>

          <ExplanationCard title="Fase" highlightTitle="(Perpindahan Fase)">
            <ul className="space-y-7 text-sm lg:text-lg">
              <li>
                <h5 className="font-bold text-primary dark:text-jeruk">Fase</h5>
                <ul className="list-disc list-outside space-y-2">
                  <li>
                    <b>Fase</b> menunjukkan seberapa jauh grafik bergeser ke
                    kanan atau ke kiri dari posisi asalnya.
                  </li>
                  <li>
                    Pada fungsi seperti{' '}
                    <span>{String.raw`$$ y = sin⁡(x − c) $$`}</span>
                    <b>c</b> adalah perpindahan fase, yang menyebabkan grafik
                    bergeser <b>c</b> satuan ke kanan jika <b>c</b> positif,
                    atau <b>c</b> satuan ke kiri jika <b>c</b> negatif.
                  </li>
                </ul>
              </li>
              <li>
                <h5 className="font-bold text-primary dark:text-jeruk">
                  Sumbu Tengah (Garis Keseimbangan)
                </h5>
                <ul className="list-disc list-outside space-y-2">
                  <li>
                    <b>Sumbu tengah</b> adalah garis horizontal yang membagi
                    grafik menjadi dua bagian simetris secara vertikal. Pada
                    grafik sinus dan kosinus, sumbu tengah biasanya berada di
                    y=0, tetapi bisa bergeser ke atas atau ke bawah.
                  </li>
                  <li>
                    Jika fungsi ditulis seperti{' '}
                    <span>{String.raw`$$ y = A \space sin⁡(x) + D $$`}</span>
                    maka <b>D</b> adalah pergeseran vertikal yang menentukan
                    posisi sumbu tengah.
                  </li>
                </ul>
              </li>
              <li>
                <h5 className="font-bold text-primary dark:text-jeruk">
                  Asimtot (untuk Tangen, Kotangen, Sekan, dan Kosekan)
                </h5>
                <ul className="list-disc list-outside space-y-2">
                  <li>
                    Fungsi seperti <b>tangen</b>, <b>kotangen</b>, <b>sekan</b>,
                    dan <b>kosekan</b> memiliki asimtot vertikal, yaitu garis
                    yang grafiknya mendekati tetapi tidak pernah disentuh.
                  </li>
                </ul>
              </li>
            </ul>
          </ExplanationCard>

          <ExplanationCard title="Grafik" highlightTitle="Trigonometri" span>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="https://cdn-web.ruangguru.com/landing-pages/assets/hs/grafik%20fungsi%20sinus%20y%20=%20sin%20x.jpg"
                  width={1000}
                  height={1000}
                  loading="lazy"
                  alt="Grafik Fungsi Sinus"
                  className="aspect-square w-full h-auto"
                />
                <Link
                  href="https://www.ruangguru.com/blog/memahami-fungsi-trigonometri-sederhana"
                  target="_blank"
                  className="mt-3 text-sm text-center text-shadow dark:text-sun hover:underline"
                >
                  Memahami Fungsi Trigonometri Sederhana | Matematika Kelas 10
                </Link>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="https://cdn-web.ruangguru.com/landing-pages/assets/hs/grafik%20fungsi%20cosinus%20y%20=%20cos%20x.jpg"
                  width={1000}
                  height={1000}
                  loading="lazy"
                  alt="Grafik Fungsi Sinus"
                  className="aspect-square w-full h-auto"
                />
                <Link
                  href="https://www.ruangguru.com/blog/memahami-fungsi-trigonometri-sederhana"
                  target="_blank"
                  className="mt-3 text-sm text-center text-shadow dark:text-sun hover:underline"
                >
                  Memahami Fungsi Trigonometri Sederhana | Matematika Kelas 10
                </Link>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="https://cdn-web.ruangguru.com/landing-pages/assets/hs/grafik%20fungsi%20tangen%20y%20=%20tan%20x.jpg"
                  width={1000}
                  height={1000}
                  loading="lazy"
                  alt="Grafik Fungsi Sinus"
                  className="aspect-square w-full h-auto"
                />
                <Link
                  href="https://www.ruangguru.com/blog/memahami-fungsi-trigonometri-sederhana"
                  target="_blank"
                  className="mt-3 text-sm text-center text-shadow dark:text-sun hover:underline"
                >
                  Memahami Fungsi Trigonometri Sederhana | Matematika Kelas 10
                </Link>
              </div>
            </div>
          </ExplanationCard>

          <ExplanationCard
            title="Penjelasan Melalui"
            highlightTitle="Video"
            span
          >
            <iframe
              src="https://www.youtube.com/embed/H0ove6GBUiA?si=aMOsi9DFL-RU3RL9"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-auto aspect-video"
            ></iframe>
          </ExplanationCard>

          <ExplanationCard
            title="Contoh Soal dan"
            highlightTitle="Penyelesaiannya"
            span
          >
            <div className="grid grid-cols-1 gap-10">
              <div className="flex flex-col-reverse gap-10 lg:even:flex-row lg:odd:flex-row-reverse">
                <div className="lg:basis-1/2 text-base lg:text-lg">
                  <h4 className="hidden lg:flex items-center text-base lg:text-2xl font-semibold mb-5">
                    <span>{String.raw`$$ 1. \space y = sin \space x $$`}</span>
                  </h4>
                  <p>Penyelesaian:</p>
                  <p className="flex justify-start">{String.raw`$$ y = sin \space x $$`}</p>
                  <div className="grid grid-cols-4 items-center mt-3">
                    <p className="flex justify-start">{String.raw`$$ x = 0 $$`}</p>
                    <p className="flex justify-start">{String.raw`$$ sin \space 0 = 0 $$`}</p>

                    <p className="col-start-1 flex justify-start">{String.raw`$$ x = 30 $$`}</p>
                    <p className="col-span-2 flex justify-start">{String.raw`$$ sin \space 30 = {1 \over 2} $$`}</p>

                    <p className="col-start-1 flex justify-start">{String.raw`$$ x = 45 $$`}</p>
                    <p className="col-span-2 flex justify-start">{String.raw`$$ sin \space 45 = {1 \over 2} \sqrt{2} $$`}</p>

                    <p className="col-start-1 flex justify-start">{String.raw`$$ x = 60 $$`}</p>
                    <p className="col-span-2 flex justify-start">{String.raw`$$ sin \space 60 = {1 \over 2} \sqrt{3} $$`}</p>

                    <p className="col-start-1 flex justify-start">{String.raw`$$ x = 90 $$`}</p>
                    <p className="col-span-2 flex justify-start">{String.raw`$$ sin \space 90 = 1 $$`}</p>
                  </div>
                </div>
                <div className="lg:basis-1/2 w-full h-auto">
                  <h4 className="block lg:hidden text-base lg:text-2xl font-semibold mb-5">
                    <span>{String.raw`$$ 1. \space y = sin \space x $$`}</span>
                  </h4>
                  <Image
                    src="/images/grafik_sin_1.png"
                    width={500}
                    height={400}
                    alt="Gambar Grafik dari fungsi y = sin x"
                    loading="lazy"
                    className="w-full h-auto rounded-xl aspect-video"
                  />
                </div>
              </div>
              <div className="flex flex-col-reverse gap-10 lg:even:flex-row lg:odd:flex-row-reverse">
                <div className="lg:basis-1/2 text-base lg:text-lg">
                  <h4 className="hidden lg:flex items-center text-base lg:text-2xl font-semibold mb-5">
                    <span>{String.raw`$$ 2. \space y = 2 \space sin(x - 60) $$`}</span>
                  </h4>
                  <p>Penyelesaian :</p>
                  <p className="flex justify-start">{String.raw`$$ y = 2 \space sin(x - 60) $$`}</p>
                  <div className="grid grid-cols-4 mt-5">
                    <p className="flex justify-start col-start-1">{String.raw`$$ x = 60 $$`}</p>
                    <div className="grid grid-cols-1 col-span-2">
                      <p className="flex justify-start">{String.raw`$$ x = 2 \space sin(60 - 60) $$`}</p>
                      <p className="flex justify-start">{String.raw`$$ x = 2 \space . \space 0 $$`}</p>
                      <p className="flex justify-start">{String.raw`$$ x = 0 $$`}</p>
                    </div>

                    <p className="flex justify-start col-start-1"></p>
                    <div className="grid grid-cols-1 col-span-2"></div>

                    <p className="flex justify-start col-start-1">{String.raw`$$ x = 150 $$`}</p>
                    <div className="grid grid-cols-1 col-span-2">
                      <p className="flex justify-start">{String.raw`$$ x = 2 \space sin(150 - 60) $$`}</p>
                      <p className="flex justify-start">{String.raw`$$ x = 2 \space sin \space 90 $$`}</p>
                      <p className="flex justify-start">{String.raw`$$ x = 2 \space  . \space 1 $$`}</p>
                      <p className="flex justify-start">{String.raw`$$ x = 2 $$`}</p>
                    </div>
                  </div>
                  <p></p>
                </div>
                <div className="lg:basis-1/2 w-full h-auto">
                  <h4 className="block lg:hidden text-base lg:text-2xl font-semibold mb-5">
                    <span>{String.raw`$$ 2. \space y = 2 \space sin(x - 60) $$`}</span>
                  </h4>
                  <Image
                    src="/images/grafik_sin_2.png"
                    width={500}
                    height={400}
                    alt="Gambar Grafik dari fungsi y = sin x"
                    loading="lazy"
                    className="w-full h-auto rounded-xl aspect-video"
                  />
                </div>
              </div>
            </div>
          </ExplanationCard>

          <ExplanationCard
            title="Membahas Contoh Soal dan"
            highlightTitle="Penyelesaiannya"
            span
          >
            <iframe
              src="https://www.youtube.com/embed/8-8KyTn6UxE?si=JQitxqP4Ne20cP1_"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-auto aspect-video"
            ></iframe>
          </ExplanationCard>
        </div>
      </div>
    </section>
  )
}

export default Explanation
