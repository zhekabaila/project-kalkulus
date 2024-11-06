import Image from 'next/image'

export const Eksponensial = () => {
  return (
    <div
      className="col-span-2 space-y-9 bg-white/20 backdrop-blur-md rounded-xl border-2 border-white/30 p-16"
      id="fungsi-linear"
    >
      <div className="flex flex-row gap-x-20">
        <div className="basis-1/2 space-y-6 text-lg font-base text-justify">
          <h3 className="text-3xl font-semibold">
            Fungsi <span className="text-blue-500">Eksponensial</span>
          </h3>
          <div className="space-y-1">
            <h4 className="text-xl font-semibold">
              Apa itu fungsi{' '}
              <span className="text-blue-500">eksponensial?</span>
            </h4>
            <p>
              adalah fungsi matematika di mana variabelnya berada di posisi
              eksponen atau pangkat.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Bentuk umum</h4>
            <div>
              <p className="inline text-xl font-medium bg-gray-200 p-3 rounded-md">
                f(x) = a . b<sup>x</sup>
              </p>
              <h5 className="mt-5">Keterangan:</h5>
              <ul className="list-outside list-disc">
                <li>
                  <span className="font-bold">a</span> adalah konstanta (disebut
                  juga koefisien awal), yang menentukan nilai awal fungsi ketika
                  <span className="font-bold"> x=0</span>.
                </li>
                <li>
                  <span className="font-bold">b</span> adalah basis (bilangan
                  pokok) dari eksponen. Jika{' '}
                  <span className="font-bold">b{'>'}1</span>, fungsi menunjukkan
                  pertumbuhan eksponensial, sedangkan jika{' '}
                  <span className="font-bold">{'0<b<10'}</span>, fungsi
                  menunjukkan peluruhan eksponensial.
                </li>
                <li>
                  <span className="font-bold">x</span> adalah variabel bebas
                  yang berada di pangkat atau eksponen.
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
                  <span className="font-bold">
                    Pertumbuhan atau Peluruhan Cepat:
                  </span>{' '}
                  Fungsi eksponensial tumbuh atau berkurang sangat cepat. Ketika
                  b{'>'}1, nilai fungsi meningkat pesat seiring dengan
                  bertambahnya x, dan ketika 0{'<'}b{'<'}1, nilai fungsi menurun
                  cepat saat x bertambah.
                </li>
                <li>
                  <span className="font-bold">
                    Nilai f(x) Tidak Pernah Negatif:{' '}
                  </span>
                  Jika a{'>'}0 dan b{'>'}0, maka f(x) tidak akan pernah menjadi
                  negatif atau nol.
                </li>
                <li>
                  <span className="font-bold">
                    Tidak Memiliki Sumbu Simetri:{' '}
                  </span>
                  Fungsi eksponensial tidak memiliki titik balik atau sumbu
                  simetri seperti fungsi kuadrat. Namun, grafik fungsi
                  eksponensial yang mengalami peluruhan mendekati sumbu x (tapi
                  tidak pernah menyentuhnya) saat x mendekati tak hingga.
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
