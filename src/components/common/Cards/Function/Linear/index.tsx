import Image from 'next/image'

export const Linear = () => {
  return (
    <div
      className="col-span-2 space-y-9 bg-white/20 backdrop-blur-md rounded-xl border-2 border-white/30 p-16"
      id="fungsi-linear"
    >
      <div className="flex flex-row gap-x-20">
        <div className="basis-1/2 space-y-6 text-lg font-base text-justify">
          <h3 className="text-3xl font-semibold">
            Fungsi <span className="text-blue-500">Linear</span>
          </h3>
          <div className="space-y-1">
            <h4 className="text-xl font-semibold">
              Apa itu fungsi <span className="text-blue-500">linear?</span>
            </h4>
            <p className="">
              fungsi yang membentuk garis lurus ketika digambarkan dalam bidang
              koordinat.
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
                  <span className="font-bold">b</span> adalah intersep atau
                  titik potong garis dengan sumbu-y, yaitu nilai f(x) saat x=0.
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
                  Grafik berupa garis lurus: Fungsi ini menghasilkan garis lurus
                  pada grafik kartesius.
                </li>
                <li>
                  Gradien (Kemiringan): Menentukan apakah garis akan naik (jika
                  a{'>'}0), turun (jika a{'<'}0), atau mendatar (jika a=0).
                </li>
                <li>
                  Hubungan proporsionalitas: Fungsi linear menunjukkan hubungan
                  yang proporsional atau konstan antara x dan f(x).
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
