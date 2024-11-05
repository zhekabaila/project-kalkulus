'use client'

import { useEffect, useRef, useState } from 'react'

const Calculator = () => {
  const ggbElementRef = useRef(null)
  const [ggbApplet, setGgbApplet] = useState(null)
  const [inputFunction, setInputFunction] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined' && !ggbApplet) {
      const script = document.createElement('script')
      script.src = 'https://www.geogebra.org/apps/deployggb.js'
      script.async = true
      script.onload = () => {
        const params = {
          appName: 'graphing',
          width: 800,
          height: 600,
          showToolBar: false,
          showAlgebraInput: false,
          showMenuBar: true,
          showResetIcon: true,
          showHelp: true,
          showInAppHelp: true,
          appletOnLoad: function () {
            setGgbApplet(window.ggbApplet)
          },
        }

        const applet = new window.GGBApplet(params, true)
        applet.inject(ggbElementRef.current)
      }
      document.body.appendChild(script)
    }
  }, [ggbApplet])

  const updateGraph = () => {
    if (ggbApplet && inputFunction) {
      ggbApplet.evalCommand(`f: ${inputFunction}`)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 border-t-4 border-t-blue-500">
      <h1 className="text-2xl font-bold mb-4">Calculator</h1>

      <input
        type="text"
        value={inputFunction}
        onChange={(e) => setInputFunction(e.target.value)}
        placeholder="Enter function, e.g., sin(x)"
        className="border border-gray-300 p-2 rounded mb-2"
      />
      <button
        onClick={updateGraph}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Plot
      </button>

      <div id="ggb-element" ref={ggbElementRef} className="mt-6"></div>
    </div>
  )
}

export default Calculator
