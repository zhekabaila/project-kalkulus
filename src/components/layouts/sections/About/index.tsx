import AboutCard from '@/components/common/Cards/About'

const About = () => {
  return (
    <section
      className="relative bg-center bg-cover bg-no-repeat flex items-center justify-center px-4 py-20 lg:p-36 min-h-screen border-t-4 border-t-blue-500 dark:border-t-jeruk"
      style={{
        backgroundImage: `url('/images/linear-gradient.svg')`,
      }}
      id="tentang"
    >
      <div>
        <div className="relative grid grid-cols-2 gap-10 lg:gap-20">
          <div className="hidden lg:block absolute left-1/2 top-0 w-1 h-full bg-primary dark:bg-jeruk"></div>
          <AboutCard
            title="Latar"
            highlightTitle="Belakang"
            description="Pembuatan website ini dilatarbelakangi dengan adanya projekan tugas akhir kalkulus yang dilakukan secara berkelompok, dengan ketentuan membebaskan setiap kelompok untuk membuat projekan apa saja, sebagai contoh  membuat aplikasi, website dan lain lain yang berhubungan dengan kalkulus dan perkuliahan berbasis IT. Disini kelompok kami memutuskan untuk membuat suatu wibesite yang berisi tentang materi pembelajaran pada matakuliah kalkulus 1, yaitu materi Fungsi."
            row={1}
          />

          <AboutCard
            title="Fungsi"
            highlightTitle="Website"
            description="Website ini berfungsi sebagai media digital yang mampu meyediakan informasi materi fungsi Kakulus 1  secara lengkap, yang apat di akses secara  cepat, mudah diakses kapan saja dan dimana saja. Website ini juga sebagai sarana pembelajaran kepada mahasiswa yang memiliki matakuliah kakulus 1 yaitu materi fungsi. Selain itu, website ini juga memiliki kalkulator, yang memiliki fitur yang lengkap untuk menghitung sebuah fungsi dan dikalkulator di website ini juga bisa bisa membuatkan suatu grafik fungsi yang bisa kalian pakai sebagai pengecekan grafik dan membuat grafik dari suatu fungsi yang kalian input pada kalkulator."
            row={2}
          />

          <AboutCard
            title="Ada ada apa saja"
            highlightTitle="disini?"
            description="Di  website ini terdapat suatu informasi yang dapat user cari dengan cara yang mudah, cepat dan dapat di akses dimana saja. Untuk mahasiswa atau siswa yang mendapatkan kesulitan dalam memahami materi fungsi dalam perkuliahan atau dalam kelas. Di website ini kalian akan mendapatkan sebuah pejelasan materi, rumus rumus apa saja yang ada pada materi fungsi, contoh grafik, dan contoh soal. Selain itu juga terdapat kalkulator yang dapat menunjang pembelajaran padamateri fungsi. Website ini juga menyediakan latihan soal yang berupa pilihan ganda  berikut dengan kunci jawaban dan pembahasannya."
            row={3}
          />
        </div>
      </div>
    </section>
  )
}

export default About
