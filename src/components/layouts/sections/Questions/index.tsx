'use client'

import { useState } from 'react'
import { AiOutlineSend } from 'react-icons/ai'

//? Katex
import 'katex/dist/katex.min.css'
import TeX from '@matejmazur/react-katex'

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

  const setValue = (questionNumber: 1 | 2 | 3, value: string) => {
    setShowCheckAnswer(false)
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
      className="bg-center bg-cover bg-opacity-20 bg-no-repeat px-4 py-20 lg:p-36 border-t-4 border-t-blue-500 dark:border-t-jeruk"
      style={{
        backgroundImage: `url('/images/bbburst.svg')`,
      }}
    >
      <div className="mb-10 lg:mb-20">
        <h2 className="text-2xl lg:text-3xl font-semibold dark:text-sun">
          Latihan Soal
        </h2>
        <div className="bg-primary dark:bg-jeruk h-1.5 w-28 mt-2"></div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setShowCheckAnswer(true)
        }}
      >
        <ul className="space-y-9">
          <li className="relative space-y-7 lg:space-y-7 bg-slate-300/20 dark:bg-gray-600/20 backdrop-blur-lg rounded-xl border-2 border-slate-400/20 dark:border-gray-600/30 p-6 lg:p-16">
            <h4 className="text-base lg:text-lg font-semibold">
              1. Tentukan periode fungsi{' '}
              <TeX math="y = 2 + 5 \space cos \space 2x" block={false} />
            </h4>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <li className="flex items-center gap-x-3">
                <label
                  htmlFor="pilihan_A_1"
                  className="text-sm lg:text-base flex items-center gap-x-4 transition-all duration-300 ease-in-out p-3 rounded-lg bg-white dark:bg-shadow has-[:checked]:bg-primary dark:has-[:checked]:bg-jeruk has-[:checked]:text-sun w-full cursor-pointer"
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
                  <TeX math="180&deg;" block={false} />
                </label>
              </li>
              <li className=" flex items-center gap-x-3">
                <label
                  htmlFor="pilihan_B_1"
                  className="text-sm lg:text-base flex items-center gap-x-4 transition-all duration-300 ease-in-out p-3 rounded-lg bg-white dark:bg-shadow has-[:checked]:bg-primary dark:has-[:checked]:bg-jeruk has-[:checked]:text-sun w-full cursor-pointer"
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
                  <TeX math="240&deg;" block={false} />
                </label>
              </li>
              <li className=" flex items-center gap-x-3">
                <label
                  htmlFor="pilihan_C_1"
                  className="text-sm lg:text-base flex items-center gap-x-4 transition-all duration-300 ease-in-out p-3 rounded-lg bg-white dark:bg-shadow has-[:checked]:bg-primary dark:has-[:checked]:bg-jeruk has-[:checked]:text-sun w-full cursor-pointer"
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
                  <TeX math="120&deg;" block={false} />
                </label>
              </li>
              <li className=" flex items-center gap-x-3">
                <label
                  htmlFor="pilihan_D_1"
                  className="text-sm lg:text-base flex items-center gap-x-4 transition-all duration-300 ease-in-out p-3 rounded-lg bg-white dark:bg-shadow has-[:checked]:bg-primary dark:has-[:checked]:bg-jeruk has-[:checked]:text-sun w-full cursor-pointer"
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
                  <TeX math="140&deg;" block={false} />
                </label>
              </li>
            </ul>
          </li>

          <li className="relative space-y-7 lg:space-y-7 bg-slate-300/20 dark:bg-gray-600/20 backdrop-blur-lg rounded-xl border-2 border-slate-400/20 dark:border-gray-600/30 p-6 lg:p-16">
            <h4 className="text-base lg:text-lg font-semibold">
              2. Nilai maksimum fungsi{' '}
              <TeX math="y = -8 \space cos \space (x - 10)" block={false} />
            </h4>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <li className="flex items-center gap-x-3">
                <label
                  htmlFor="pilihan_A_2"
                  className="text-sm lg:text-base flex items-center gap-x-4 transition-all duration-300 ease-in-out p-3 rounded-lg bg-white dark:bg-shadow has-[:checked]:bg-primary dark:has-[:checked]:bg-jeruk has-[:checked]:text-sun w-full cursor-pointer"
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
                  <TeX math="-8" block={false} />
                </label>
              </li>
              <li className=" flex items-center gap-x-3">
                <label
                  htmlFor="pilihan_B_2"
                  className="text-sm lg:text-base flex items-center gap-x-4 transition-all duration-300 ease-in-out p-3 rounded-lg bg-white dark:bg-shadow has-[:checked]:bg-primary dark:has-[:checked]:bg-jeruk has-[:checked]:text-sun w-full cursor-pointer"
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
                  <TeX math="0" block={false} />
                </label>
              </li>
              <li className=" flex items-center gap-x-3">
                <label
                  htmlFor="pilihan_C_2"
                  className="text-sm lg:text-base flex items-center gap-x-4 transition-all duration-300 ease-in-out p-3 rounded-lg bg-white dark:bg-shadow has-[:checked]:bg-primary dark:has-[:checked]:bg-jeruk has-[:checked]:text-sun w-full cursor-pointer"
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
                  <TeX math="8" block={false} />
                </label>
              </li>
              <li className=" flex items-center gap-x-3">
                <label
                  htmlFor="pilihan_D_2"
                  className="text-sm lg:text-base flex items-center gap-x-4 transition-all duration-300 ease-in-out p-3 rounded-lg bg-white dark:bg-shadow has-[:checked]:bg-primary dark:has-[:checked]:bg-jeruk has-[:checked]:text-sun w-full cursor-pointer"
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
                  <TeX math="10" block={false} />
                </label>
              </li>
            </ul>
          </li>

          <li className="relative space-y-7 lg:space-y-7 bg-slate-300/20 dark:bg-gray-600/20 backdrop-blur-lg rounded-xl border-2 border-slate-400/20 dark:border-gray-600/30 p-6 lg:p-16">
            <h4 className="text-base lg:text-lg font-semibold">
              3. Pada interval{' '}
              <TeX math="0&deg; \le x \le 120&deg;" block={false} />, titik
              maksimum dari{' '}
              <TeX
                math="y = 2 \space sin \space (3x \space – \space 30)"
                block={false}
              />{' '}
              adalah…
            </h4>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <li className=" flex items-center gap-x-3">
                <label
                  htmlFor="pilihan_A_3"
                  className="text-sm lg:text-base flex items-center gap-x-4 transition-all duration-300 ease-in-out p-3 rounded-lg bg-white dark:bg-shadow has-[:checked]:bg-primary dark:has-[:checked]:bg-jeruk has-[:checked]:text-sun w-full cursor-pointer"
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
                  <TeX math="(90&deg;, 1)" block={false} />
                </label>
              </li>
              <li className=" flex items-center gap-x-3">
                <label
                  htmlFor="pilihan_B_3"
                  className="text-sm lg:text-base flex items-center gap-x-4 transition-all duration-300 ease-in-out p-3 rounded-lg bg-white dark:bg-shadow has-[:checked]:bg-primary dark:has-[:checked]:bg-jeruk has-[:checked]:text-sun w-full cursor-pointer"
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
                  <TeX math="(90&deg;, 2)" block={false} />
                </label>
              </li>
              <li className=" flex items-center gap-x-3">
                <label
                  htmlFor="pilihan_C_3"
                  className="text-sm lg:text-base flex items-center gap-x-4 transition-all duration-300 ease-in-out p-3 rounded-lg bg-white dark:bg-shadow has-[:checked]:bg-primary dark:has-[:checked]:bg-jeruk has-[:checked]:text-sun w-full cursor-pointer"
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
                  <TeX math="(30&deg;, 1)" block={false} />
                </label>
              </li>
              <li className=" flex items-center gap-x-3">
                <label
                  htmlFor="pilihan_D_3"
                  className="text-sm lg:text-base flex items-center gap-x-4 transition-all duration-300 ease-in-out p-3 rounded-lg bg-white dark:bg-shadow has-[:checked]:bg-primary dark:has-[:checked]:bg-jeruk has-[:checked]:text-sun w-full cursor-pointer"
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
                  <TeX math="(40&deg;, 2)" block={false} />
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
              <div className="relative space-y-3 lg:space-y-7 bg-white/20 dark:bg-gray-600/20 backdrop-blur-lg rounded-xl border-2 border-white/30 dark:border-gray-600/30 p-6 lg:p-16">
                <div className="space-y-5">
                  <h4 className="text-base lg:text-lg text-primary dark:text-jeruk font-semibold">
                    Soal No. 1
                  </h4>

                  <div className="space-y-3 text-sm lg:text-base">
                    <p className="">
                      {correctAnswers.soal_1 === answer.soal_1
                        ? 'Jawaban anda benar, yaitu 180°'
                        : 'Jawaban yang benar adalah 180°'}
                    </p>
                    <div className="grid grid-cols-1 gap-y-2">
                      <p className="">Penjelasan :</p>
                      <p className=" flex items-center gap-x-2">
                        Periode = <TeX math="360&deg; \over n" block={false} />
                      </p>
                      <p className=" flex items-center gap-x-2">
                        Periode =
                        <TeX math="360&deg; \over 2" block={false} />
                      </p>
                      <p className=" flex items-center gap-x-2">
                        Periode = <TeX math="180&deg;" block={false} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative space-y-3 lg:space-y-7 bg-white/20 dark:bg-gray-600/20 backdrop-blur-lg rounded-xl border-2 border-white/30 dark:border-gray-600/30 p-6 lg:p-16">
                <div className="space-y-5">
                  <h4 className="text-base lg:text-lg text-primary dark:text-jeruk font-semibold">
                    Soal No. 2
                  </h4>
                  <div className="space-y-3 text-sm lg:text-base">
                    <p className="">
                      {correctAnswers.soal_2 === answer.soal_2
                        ? 'Jawaban anda benar, yaitu 8'
                        : 'Jawaban yang benar adalah 8'}
                    </p>
                    <div className="grid grid-cols-1 gap-y-2">
                      <p className="">Penjelasan :</p>
                      <p className=" flex items-center gap-x-2">
                        <TeX
                          math="y = -8 \space cos \space (x - 10)"
                          block={false}
                        />
                      </p>
                      <p className=" flex items-center gap-x-2">
                        Nilai Minimum = <TeX math="-8" block={false} />
                      </p>
                      <p className=" flex items-center gap-x-2">
                        Nilai Maksimum = <TeX math="8" block={false} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative space-y-3 lg:space-y-7 bg-white/20 dark:bg-gray-600/20 backdrop-blur-lg rounded-xl border-2 border-white/30 dark:border-gray-600/30 p-6 lg:p-16">
                <div className="space-y-5">
                  <h4 className="text-base lg:text-lg text-primary dark:text-jeruk font-semibold">
                    Soal No. 3
                  </h4>
                  <div className="space-y-3 text-sm lg:text-base">
                    <p className="">
                      {correctAnswers.soal_3 === answer.soal_3
                        ? 'Jawaban anda benar, yaitu (40°, 2)'
                        : 'Jawaban yang benar adalah (40°, 2)'}
                    </p>
                    <div className="grid grid-cols-1 gap-y-2">
                      <p className="">Penjelasan :</p>
                      <p className=" flex items-center gap-x-2">
                        <TeX math="sin(3x - 30) = 1" block={false} />
                      </p>
                      <p className=" flex items-center gap-x-2">
                        <TeX
                          math="sin(3x - 30) = sin \space 90&deg;"
                          block={false}
                        />
                      </p>
                      <p className=" flex items-center gap-x-2">
                        <TeX math="3x - 30 = 90&deg;" block={false} />
                      </p>
                      <p className=" flex items-center gap-x-2">
                        <TeX math="3x = 120&deg;" block={false} />
                      </p>
                      <p className=" flex items-center gap-x-2">
                        <TeX math="x = 40&deg;" block={false} />
                      </p>
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
