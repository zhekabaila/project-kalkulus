'use client'

import { useEffect, useRef, useState } from 'react'

const Calculator = () => {
  const ggbElementRef = useRef(null)
  const [ggbApplet, setGgbApplet] = useState(null)
  const [showPenjelasan, setShowPenjelasan] = useState(false)
  const [fungsi, setFungsi] = useState({
    amplitudo: '',
    fase: '',
    fungsi: 'sin',
    pergeseranVertikal: '',
    frekuensi: '',
  })

  useEffect(() => {
    if (typeof window !== 'undefined' && !ggbApplet) {
      const script = document.createElement('script')
      script.src = 'https://www.geogebra.org/apps/deployggb.js'
      script.async = true
      script.onload = () => {
        const params = {
          appName: 'graphing',
          // width: 800,
          // height: 600,
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
    if (ggbApplet && fungsi) {
      ggbApplet.evalCommand(
        `f: y = ${fungsi.amplitudo} ${fungsi.fungsi}(${fungsi.frekuensi}x ${
          fungsi.fase ? `${fungsi.fase}` : ''
        }) ${fungsi.pergeseranVertikal ? `${fungsi.pergeseranVertikal}` : ''}`
      )
    }
  }

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
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setShowPenjelasan(true)
          updateGraph()
        }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10"
      >
        <div
          id="ggb-element"
          ref={ggbElementRef}
          className="w-full h-[400px] lg:h-[800px]"
        ></div>
        <div className="flex flex-col gap-5">
          <div className="bg-white/10 dark:bg-gray-600/20 backdrop-blur-md rounded-md border-2 border-gray-600/30 p-4 tracking-widest">
            <p>
              y = <b>{fungsi.amplitudo || 'a'}</b> <b>{fungsi.fungsi}</b>(
              <b>{fungsi.frekuensi || 'k'}</b>
              <i>x</i> <b>{fungsi.fase || '+ b'}</b>){' '}
              <b>{fungsi.pergeseranVertikal || '+ c'}</b>
            </p>
          </div>
          <div className="flex items-center bg-white/10 dark:bg-gray-600/20 backdrop-blur-md rounded-md border-2 border-gray-600/30 p-4 tracking-widest">
            <p>y = </p>
            <input
              type="text"
              className="ml-2 bg-transparent border-b-2 border-b-primary dark:border-b-jeruk outline-none p-0 font-semibold"
              style={{
                width: `${Math.max(2, fungsi.amplitudo.length)}ch`,
              }}
              id="amplitudo"
              name="amplitudo"
              placeholder="a"
              value={fungsi.amplitudo}
              onChange={(e) => {
                setShowPenjelasan(false)
                setFungsi((r) => {
                  return {
                    ...r,
                    amplitudo: e.target.value,
                  }
                })
              }}
            />
            <input
              type="text"
              className="ml-3 bg-transparent border-b-2 border-b-primary dark:border-b-jeruk outline-none p-0 font-semibold"
              style={{
                width: `${Math.max(3, fungsi.fungsi.length)}ch`,
              }}
              id="fungsi"
              name="fungsi"
              value={fungsi.fungsi}
              onChange={(e) => {
                setShowPenjelasan(false)
                setFungsi((r) => {
                  return {
                    ...r,
                    fungsi: e.target.value,
                  }
                })
              }}
            />
            (
            <input
              type="text"
              className="bg-transparent border-b-2 border-b-primary dark:border-b-jeruk outline-none p-0 font-semibold"
              style={{
                width: `${Math.max(2, fungsi.frekuensi.length)}ch`,
              }}
              placeholder="k"
              id="frekuensi"
              name="frekuensi"
              value={fungsi.frekuensi}
              onChange={(e) => {
                setShowPenjelasan(false)
                setFungsi((r) => {
                  return {
                    ...r,
                    frekuensi: e.target.value,
                  }
                })
              }}
            />
            <i>x</i>
            <input
              type="text"
              className="ml-3 bg-transparent border-b-2 border-b-primary dark:border-b-jeruk outline-none p-0 font-semibold"
              style={{
                width: `${Math.max(3, fungsi.fase.length)}ch`,
              }}
              id="fase"
              name="fase"
              placeholder="+ b"
              value={fungsi.fase}
              onChange={(e) => {
                setShowPenjelasan(false)
                setFungsi((r) => {
                  return {
                    ...r,
                    fase: e.target.value,
                  }
                })
              }}
            />
            )
            <input
              type="text"
              className="ml-3 bg-transparent border-b-2 border-b-primary dark:border-b-jeruk outline-none p-0 font-semibold"
              style={{
                width: `${Math.max(3, fungsi.pergeseranVertikal.length)}ch`,
              }}
              placeholder="+ c"
              id="pergeseranVertikal"
              name="pergeseranVertikal"
              value={fungsi.pergeseranVertikal}
              onChange={(e) => {
                setShowPenjelasan(false)
                setFungsi((r) => {
                  return {
                    ...r,
                    pergeseranVertikal: e.target.value,
                  }
                })
              }}
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
                y = {fungsi.amplitudo} {fungsi.fungsi}({fungsi.frekuensi}x
                {fungsi.fase ? `${fungsi.fase}` : ''}){' '}
                {fungsi.pergeseranVertikal
                  ? `${fungsi.pergeseranVertikal}`
                  : ''}
              </h4>
              <h4 className="text-base lg:text-lg font-semibold">
                Penjelasan:
              </h4>
              <div className="grid grid-cols-6 gap-2 mt-5">
                {fungsi.amplitudo && (
                  <>
                    <p className="font-medium text-sm lg:text-base">
                      |{fungsi.amplitudo || 'a'}|
                    </p>
                    <p className="col-span-5 text-sm lg:text-base">
                      : Adalah Amplitudo
                    </p>

                    <p className="font-medium text-sm lg:text-base">
                      |{fungsi.amplitudo || 'a'}|{' '}
                      {fungsi.pergeseranVertikal ?? fungsi.pergeseranVertikal}
                    </p>
                    <p className="col-span-5 text-sm lg:text-base">
                      : Adalah nilai maksimum
                    </p>

                    <p className="font-medium text-sm lg:text-base">
                      -|{fungsi.amplitudo || 'a'}|{' '}
                      {fungsi.pergeseranVertikal ?? fungsi.pergeseranVertikal}
                    </p>
                    <p className="col-span-5 text-sm lg:text-base">
                      : Adalah nilai minimum
                    </p>
                  </>
                )}

                {fungsi.fungsi && (
                  <>
                    <p className="font-medium text-sm lg:text-base">
                      {fungsi.fungsi || 'sin'}
                    </p>
                    <p className="col-span-5 text-sm lg:text-base">
                      : Adalah Fungsi
                    </p>
                  </>
                )}

                {fungsi.frekuensi && (
                  <>
                    <p className="font-medium text-sm lg:text-base">
                      {fungsi.frekuensi || 'k'}
                    </p>
                    <p className="col-span-5 text-sm lg:text-base">
                      : Adalah Frekuensi
                    </p>
                  </>
                )}

                {fungsi.fase && (
                  <>
                    <p className="font-medium text-sm lg:text-base">
                      {fungsi.fase.trim().replace(/[+\-/*]/, '') || 'b'}
                    </p>
                    <p className="col-span-5 text-sm lg:text-base">
                      : Adalah Fase
                    </p>
                  </>
                )}

                {fungsi.pergeseranVertikal && (
                  <>
                    <p className="font-medium text-sm lg:text-base">
                      {fungsi.pergeseranVertikal
                        .trim()
                        .replace(/[+\-/*]/, '') || 'c'}
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
    </section>
  )
}

export default Calculator
