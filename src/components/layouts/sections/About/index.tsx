import Image from "next/image";

const About = () => {
  return (
    <section
      className="relative flex items-center justify-center px-36 min-h-screen border-t-4 border-t-blue-500 py-20"
      id="tentang"
    >
      <div className="absolute top-0 right-0 -z-40 rotate-180 transform scale-y-[-1]">
        <Image src="/icons/split.svg" width={200} height={200} alt="" />
      </div>
      <div>
        <h2 className="text-center text-5xl font-bold">Tentang</h2>
        <div className="grid grid-cols-2 gap-x-10">
          <div className="mt-24">
            <h3 className="text-2xl font-medium text-blue-500">
              Latar Belakang
            </h3>
            <p className="text-lg font-medium mt-3">
              Pembuatan website ini dilatarbelakangi dengan adanya projekan
              tugas akhir kalkulus yang dilakukan secara berkelompok, dengan
              ketentuan membebaskan setiap kelompok untuk membuat projekan apa
              saja, sebagai contoh membuat aplikasi, website dan lain lain yang
              berhubungan dengan kalkulus dan perkuliahan berbasis IT. Disini
              kelompok kami memutuskan untuk membuat suatu wibesite yang berisi
              tentang materi pembelajaran pada matakuliah kalkulus 1, yaitu
              materi Fungsi.
            </p>
          </div>
          <div className="mt-20">
            <h3 className="text-2xl font-medium text-blue-500">
              Fungsi Website
            </h3>
            <p className="text-lg font-medium mt-3">
              Website ini berfungsi sebagai media digital yang mampu meyediakan
              informasi materi fungsi Kakulus 1 secara lengkap, yang apat di
              akses secara cepat, mudah diakses kapan saja dan dimana saja.
              Website ini juga sebagai sarana pembelajaran kepada mahasiswa yang
              memiliki matakuliah kakulus 1 yaitu materi fungsi. Selain itu,
              website ini juga memiliki kalkulator, yang memiliki fitur yang
              lengkap untuk menghitung sebuah fungsi dan dikalkulator di website
              ini juga bisa bisa membuatkan suatu grafik fungsi yang bisa kalian
              pakai sebagai pengecekan grafik dan membuat grafik dari suatu
              fungsi yang kalian input pada kalkulator.
            </p>
          </div>
          <div className="mt-20">
            <h3 className="text-2xl font-medium text-blue-500">
              Ada Apa Saja Di sini?
            </h3>
            <p className="text-lg font-medium mt-3">
              Di website ini terdapat suatu informasi yang dapat user cari
              dengan cara yang mudah, cepat dan dapat di akses dimana saja.
              Untuk mahasiswa atau siswa yang mendapatkan kesulitan dalam
              memahami materi fungsi dalam perkuliahan atau dalam kelas. Di
              website ini kalian akan mendapatkan sebuah pejelasan materi, rumus
              rumus apa saja yang ada pada materi fungsi, contoh grafik, dan
              contoh soal. Selain itu juga terdapat kalkulator yang dapat
              menunjang pembelajaran padamateri fungsi. Website ini juga
              menyediakan latihan soal yang berupa pilihan ganda berikut dengan
              kunci jawaban dan pembahasannya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
