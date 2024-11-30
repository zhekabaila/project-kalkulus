'use client'

import { useTheme } from '@/contexts/themeContext'
import { useRef, useState, useEffect } from 'react'
import { MdZoomIn, MdZoomOut } from 'react-icons/md'

const ManualCalculator = () => {
  const { darkMode } = useTheme()
  const canvasRef = useRef(null)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [showPenjelasan, setShowPenjelasan] = useState(false)
  const [inputs, setInputs] = useState({
    amplitude: '',
    function: 'sin',
    frequency: '',
    phase: '',
    phaseSymbol: '+',
    verticalShift: '',
    verticalShiftSymbol: '+',
  })

  const handleInputChange = (e) => {
    setShowPenjelasan(false)
    const { id, value } = e.target
    setInputs((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const drawGrid = (ctx, width, height) => {
    const step = 20 * zoomLevel

    ctx.clearRect(0, 0, width, height)

    // Draw grid lines
    ctx.strokeStyle = '#444'
    ctx.lineWidth = 0.5

    for (let x = 0; x <= width; x += step) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, height)
      ctx.stroke()
    }
    for (let y = 0; y <= height; y += step) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
      ctx.stroke()
    }

    // Draw axes
    ctx.strokeStyle = '#888'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(width / 2, 0)
    ctx.lineTo(width / 2, height)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(0, height / 2)
    ctx.lineTo(width, height / 2)
    ctx.stroke()
  }

  const drawTrigGraph = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const { function: trigFunction } = inputs

    const amplitude = parseInt(inputs.amplitude) || 1
    const frequency = parseInt(inputs.frequency) || 1
    const phase = parseInt(inputs.phase) || 0
    const verticalShift = parseInt(inputs.verticalShift) || 0

    const width = canvas.width
    const height = canvas.height
    const centerX = width / 2
    const centerY = height / 2

    const scaleX = 50 / zoomLevel
    const scaleY = 50 / zoomLevel

    drawGrid(ctx, width, height)

    ctx.strokeStyle = darkMode ? '#FF6600' : '#3b82f6'
    ctx.lineWidth = 2
    ctx.beginPath()

    for (let x = -centerX; x <= centerX; x++) {
      const angle =
        frequency * (x / scaleX) +
        (['+', '-'].includes(inputs.phaseSymbol)
          ? inputs.phaseSymbol === '+'
            ? parseFloat(phase)
            : -parseFloat(phase)
          : 0)
      let trigValue

      switch (trigFunction.toLowerCase()) {
        case 'sin':
          trigValue = Math.sin(angle)
          break
        case 'cos':
          trigValue = Math.cos(angle)
          break
        case 'tan':
          trigValue = Math.tan(angle)
          break
        default:
          trigValue = 0
          break
      }

      const y =
        amplitude * trigValue * scaleY +
        (inputs.verticalShiftSymbol === '+'
          ? parseFloat(verticalShift)
          : -parseFloat(verticalShift)) *
          scaleY
      const canvasX = centerX + x
      const canvasY = centerY - y

      if (x === -centerX) {
        ctx.moveTo(canvasX, canvasY)
      } else {
        ctx.lineTo(canvasX, canvasY)
      }
    }
    ctx.stroke()
  }

  const zoomIn = () => {
    setZoomLevel((prev) => prev * 1.2)
  }

  const zoomOut = () => {
    setZoomLevel((prev) => prev / 1.2)
  }

  useEffect(() => {
    drawTrigGraph()
  }, [zoomLevel])

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          drawTrigGraph()
          setShowPenjelasan(true)
        }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10"
      >
        <div>
          <canvas
            ref={canvasRef}
            className="border border-gray-700 rounded-lg w-full h-[400px] lg:h-[600px]"
            width="800"
            height="400"
          ></canvas>
          <div className="flex justify-center gap-4 mt-4">
            <button
              type="button"
              onClick={zoomIn}
              className="bg-primary dark:bg-jeruk text-sun font-medium py-2 px-4 rounded-lg transition duration-300"
            >
              <MdZoomOut size={24} className="text-sun" />
            </button>
            <button
              onClick={zoomOut}
              type="button"
              className="bg-primary dark:bg-jeruk text-sun font-medium py-2 px-4 rounded-lg transition duration-300"
            >
              <MdZoomIn size={24} className="text-sun" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="bg-white/10 dark:bg-gray-600/20 backdrop-blur-md rounded-md border-2 border-gray-600/30 p-4 tracking-widest">
            <p>
              y = <b>{inputs.amplitude || 'a'}</b> <b>{inputs.function}</b>(
              <b>{inputs.frequency || 'k'}</b>
              <i>x</i>{' '}
              <b>
                {inputs.phaseSymbol} {inputs.phase || 'b'}
              </b>
              ){' '}
              <b>
                {inputs.verticalShiftSymbol} {inputs.verticalShift || 'c'}
              </b>
            </p>
          </div>
          <div className="flex items-center bg-white/10 dark:bg-gray-600/20 backdrop-blur-md rounded-md border-2 border-gray-600/30 p-4 tracking-widest">
            <p>y = </p>
            <input
              type="text"
              className="ml-2 bg-transparent border-b-2 border-b-primary dark:border-b-jeruk outline-none p-0 font-semibold"
              style={{
                width: `${Math.max(2, inputs.amplitude.length)}ch`,
              }}
              id="amplitude"
              name="amplitude"
              placeholder="a"
              value={inputs.amplitude}
              onChange={handleInputChange}
            />
            <input
              type="text"
              className="ml-3 bg-transparent border-b-2 border-b-primary dark:border-b-jeruk outline-none p-0 font-semibold"
              style={{
                width: `${Math.max(3, inputs.function.length)}ch`,
              }}
              id="function"
              name="function"
              placeholder="sin"
              value={inputs.function}
              onChange={handleInputChange}
            />
            (
            <input
              type="text"
              className="bg-transparent border-b-2 border-b-primary dark:border-b-jeruk outline-none p-0 font-semibold"
              style={{
                width: `${Math.max(2, inputs.frequency.length)}ch`,
              }}
              id="frequency"
              name="frequency"
              placeholder="k"
              value={inputs.frequency}
              onChange={handleInputChange}
            />
            <i>x</i>
            <select
              className="ml-3 bg-transparent border-b-2 border-b-primary dark:border-b-jeruk outline-none p-0 font-semibold"
              style={{
                width: `${Math.max(2, inputs.phaseSymbol.length)}ch`,
              }}
              id="phaseSymbol"
              name="phaseSymbol"
              defaultValue={inputs.phaseSymbol}
              onChange={handleInputChange}
            >
              <option value="+">+</option>
              <option value="-">-</option>
            </select>
            <input
              type="text"
              className="ml-3 bg-transparent border-b-2 border-b-primary dark:border-b-jeruk outline-none p-0 font-semibold"
              style={{
                width: `${Math.max(2, inputs.phase.length)}ch`,
              }}
              id="phase"
              name="phase"
              placeholder="b"
              value={inputs.phase}
              onChange={handleInputChange}
            />
            )
            <select
              className="ml-3 bg-transparent border-b-2 border-b-primary dark:border-b-jeruk outline-none p-0 font-semibold"
              style={{
                width: `${Math.max(2, inputs.verticalShiftSymbol.length)}ch`,
              }}
              id="verticalShiftSymbol"
              name="verticalShiftSymbol"
              defaultValue={inputs.verticalShiftSymbol}
              onChange={handleInputChange}
            >
              <option value="+">+</option>
              <option value="-">-</option>
            </select>
            <input
              type="text"
              className="ml-3 bg-transparent border-b-2 border-b-primary dark:border-b-jeruk outline-none p-0 font-semibold"
              style={{
                width: `${Math.max(2, inputs.verticalShift.length)}ch`,
              }}
              id="verticalShift"
              name="verticalShift"
              placeholder="c"
              value={inputs.verticalShift}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="bg-primary dark:bg-jeruk text-white px-4 py-2 rounded font-medium"
          >
            Hitung
          </button>
          {showPenjelasan && (
            <div className="mt-12">
              <h4 className="text-base lg:text-lg font-semibold tracking-widest">
                y = {inputs.amplitude} {inputs.function}({inputs.frequency}x
                {inputs.phase && ' ' + inputs.phaseSymbol + ' '}
                {inputs.phase ? inputs.phase : ''}){' '}
                {inputs.verticalShift && inputs.verticalShiftSymbol}{' '}
                {inputs.verticalShift ? inputs.verticalShift : ''}
              </h4>
              <h4 className="text-base lg:text-lg font-semibold">
                Penjelasan:
              </h4>
              <div className="grid grid-cols-6 gap-2 mt-5">
                {inputs.amplitude && (
                  <>
                    <p className="font-medium text-sm lg:text-base">
                      |{inputs.amplitude || 'a'}|
                    </p>
                    <p className="col-span-5 text-sm lg:text-base">
                      : Adalah Amplitudo
                    </p>

                    <p className="font-medium text-sm lg:text-base">
                      |{inputs.amplitude || 'a'}|{' '}
                      {inputs.verticalShift && inputs.verticalShiftSymbol}
                      {inputs.verticalShift ?? inputs.verticalShift}
                    </p>
                    <p className="col-span-5 text-sm lg:text-base">
                      : Adalah nilai maksimum
                    </p>

                    <p className="font-medium text-sm lg:text-base">
                      -|{inputs.amplitude || 'a'}|{' '}
                      {inputs.verticalShift && inputs.verticalShiftSymbol}
                      {inputs.verticalShift ?? inputs.verticalShift}
                    </p>
                    <p className="col-span-5 text-sm lg:text-base">
                      : Adalah nilai minimum
                    </p>
                  </>
                )}

                {inputs.function && (
                  <>
                    <p className="font-medium text-sm lg:text-base">
                      {inputs.function || 'sin'}
                    </p>
                    <p className="col-span-5 text-sm lg:text-base">
                      : Adalah Fungsi
                    </p>
                  </>
                )}

                {inputs.frequency && (
                  <>
                    <p className="font-medium text-sm lg:text-base">
                      {inputs.frequency || 'k'}
                    </p>
                    <p className="col-span-5 text-sm lg:text-base">
                      : Adalah Frekuensi
                    </p>
                  </>
                )}

                {inputs.phase && (
                  <>
                    <p className="font-medium text-sm lg:text-base">
                      {inputs.phase.trim().replace(/[+\-/*]/, '') || 'b'}
                    </p>
                    <p className="col-span-5 text-sm lg:text-base">
                      : Adalah Fase
                    </p>
                  </>
                )}

                {inputs.verticalShift && (
                  <>
                    <p className="font-medium text-sm lg:text-base">
                      {inputs.verticalShift.trim().replace(/[+\-/*]/, '') ||
                        'c'}
                    </p>
                    <p className="col-span-5 text-sm lg:text-base">
                      : Adalah Pergeseran Vertikal
                    </p>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </form>
    </>
  )
}

export default ManualCalculator
