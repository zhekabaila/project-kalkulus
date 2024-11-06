import Image from 'next/image'

export const Kuadrat = () => {
  return (
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
              Apa itu fungsi <span className="text-blue-500">kuadrat?</span>
            </h4>
            <p className="">
              Fungsi kuadrat adalah fungsi yang berbentuk persamaan polinomial
              derajat dua, di mana variabel bebasnya memiliki pangkat tertinggi
              dua.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Bentuk umum</h4>
            <div>
              <p className="inline text-xl font-medium bg-gray-200 p-3 rounded-md">
                f(x) = ax2 + bx + c
              </p>
              <h5 className="mt-5">Keterangan:</h5>
              <ul className="list-outside list-disc">
                <li>
                  <span className="font-bold">a</span>,{' '}
                  <span className="font-bold">b</span>, dan{' '}
                  <span className="font-bold">c</span> adalah konstanta (dengan
                  a≠0, agar persamaan tetap berderajat dua).
                </li>
                <li>
                  <span className="font-bold">x</span> adalah variabel
                  independen.
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-1">
            <h4 className="text-xl font-semibold">
              Karakteristik Fungsi Kuadrat.
            </h4>
            <div>
              <ul className="list-outside list-disc">
                <li>
                  <span className="font-bold">Grafik berbentuk Parabola:</span>{' '}
                  Grafik fungsi kuadrat membentuk kurva parabola yang dapat
                  membuka ke atas (jika a{'>'}0) atau ke bawah (jika a{'<'}0).
                </li>
                <li>
                  <span className="font-bold">Puncak (Vertex):</span> Titik
                  tertinggi atau terendah pada parabola disebut puncak (vertex),
                  yang memiliki koordinat (x,y).
                </li>
                <li>
                  <span className="font-bold">Sumbu Simetri:</span> Parabola
                  memiliki sumbu simetri yang melewati puncak dan tegak lurus
                  terhadap sumbu-x. Sumbu simetri ini berada di
                </li>
                <li>
                  <span className="font-bold">Akar (Nol Fungsi):</span> Titik di
                  mana grafik fungsi memotong sumbu-x disebut akar atau nol
                  fungsi, yaitu nilai x saat f(x)=0.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="basis-1/2 flex flex-col items-center justify-center">
          <Image
            src="/images/fungsi-kuadrat.png"
            alt=""
            width={1000}
            height={1000}
            className="aspect-video w-full h-auto"
          />
          <p className="text-lg font-medium mt-2">
            Contoh soal: f(x) = x<sup>2</sup> + 2x + 2
          </p>
        </div>
      </div>
    </div>
  )
}
