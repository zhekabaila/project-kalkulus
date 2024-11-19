'use client'

import Image from 'next/image'
import { useTheme } from '@/contexts/themeContext'
import TrignonemetryTable from '@/components/common/Table/Trigonometri'
import ExplanationCard from '@/components/common/Cards/Explanation'
import Link from 'next/link'
import Pecahan from '@/components/common/Pecahan'

const Explanation = () => {
  const { darkMode } = useTheme()

  return (
    <section
      className="relative flex items-center justify-center p-4 py-20 lg:p-36 border-t-4 border-t-blue-500 dark:border-t-jeruk bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(/images/${
          darkMode ? 'abstract-line-dark.svg' : 'abstract-line.svg'
        })`,
      }}
      id="pembahasan"
    >
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
                    sin<sup>2</sup>&theta; + cos<sup>2</sup>&theta; = 1
                  </li>
                  <li>
                    1 + tan<sup>2</sup>&theta; = sec<sup>2</sup>&theta;
                  </li>
                  <li>
                    1 + cot<sup>2</sup>&theta; = csc<sup>2</sup>&theta;
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
                    <p>sin(a &plusmn; b) = sin a cos b &plusmn; cos a sin b</p>
                  </li>
                  <li>
                    <h5 className="font-medium text-primary dark:text-jeruk">
                      Cosinus:
                    </h5>
                    <p>cos(a &plusmn; b) = cos a cos b &#8723; sin a sin b</p>
                  </li>
                  <li>
                    <h5 className="font-medium text-primary dark:text-jeruk">
                      Tangen:
                    </h5>
                    <div className="flex items-center gap-2">
                      <div>tan(a &plusmn; b) =</div>
                      <div className="flex flex-col">
                        <span>tan a &#8723; tan b</span>
                        <span className="border-t border-t-black dark:border-t-sun">
                          1 &#8723; tan a tan b
                        </span>
                      </div>
                    </div>
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

            <div className="grid grid-cols-1 lg:grid-cols-2 text-sm lg:text-lg">
              <div>
                <h5 className="font-medium text-primary dark:text-jeruk">
                  Turunan:
                </h5>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-center gap-2">
                    <div className="flex flex-col justify-center items-center">
                      <span>d</span>
                      <span className="border-t border-t-black dark:border-t-sun">
                        dx
                      </span>
                    </div>
                    <div>sin x = cos x</div>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex flex-col justify-center items-center">
                      <span>d</span>
                      <span className="border-t border-t-black dark:border-t-sun">
                        dx
                      </span>
                    </div>
                    <div>cos x = -sin x</div>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex flex-col justify-center items-center">
                      <span>d</span>
                      <span className="border-t border-t-black dark:border-t-sun">
                        dx
                      </span>
                    </div>
                    <div>
                      tan x = sec<sup>2</sup> x
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-primary dark:text-jeruk">
                  Integral:
                </h5>
                <ul className="mt-4 space-y-4">
                  <li>
                    <p>&int; sin x dx = - cos x + C</p>
                  </li>
                  <li>
                    <p>&int; cos x dx = sin x + C</p>
                  </li>
                  <li>
                    <p>
                      &int; sec<sup>2</sup> x dx = tan x + C
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
                    {'"'}
                    {'"'}
                    atau {'"'}ketinggian{'"'} grafik dari titik keseimbangannya
                    (sumbu x).
                  </li>
                  <li>
                    <b>Contoh:</b> Pada grafik y = 2 sin ⁡x, amplitudo adalah 2,
                    yang berarti grafik akan mencapai nilai maksimum 2 dan
                    minimum -2.
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
                    <b>Fungsi tangen</b> memiliki periode standar π\piπ, karena
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
                    <div className="flex items-center gap-x-3">
                      Jika f(x) = sin⁡(bx), maka frekuensi adalah b, dan periode
                      menjadi{' '}
                      <span className="flex flex-col items-center justify-center">
                        <span>2&pi;</span>
                        <span className="border-t border-t-black dark:border-t-sun">
                          {' '}
                          b{' '}
                        </span>
                      </span>
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
                    Pada fungsi seperti <b>y = sin⁡(x − c)</b>, <b>c</b> adalah
                    perpindahan fase, yang menyebabkan grafik bergeser <b>c</b>{' '}
                    satuan ke kanan jika <b>c</b> positif, atau <b>c</b> satuan
                    ke kiri jika <b>c</b> negatif.
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
                    Jika fungsi ditulis seperti <b>y = A sin⁡(x) + D</b>, maka{' '}
                    <b>D</b> adalah pergeseran vertikal yang menentukan posisi
                    sumbu tengah.
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
              frameBorder={0}
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
              <div className="flex flex-col gap-10 lg:even:flex-row lg:odd:flex-row-reverse">
                <div className="lg:basis-1/2">
                  <h4 className="text-base lg:text-2xl font-semibold mb-5">
                    y = sin x
                  </h4>
                  <p>Penyelesaian:</p>
                  <p>y = sin x</p>
                  <div className="grid grid-cols-2 *:border *:border-primary">
                    <p>x = 0</p>
                    <p>sin 0 = 0</p>

                    <p>x = 30</p>
                    <div className="flex items-center">
                      sin 30 = <Pecahan atas="1" bawah="2" />
                    </div>

                    <p>x = 45</p>
                    <div className="flex items-center">
                      sin 45 = <Pecahan atas="1" bawah="2" sesudah="&radic;2" />
                    </div>

                    <p>x = 60</p>
                    <div className="flex items-center">
                      sin 60 = <Pecahan atas="1" bawah="2" sesudah="&radic;3" />
                    </div>

                    <p>x = 90</p>
                    <div className="flex items-center">sin 90 = 1</div>
                  </div>
                  <p></p>
                </div>
                <div className="lg:basis-1/2 w-full h-auto">
                  <Image
                    src="/images/geogebra-export(2).png"
                    width={500}
                    height={400}
                    alt="Gambar Grafik dari fungsi y = sin x"
                    loading="lazy"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:items-center gap-10 lg:even:flex-row lg:odd:flex-row-reverse">
                <div className="lg:basis-1/2">
                  <p>y = sin x</p>
                  <p>Penyelesaian:</p>
                  <p>y = sin x</p>
                  <div className="grid grid-cols-2">
                    <p>x = 0</p>
                    <p>sin 0 = 0</p>

                    <p>x = 30</p>
                    <div className="flex items-center">
                      sin 30 = <Pecahan atas="1" bawah="2" />
                    </div>

                    <p>x = 45</p>
                    <div className="flex items-center">
                      sin 45 = <Pecahan atas="1" bawah="2" sesudah="&radic;2" />
                    </div>

                    <p>x = 60</p>
                    <div className="flex items-center">
                      sin 60 = <Pecahan atas="1" bawah="2" sesudah="&radic;3" />
                    </div>

                    <p>x = 90</p>
                    <div className="flex items-center">sin 90 = 1</div>
                  </div>
                  <p></p>
                </div>
                <div className="lg:basis-1/2"></div>
              </div>
            </div>
          </ExplanationCard>
        </div>
      </div>
    </section>
  )
}

export default Explanation
