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
      <div className="flex items-center gap-x-8 mb-8">
        <button
          className="bg-primary dark:bg-jeruk px-6 py-2.5 rounded-md text-sun font-semibold"
          type="button"
          onClick={() => setGeogebraCalculator((e) => !e)}
        >
          {geogebraCalculator ? 'Geogebra' : 'Manual'}
        </button>
      </div>
      {geogebraCalculator ? <GeogebraCalculator /> : <ManualCalculator />}
    </section>
  )
}

export default Calculator
