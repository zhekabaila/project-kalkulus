import Image from 'next/image'

const Rasional = () => {
  return (
    <div
      className="col-span-2 space-y-9 bg-white/20 backdrop-blur-md rounded-xl border-2 border-white/30 p-16"
      id="fungsi-linear"
    >
      <div className="flex flex-row-reverse gap-x-20">
        <div className="basis-1/2 space-y-6 text-lg font-base text-justify">
          <h3 className="text-3xl font-semibold">
            Fungsi <span className="text-blue-500">Rasional</span>
          </h3>
          <div className="space-y-1">
            <h4 className="text-xl font-semibold">
              Apa itu fungsi <span className="text-blue-500">Rasional?</span>
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
                f(x) = p(x)/q(X)
              </p>
              <h5 className="mt-5">Keterangan:</h5>
              <ul className="list-outside list-disc">
                <li>
                  <span className="font-bold">p(X)</span> dan <span>q(X)</span>{' '}
                  adalah polinomial dalam variabel x
                </li>
                <li>
                  <span className="font-bold">q(X)!=0</span> karena pembagi
                  tidak boleh nol dalam matematika.
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-1">
            <h4 className="text-xl font-semibold">
              Karakteristik Fungsi Rasional.
            </h4>
            <div>
              <ul className="list-outside list-disc">
                <li>
                  <span className="font-bold">Asimtot:</span> Fungsi rasional
                  sering memiliki asimtot vertikal dan asimtot horizontal.
                </li>
                <li>
                  <span className="font-bold">Asimtot Vertikal</span>
                  terjadi pada nilai x yang menyebabkan q(x)=0 (penyebut nol),
                  di mana grafik fungsi akan mendekati tetapi tidak menyentuh
                  garis tersebut.
                </li>
                <li>
                  <span className="font-bold">Asimtot Horizontal</span>
                  bergantung pada derajat polinomial p(x) dan q(x) dan
                  menentukan perilaku fungsi saat x mendekati tak hingga.
                </li>
                <li>
                  <span className="font-bold">Domain Terbatas:</span>
                  Domain dari fungsi rasional mencakup semua bilangan real
                  kecuali nilai-nilai yang membuat q(x)=0 karena pembagian
                  dengan nol tidak didefinisikan.
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

export default Rasional
