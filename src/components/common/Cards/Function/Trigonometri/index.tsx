import Image from 'next/image'

export const Trigonometri = () => {
  return (
    <div
      className="col-span-2 space-y-9 bg-white/20 backdrop-blur-md rounded-xl border-2 border-white/30 p-16"
      id="fungsi-linear"
    >
      <div className="flex flex-row gap-x-20">
        <div className="basis-1/2 space-y-6 text-lg font-base text-justify">
          <h3 className="text-3xl font-semibold">
            Fungsi <span className="text-blue-500">Trigonometri</span>
          </h3>
          <div className="space-y-1">
            <h4 className="text-xl font-semibold">
              Apa itu fungsi{' '}
              <span className="text-blue-500">Trigonometri?</span>
            </h4>
            <p>
              Fungsi trigonometri adalah suatu fungsi yang grafiknya berulang
              secara terus menerus dalam periode tertentu.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Bentuk umum</h4>
            <div>
              <p className="inline text-xl font-medium bg-gray-200 p-3 rounded-md">
                f(x) = log <sub>b</sub> (x)
              </p>
              <h5 className="mt-5">Keterangan:</h5>
              <ul className="list-outside list-disc">
                <li>
                  <span className="font-bold">b</span> adalah basis logaritma
                  (dengan b{'>'}0 dan b≠1),
                </li>
                <li>
                  <span className="font-bold">x</span> adalah variabel input
                  (dengan x{'>'}0), dan
                </li>
                <li>
                  <span className="font-bold">f(x)</span> adalah nilai logaritma
                  dari x dalam basis b, yang menyatakan eksponen yang membuat b
                  berpangkat f(x) menjadi x.
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
                  <span className="font-bold">Grafik Melengkung:</span> Grafik
                  fungsi logaritma memiliki bentuk melengkung yang lambat
                  meningkat. Fungsi ini mendekati sumbu-y tetapi tidak pernah
                  menyentuhnya.
                </li>
                <li>
                  <span className="font-bold">Pertumbuhan Lambat:</span>
                  Dibandingkan fungsi eksponensial, fungsi logaritma tumbuh
                  lebih lambat saat x bertambah besar.
                </li>
                <li>
                  <span className="font-bold">Domain Terbatas:</span>
                  Fungsi logaritma hanya didefinisikan untuk nilai x{'>'}0.
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
          <p className="text-lg font-medium mt-2">Contoh soal: f(x)= x + 1</p>
        </div>
      </div>
    </div>
  )
}
