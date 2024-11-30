'use client'

import GeogebraCalculator from '@/components/common/Calculators/Geogebra'
import ManualCalculator from '@/components/common/Calculators/Manual'
import { useState } from 'react'

const Calculator = () => {
  const [geogebraCalculator, setGeogebraCalculator] = useState(true)

  return (
    <section
      id="kalkulator"
      className="px-4 py-20 lg:p-36 border-t-4 border-t-blue-500 dark:border-t-jeruk"
    >
      <div className="mb-10 lg:mb-20">
        <h2 className="text-2xl lg:text-3xl font-semibold dark:text-sun">
          Kalkulator
        </h2>
        <div className="bg-primary dark:bg-jeruk h-1.5 w-28 mt-2"></div>
      </div>
      <div className="flex items-center gap-x-8 mb-8 w-full lg:w-auto">
        <button
          className="relative grid grid-cols-2 gap-x-4 bg-primary dark:bg-jeruk p-2 rounded-xl text-sun font-medium w-full lg:w-auto"
          onClick={() => setGeogebraCalculator((e) => !e)}
          type="button"
        >
          <p
            className={`text-sun py-2 px-4 ${
              geogebraCalculator ? 'bg-slate-100/30 rounded-lg' : ''
            }`}
          >
            Geogebra
          </p>
          <p
            className={`text-sun py-2 px-4 ${
              !geogebraCalculator ? 'bg-slate-100/30 rounded-lg' : ''
            }`}
          >
            Manual
          </p>
        </button>
      </div>
      {geogebraCalculator ? <GeogebraCalculator /> : <ManualCalculator />}
    </section>
  )
}

export default Calculator
