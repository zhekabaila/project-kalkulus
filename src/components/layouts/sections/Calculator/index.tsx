const Calculator = () => {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen px-36 border-t-4 border-t-blue-500"
      id="kalkulator"
    >
      <h2 className="text-center text-5xl font-bold">Kalkulator</h2>
      <iframe
        src="https://www.geogebra.org/graphing/hxf84wba?embed"
        width={800}
        height={800}
        allowFullScreen={true}
        style={{
          border: '1px solid #e4e4e4',
          borderRadius: '4px',
          width: '100%',
        }}
        className="mt-24"
      />
    </section>
  )
}

export default Calculator
