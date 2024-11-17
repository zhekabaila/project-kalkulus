'use client'
import { useTheme } from '@/contexts/themeContext'
import { useState } from 'react'
import { AiOutlineSend } from 'react-icons/ai'

const Questions = () => {
  const correctAnswers = {
    soal_1: 'A',
    soal_2: 'C',
    soal_3: 'D',
  }
  const [answer, setAnswer] = useState({
    soal_1: '',
    soal_2: '',
    soal_3: '',
  })
  const [showCheckAnswer, setShowCheckAnswer] = useState<boolean>(false)
  const { darkMode } = useTheme()

  const setValue = (questionNumber: 1 | 2 | 3, value: string) => {
    setAnswer((currentValue) => {
      return {
        ...currentValue,
        [`soal_${questionNumber}`]: value,
      }
    })
  }

  return (
    <section
      id="soal"
      className="bg-center bg-cover bg-no-repeat px-4 py-20 lg:p-36 border-t-4 border-t-blue-500 dark:border-t-jeruk"
      style={{
        backgroundImage: `url('/images/ttten${darkMode ? '-dark' : ''}.svg')`,
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setShowCheckAnswer(true)
        }}
      >
        <ul className="space-y-9">
          <li className="relative space-y-7 lg:space-y-7 bg-gray-200/20 dark:bg-gray-600/20 backdrop-blur-md rounded-xl border-2 border-gray-300/30 dark:border-gray-600/30 p-6 lg:p-16">
            <h4>Tentukan periode fungsi y = 2 + 5 cos 2x</h4>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <li className=" flex items-center gap-x-3">
                <label
                  htmlFor="pilihan_A_1"
                  className="flex items-center gap-x-4 transition-all duration-300 ease-in-out p-3 rounded-lg bg-white dark:bg-shadow has-[:checked]:bg-primary dark:has-[:checked]:bg-jeruk has-[:checked]:text-sun w-full cursor-pointer"
                >
                  <input
                    type="radio"
                    name="soal_1"
                    value="A"
                    onChange={(e) => setValue(1, e.target.value)}
                    required
                    id="pilihan_A_1"
                    className="accent-primary dark:accent-white"
                  />
                  180&deg;
                </label>
              </li>
              <li className=" flex items-center gap-x-3">
                <label
                  htmlFor="pilihan_B_1"
                  className="flex items-center gap-x-4 transition-all duration-300 ease-in-out p-3 rounded-lg bg-white dark:bg-shadow has-[:checked]:bg-primary dark:has-[:checked]:bg-jeruk has-[:checked]:text-sun w-full cursor-pointer"
                >
                  <input
                    type="radio"
                    name="soal_1"
                    value="B"
                    onChange={(e) => setValue(1, e.target.value)}
                    required
                    id="pilihan_B_1"
                    className="accent-primary dark:accent-white"
                  />
                  240&deg;
                </label>
              </li>
              <li className=" flex items-center gap-x-3">
                <label
                  htmlFor="pilihan_C_1"
                  className="flex items-center gap-x-4 transition-all duration-300 ease-in-out p-3 rounded-lg bg-white dark:bg-shadow has-[:checked]:bg-primary dark:has-[:checked]:bg-jeruk has-[:checked]:text-sun w-full cursor-pointer"
                >
                  <input
                    type="radio"
                    name="soal_1"
                    value="C"
                    onChange={(e) => setValue(1, e.target.value)}
                    required
                    id="pilihan_C_1"
                    className="accent-primary dark:accent-white"
                  />
                  120&deg;
                </label>
              </li>
              <li className=" flex items-center gap-x-3">
                <label
                  htmlFor="pilihan_D_1"
                  className="flex items-center gap-x-4 transition-all duration-300 ease-in-out p-3 rounded-lg bg-white dark:bg-shadow has-[:checked]:bg-primary dark:has-[:checked]:bg-jeruk has-[:checked]:text-sun w-full cursor-pointer"
                >
                  <input
                    type="radio"
                    name="soal_1"
                    value="D"
                    onChange={(e) => setValue(1, e.target.value)}
                    required
                    id="pilihan_D_1"
                    className="accent-primary dark:accent-white"
                  />
                  140&deg;
                </label>
              </li>
            </ul>
          </li>

          <li className="relative space-y-7 lg:space-y-7 bg-gray-200/20 dark:bg-gray-600/20 backdrop-blur-md rounded-xl border-2 border-gray-300/30 dark:border-gray-600/30 p-6 lg:p-16">
            <h4>Nilai maksimum fungsi y = -8 cos (x - 10)</h4>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <li className=" flex items-center gap-x-3">
                <label
                  htmlFor="pilihan_A_2"
                  className="flex items-center gap-x-4 transition-all duration-300 ease-in-out p-3 rounded-lg bg-white dark:bg-shadow has-[:checked]:bg-primary dark:has-[:checked]:bg-jeruk has-[:checked]:text-sun w-full cursor-pointer"
                >
                  <input
                    type="radio"
                    name="soal_2"
                    value="A"
                    onChange={(e) => setValue(2, e.target.value)}
                    required
                    id="pilihan_A_2"
                    className="accent-primary dark:accent-white"
                  />
                  -8
                </label>
              </li>
              <li className=" flex items-center gap-x-3">
                <label
                  htmlFor="pilihan_B_2"
                  className="flex items-center gap-x-4 transition-all duration-300 ease-in-out p-3 rounded-lg bg-white dark:bg-shadow has-[:checked]:bg-primary dark:has-[:checked]:bg-jeruk has-[:checked]:text-sun w-full cursor-pointer"
                >
                  <input
                    type="radio"
                    name="soal_2"
                    value="B"
                    onChange={(e) => setValue(2, e.target.value)}
                    required
                    id="pilihan_B_2"
                    className="accent-primary dark:accent-white"
                  />
                  0
                </label>
              </li>
              <li className=" flex items-center gap-x-3">
                <label
                  htmlFor="pilihan_C_2"
                  className="flex items-center gap-x-4 transition-all duration-300 ease-in-out p-3 rounded-lg bg-white dark:bg-shadow has-[:checked]:bg-primary dark:has-[:checked]:bg-jeruk has-[:checked]:text-sun w-full cursor-pointer"
                >
                  <input
                    type="radio"
                    name="soal_2"
                    value="C"
                    onChange={(e) => setValue(2, e.target.value)}
                    required
                    id="pilihan_C_2"
                    className="accent-primary dark:accent-white"
                  />
                  8
                </label>
              </li>
              <li className=" flex items-center gap-x-3">
                <label
                  htmlFor="pilihan_D_2"
                  className="flex items-center gap-x-4 transition-all duration-300 ease-in-out p-3 rounded-lg bg-white dark:bg-shadow has-[:checked]:bg-primary dark:has-[:checked]:bg-jeruk has-[:checked]:text-sun w-full cursor-pointer"
                >
                  <input
                    type="radio"
                    name="soal_2"
                    value="D"
                    onChange={(e) => setValue(2, e.target.value)}
                    required
                    id="pilihan_D_2"
                    className="accent-primary dark:accent-white"
                  />
                  10
                </label>
              </li>
            </ul>
          </li>

          <li className="relative space-y-7 lg:space-y-7 bg-gray-200/20 dark:bg-gray-600/20 backdrop-blur-md rounded-xl border-2 border-gray-300/30 dark:border-gray-600/30 p-6 lg:p-16">
            <h4>
              Pada interval 0&deg; &le; x &le; 120&deg;, titik maksimum dari y =
              2 sin (3x – 30) adalah…
            </h4>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <li className=" flex items-center gap-x-3">
                <label
                  htmlFor="pilihan_A_3"
                  className="flex items-center gap-x-4 transition-all duration-300 ease-in-out p-3 rounded-lg bg-white dark:bg-shadow has-[:checked]:bg-primary dark:has-[:checked]:bg-jeruk has-[:checked]:text-sun w-full cursor-pointer"
                >
                  <input
                    type="radio"
                    name="soal_3"
                    value="A"
                    onChange={(e) => setValue(3, e.target.value)}
                    required
                    id="pilihan_A_3"
                    className="accent-primary dark:accent-white"
                  />
                  (90&deg;, 1)
                </label>
              </li>
              <li className=" flex items-center gap-x-3">
                <label
                  htmlFor="pilihan_B_3"
                  className="flex items-center gap-x-4 transition-all duration-300 ease-in-out p-3 rounded-lg bg-white dark:bg-shadow has-[:checked]:bg-primary dark:has-[:checked]:bg-jeruk has-[:checked]:text-sun w-full cursor-pointer"
                >
                  <input
                    type="radio"
                    name="soal_3"
                    value="B"
                    onChange={(e) => setValue(3, e.target.value)}
                    required
                    id="pilihan_B_3"
                    className="accent-primary dark:accent-white"
                  />
                  (90&deg;, 2)
                </label>
              </li>
              <li className=" flex items-center gap-x-3">
                <label
                  htmlFor="pilihan_C_3"
                  className="flex items-center gap-x-4 transition-all duration-300 ease-in-out p-3 rounded-lg bg-white dark:bg-shadow has-[:checked]:bg-primary dark:has-[:checked]:bg-jeruk has-[:checked]:text-sun w-full cursor-pointer"
                >
                  <input
                    type="radio"
                    name="soal_3"
                    value="C"
                    onChange={(e) => setValue(3, e.target.value)}
                    required
                    id="pilihan_C_3"
                    className="accent-primary dark:accent-white"
                  />
                  (30&deg;, 2)
                </label>
              </li>
              <li className=" flex items-center gap-x-3">
                <label
                  htmlFor="pilihan_D_3"
                  className="flex items-center gap-x-4 transition-all duration-300 ease-in-out p-3 rounded-lg bg-white dark:bg-shadow has-[:checked]:bg-primary dark:has-[:checked]:bg-jeruk has-[:checked]:text-sun w-full cursor-pointer"
                >
                  <input
                    type="radio"
                    name="soal_3"
                    value="D"
                    onChange={(e) => setValue(3, e.target.value)}
                    required
                    id="pilihan_D_3"
                    className="accent-primary dark:accent-white"
                  />
                  (40&deg;, 2)
                </label>
              </li>
            </ul>
          </li>

          <li>
            <button
              type="submit"
              className="group flex items-center gap-x-5 transition-all duration-300 ease-in-out py-3 px-5 rounded-lg bg-white/60 dark:bg-black/20 hover:dark:bg-jeruk hover:bg-primary border-2 border-primary dark:border-jeruk"
            >
              <span className="text-base font-semibold text-primary dark:text-jeruk group-hover:text-sun">
                Submit
              </span>
              <AiOutlineSend
                size={24}
                className="text-primary dark:text-jeruk group-hover:text-sun"
              />
            </button>
          </li>

          {showCheckAnswer && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="relative space-y-3 lg:space-y-7 bg-white/20 dark:bg-gray-600/20 backdrop-blur-md rounded-xl border-2 border-white/30 dark:border-gray-600/30 p-6 lg:p-16">
                <div className="space-y-5">
                  <h4 className="text-primary dark:text-jeruk font-semibold">
                    Soal No. 1
                  </h4>

                  <div className="space-y-3">
                    <p className="">
                      {correctAnswers.soal_1 === answer.soal_1
                        ? 'Jawaban anda benar, yaitu 180°'
                        : 'Jawaban yang benar adalah 180°'}
                    </p>
                    <div className="grid grid-cols-1 gap-y-2">
                      <p className="">Penjelasan :</p>
                      <p className=" flex items-center gap-x-2">
                        Periode =
                        <span className="flex flex-col items-center justify-center text-center">
                          <span className="">360&deg;</span>
                          <span className="border-t border-t-[#3d4048] dark:border-t-sun w-full">
                            n
                          </span>
                        </span>
                      </p>
                      <p className=" flex items-center gap-x-2">
                        Periode =
                        <span className="flex flex-col items-center justify-center text-center">
                          <span className="">360&deg;</span>
                          <span className="border-t border-t-[#3d4048] dark:border-t-sun w-full">
                            2
                          </span>
                        </span>
                      </p>
                      <p className=" flex items-center gap-x-2">
                        Periode = <span>180&deg;</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative space-y-3 lg:space-y-7 bg-white/20 dark:bg-gray-600/20 backdrop-blur-md rounded-xl border-2 border-white/30 dark:border-gray-600/30 p-6 lg:p-16">
                <div className="space-y-5">
                  <h4 className="text-primary dark:text-jeruk font-semibold">
                    Soal No. 2
                  </h4>
                  <div className="space-y-3">
                    <p className="">
                      {correctAnswers.soal_2 === answer.soal_2
                        ? 'Jawaban anda benar, yaitu 8'
                        : 'Jawaban yang benar adalah 8'}
                    </p>
                    <div className="grid grid-cols-1 gap-y-2">
                      <p className="">Penjelasan :</p>
                      <p className=" flex items-center gap-x-2">
                        y = -8 cos (x - 10)
                      </p>
                      <p className=" flex items-center gap-x-2">
                        Nilai Minimum = -8
                      </p>
                      <p className=" flex items-center gap-x-2">
                        Nilai Maksimum = 8
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative space-y-3 lg:space-y-7 bg-white/20 dark:bg-gray-600/20 backdrop-blur-md rounded-xl border-2 border-white/30 dark:border-gray-600/30 p-6 lg:p-16">
                <div className="space-y-5">
                  <h4 className="text-primary dark:text-jeruk font-semibold">
                    Soal No. 3
                  </h4>
                  <div className="space-y-3">
                    <p className="">
                      {correctAnswers.soal_3 === answer.soal_3
                        ? 'Jawaban anda benar, yaitu (40°, 2)'
                        : 'Jawaban yang benar adalah (40°, 2)'}
                    </p>
                    <div className="grid grid-cols-1 gap-y-2">
                      <p className="">Penjelasan :</p>
                      <p className=" flex items-center gap-x-2">
                        sin(3x - 30) = 1
                      </p>
                      <p className=" flex items-center gap-x-2">
                        sin(3x - 30) = sin 90&deg;
                      </p>
                      <p className=" flex items-center gap-x-2">
                        3x - 30 = 90&deg;
                      </p>
                      <p className=" flex items-center gap-x-2">
                        3x = 120&deg;
                      </p>
                      <p className=" flex items-center gap-x-2">x = 40&deg;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </ul>
      </form>
    </section>
  )
}

export default Questions
