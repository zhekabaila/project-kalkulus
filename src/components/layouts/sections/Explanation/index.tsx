'use client'
import Image from 'next/image'
import { useTheme } from '@/contexts/themeContext'
import TrignonemetryTable from '@/components/common/Table/Trigonometri'
import ExplanationCard from '@/components/common/Cards/Explanation'

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
        <div className="grid grid-cols-2 gap-10 lg:gap-20">
          <ExplanationCard
            title="Definisi Fungsi"
            highlightTitle="Trigonometri Dasar"
          >
            <p className="text-xs lg:text-lg font-medium text-justify dark:text-sun">
              Fungsi trigonometri adalah fungsi yang berhubungan dengan sudut
              dan segitiga, terutama segitiga siku-siku.
            </p>
          </ExplanationCard>

          <ExplanationCard
            title="Fungsi trigonometri dasar meliputi :"
            highlightTitle=""
          >
            <div className="text-xs lg:text-lg font-medium dark:text-sun">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h4>Identitas Pythagoras:</h4>
                <ul>
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
                <h4>Identitas Penjumlahan dan Pengurangan:</h4>
                <ul>
                  <li>
                    <h5>Sinus:</h5>
                    <p>sin(a &plusmn; b) = sin a cos b &plusmn; cos a sin b</p>
                  </li>
                  <li>
                    <h5>Cosinus:</h5>
                    <p>cos(a &plusmn; b) = cos a cos b &#8723; sin a sin b</p>
                  </li>
                  <li>
                    <h5>Tangen:</h5>
                    <div className="flex items-center gap-2">
                      <div>tan(a &plusmn; b) =</div>
                      <div className="flex flex-col">
                        <span>tan a &#8723; tan b</span>
                        <span className="border-t border-t-black">
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
            <p className="text-xs lg:text-lg font-medium text-justify dark:text-sun">
              Dalam Kalkulus, fungsi trigonometri sering kali diintegrasikan dan
              diturunkan.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div>
                <h5>Turunan:</h5>
                <ul>
                  <li className="flex items-center gap-2">
                    <div className="flex flex-col">
                      <span>d</span>
                      <span className="border-t border-t-black">dx</span>
                    </div>
                    <div>sin x = cos x</div>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex flex-col">
                      <span>d</span>
                      <span className="border-t border-t-black">dx</span>
                    </div>
                    <div>cos x = -sin x</div>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex flex-col">
                      <span>d</span>
                      <span className="border-t border-t-black">dx</span>
                    </div>
                    <div>
                      tan x = sec<sup>2</sup> x
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h5>Integral:</h5>
                <ul>
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
            <p className="text-xs lg:text-lg font-medium text-justify dark:text-sun">
              Fungsi trigonometri adalah suatu fungsi yang grafiknya berulang
              secara terus menerus dalam periode tertentu.
            </p>

            <div>
              <div>
                <h4>Unsur Unsur Grafik Trigonometri</h4>
                <ul>
                  <li>
                    <h5>Amplitudo</h5>
                    <ul className="list-disc list-outside">
                      <li>
                        <b>Amplitudo</b> adalah nilai maksimum dari grafik
                        fungsi trigonometri. Untuk fungsi sinus dan kosinus
                        standar, amplitudo adalah 1. Amplitudo menunjukkan {'"'}
                        tinggi
                        {'"'}
                        {'"'}
                        atau {'"'}ketinggian{'"'} grafik dari titik
                        keseimbangannya (sumbu x).
                      </li>
                      <li>
                        <b>Contoh:</b> Pada grafik y = 2 sin ⁡x, amplitudo
                        adalah 2, yang berarti grafik akan mencapai nilai
                        maksimum 2 dan minimum -2.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h5>Periode</h5>
                    <ul className="list-disc list-outside">
                      <li>
                        <b>Periode</b> adalah panjang satu siklus penuh dari
                        grafik, yaitu jarak pada sumbu x yang diperlukan untuk
                        pola grafik berulang kembali.
                      </li>
                      <li>
                        <b>Fungsi sinus dan kosinus</b> memiliki periode standar
                        2π, artinya grafik akan mengulang pola setiap 2π satuan
                        pada sumbu x.
                      </li>
                      <li>
                        <b>Fungsi tangen</b> memiliki periode standar π\piπ,
                        karena grafik tangen mengulang pola setiap π\piπ satuan
                        pada sumbu x.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h5>Frekuensi</h5>
                    <ul className="list-disc list-outside">
                      <li>
                        <b>Frekuensi</b> adalah jumlah siklus yang terjadi dalam
                        satu satuan panjang pada sumbu x. Frekuensi berbanding
                        terbalik dengan periode.
                      </li>
                      <li>
                        <div className="flex items-center gap-x-3">
                          Jika f(x) = sin⁡(bx), maka frekuensi adalah b, dan
                          periode menjadi{' '}
                          <span className="flex flex-col items-center justify-center">
                            <span>2&pi;</span>
                            <span className="border-t border-t-black"> b </span>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h5>Fase (Perpindahan Fase)</h5>
                    <ul className="list-disc list-outside">
                      <li>
                        <b>Fase</b> menunjukkan seberapa jauh grafik bergeser ke
                        kanan atau ke kiri dari posisi asalnya.
                      </li>
                      <li>
                        Pada fungsi seperti <b>y = sin⁡(x − c)</b>, <b>c</b>{' '}
                        adalah perpindahan fase, yang menyebabkan grafik
                        bergeser <b>c</b> satuan ke kanan jika <b>c</b> positif,
                        atau <b>c</b> satuan ke kiri jika <b>c</b> negatif.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h5>Sumbu Tengah (Garis Keseimbangan)</h5>
                    <ul className="list-disc list-outside">
                      <li>
                        <b>Sumbu tengah</b> adalah garis horizontal yang membagi
                        grafik menjadi dua bagian simetris secara vertikal. Pada
                        grafik sinus dan kosinus, sumbu tengah biasanya berada
                        di y=0, tetapi bisa bergeser ke atas atau ke bawah.
                      </li>
                      <li>
                        Jika fungsi ditulis seperti <b>y = A sin⁡(x) + D</b>,
                        maka <b>D</b> adalah pergeseran vertikal yang menentukan
                        posisi sumbu tengah.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h5>
                      Asimtot (untuk Tangen, Kotangen, Sekan, dan Kosekan)
                    </h5>
                    <ul className="list-disc list-outside">
                      <li>
                        Fungsi seperti <b>tangen</b>, <b>kotangen</b>,{' '}
                        <b>sekan</b>, dan <b>kosekan</b> memiliki asimtot
                        vertikal, yaitu garis yang grafiknya mendekati tetapi
                        tidak pernah disentuh.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </ExplanationCard>

          <ExplanationCard title="Grafik" highlightTitle="Trigonometri" span>
            <div className="flex flex-col gap-10">
              <div>
                <Image
                  src="https://cdn-web.ruangguru.com/landing-pages/assets/hs/grafik%20fungsi%20sinus%20y%20=%20sin%20x.jpg"
                  width={100}
                  height={70}
                  alt="Grafik Fungsi Sinus"
                  className="aspect-[4/3]"
                />
              </div>
            </div>
          </ExplanationCard>
        </div>
      </div>
    </section>
  )
}

export default Explanation
