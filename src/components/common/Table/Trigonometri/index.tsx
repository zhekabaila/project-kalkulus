import Pecahan from '../../Pecahan'

const TrignonemetryTable = () => {
  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-sun uppercase bg-primary dark:bg-jeruk">
          <tr className="text-center">
            <th scope="col" className="px-6 py-3">
              X
            </th>
            <th scope="col" className="px-6 py-3">
              &theta;
            </th>
            <th scope="col" className="px-6 py-3">
              Sin
            </th>
            <th scope="col" className="px-6 py-3">
              Cos
            </th>
            <th scope="col" className="px-6 py-3">
              Tan
            </th>
            <th scope="col" className="px-6 py-3">
              Cosec
            </th>
            <th scope="col" className="px-6 py-3">
              Sec
            </th>
            <th scope="col" className="px-6 py-3">
              Cotan
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center bg-white border-b dark:bg-shadow dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-shadow/60">
            <td className="px-6 py-4">0</td>
            <td className="px-6 py-4">0°</td>
            <td className="px-6 py-4">0</td>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">0</td>
            <td className="px-6 py-4">&infin;</td>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">&infin;</td>
          </tr>
          <tr className="text-center bg-white border-b dark:bg-shadow dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-shadow/60">
            <td className="px-6 py-4">
              <Pecahan atas="&pi;" bawah="6" />
            </td>
            <td className="px-6 py-4">30°</td>
            <td className="px-6 py-4">
              <Pecahan atas="1" bawah="2" />
            </td>
            <td className="px-6 py-4">
              <Pecahan atas="1" bawah="2" sesudah="&radic;3" />
            </td>
            <td className="px-6 py-4">
              <Pecahan atas="1" bawah="&radic;3" />
            </td>
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4">
              <Pecahan atas="2" bawah="&radic;3" sesudah="&radic;3" />
            </td>
            <td className="px-6 py-4">&radic;3</td>
          </tr>
          <tr className="text-center bg-white border-b dark:bg-shadow dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-shadow/60">
            <td className="px-6 py-4">
              <Pecahan atas="&pi;" bawah="4" />
            </td>
            <td className="px-6 py-4">45°</td>
            <td className="px-6 py-4">
              <Pecahan atas="1" bawah="&radic;2" sesudah="&radic;2" />
            </td>
            <td className="px-6 py-4">
              <Pecahan atas="1" bawah="&radic;2" sesudah="&radic;2" />
            </td>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">&radic;2</td>
            <td className="px-6 py-4">&radic;2</td>
            <td className="px-6 py-4">1</td>
          </tr>
          <tr className="text-center bg-white border-b dark:bg-shadow dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-shadow/60">
            <td className="px-6 py-4">
              <Pecahan atas="&pi;" bawah="3" />
            </td>
            <td className="px-6 py-4">60°</td>
            <td className="px-6 py-4">
              <Pecahan atas="1" bawah="2" sesudah="&radic;3" />
            </td>
            <td className="px-6 py-4">
              <Pecahan atas="1" bawah="2" />
            </td>
            <td className="px-6 py-4">&radic;3</td>
            <td className="px-6 py-4">
              <Pecahan atas="2" bawah="3" sesudah="&radic;3" />
            </td>
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4">
              <Pecahan atas="&radic;3" bawah="3" />
            </td>
          </tr>
          <tr className="text-center bg-white border-b dark:bg-shadow dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-shadow/60">
            <td className="px-6 py-4">
              <Pecahan atas="&pi;" bawah="2" />
            </td>
            <td className="px-6 py-4">90°</td>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">0</td>
            <td className="px-6 py-4">&infin;</td>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">&infin;</td>
            <td className="px-6 py-4">0</td>
          </tr>
          <tr className="text-center bg-white border-b dark:bg-shadow dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-shadow/60">
            <td className="px-6 py-4">
              <Pecahan atas="2&pi;" bawah="3" />
            </td>
            <td className="px-6 py-4">120°</td>
            <td className="px-6 py-4">
              <Pecahan atas="1" bawah="2" sesudah="&radic;3" />
            </td>
            <td className="px-6 py-4">
              <Pecahan atas="1" bawah="2" sebelum="-" />
            </td>
            <td className="px-6 py-4">-&radic;3</td>
            <td className="px-6 py-4">
              <Pecahan atas="2" bawah="3" sesudah="&radic;3" />
            </td>
            <td className="px-6 py-4">-2</td>
            <td className="px-6 py-4">
              <Pecahan atas="1" bawah="&radic;3" sebelum="-" />
            </td>
          </tr>
          <tr className="text-center bg-white border-b dark:bg-shadow dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-shadow/60">
            <td className="px-6 py-4">
              <Pecahan atas="3&pi;" bawah="4" />
            </td>
            <td className="px-6 py-4">135°</td>
            <td className="px-6 py-4">
              <Pecahan atas="1" bawah="2" sesudah="&radic;2" />
            </td>
            <td className="px-6 py-4">
              <Pecahan atas="1" bawah="2" sebelum="-" sesudah="&radic;2" />
            </td>
            <td className="px-6 py-4">-1</td>
            <td className="px-6 py-4">&radic;2</td>
            <td className="px-6 py-4">-&radic;2</td>
            <td className="px-6 py-4">-1</td>
          </tr>
          <tr className="text-center bg-white border-b dark:bg-shadow dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-shadow/60">
            <td className="px-6 py-4">
              <Pecahan atas="5&pi;" bawah="6" />
            </td>
            <td className="px-6 py-4">150°</td>
            <td className="px-6 py-4">
              <Pecahan atas="1" bawah="2" />
            </td>
            <td className="px-6 py-4">
              <Pecahan atas="1" bawah="2" sebelum="-" sesudah="&radic;3" />
            </td>
            <td className="px-6 py-4">
              <Pecahan atas="1" bawah="&radic;3" sebelum="-" />
            </td>
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4">
              <Pecahan atas="2" bawah="3" sebelum="-" sesudah="&radic;3" />
            </td>
            <td className="px-6 py-4">-&radic;3</td>
          </tr>
          <tr className="text-center bg-white border-b dark:bg-shadow dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-shadow/60">
            <td className="px-6 py-4">&pi;</td>
            <td className="px-6 py-4">180°</td>
            <td className="px-6 py-4">0</td>
            <td className="px-6 py-4">-1</td>
            <td className="px-6 py-4">0</td>
            <td className="px-6 py-4">&infin;</td>
            <td className="px-6 py-4">-1</td>
            <td className="px-6 py-4">&infin;</td>
          </tr>
          <tr className="text-center bg-white border-b dark:bg-shadow dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-shadow/60">
            <td className="px-6 py-4">
              <Pecahan atas="7&pi;" bawah="6" />
            </td>
            <td className="px-6 py-4">210°</td>
            <td className="px-6 py-4">
              <Pecahan atas="1" bawah="2" sebelum="-" />
            </td>
            <td className="px-6 py-4">
              <Pecahan atas="1" bawah="2" sebelum="-" sesudah="&radic;3" />
            </td>
            <td className="px-6 py-4">
              <Pecahan atas="1" bawah="&radic;3" />
            </td>
            <td className="px-6 py-4">-2</td>
            <td className="px-6 py-4">
              <Pecahan atas="2" bawah="3" sebelum="-" sesudah="&radic;3" />
            </td>
            <td className="px-6 py-4">&radic;3</td>
          </tr>
          <tr className="text-center bg-white border-b dark:bg-shadow dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-shadow/60">
            <td className="px-6 py-4">
              <Pecahan atas="5&pi;" bawah="4" />
            </td>
            <td className="px-6 py-4">225°</td>
            <td className="px-6 py-4">
              <Pecahan atas="1" bawah="2" sebelum="-" sesudah="&radic;2" />
            </td>
            <td className="px-6 py-4">
              <Pecahan atas="1" bawah="2" sebelum="-" sesudah="&radic;2" />
            </td>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">-&radic;2</td>
            <td className="px-6 py-4">-&radic;2</td>
            <td className="px-6 py-4">1</td>
          </tr>
          <tr className="text-center bg-white border-b dark:bg-shadow dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-shadow/60">
            <td className="px-6 py-4">
              <Pecahan atas="4&pi;" bawah="3" />
            </td>
            <td className="px-6 py-4">240°</td>
            <td className="px-6 py-4">
              <Pecahan atas="1" bawah="2" sebelum="-" sesudah="&radic;3" />
            </td>
            <td className="px-6 py-4">
              <Pecahan atas="1" bawah="2" sebelum="-" />
            </td>
            <td className="px-6 py-4">&radic;3</td>
            <td className="px-6 py-4">
              <Pecahan atas="2" bawah="3" sebelum="-" sesudah="&radic;3" />
            </td>
            <td className="px-6 py-4">-2</td>
            <td className="px-6 py-4">
              <Pecahan atas="&radic;3" bawah="3" />
            </td>
          </tr>
          <tr className="text-center bg-white border-b dark:bg-shadow dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-shadow/60">
            <td className="px-6 py-4">
              <Pecahan atas="3&pi;" bawah="2" />
            </td>
            <td className="px-6 py-4">270°</td>
            <td className="px-6 py-4">-1</td>
            <td className="px-6 py-4">0</td>
            <td className="px-6 py-4">&infin;</td>
            <td className="px-6 py-4">-1</td>
            <td className="px-6 py-4">&infin;</td>
            <td className="px-6 py-4">1</td>
          </tr>
          <tr className="text-center bg-white border-b dark:bg-shadow dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-shadow/60">
            <td className="px-6 py-4">
              <Pecahan atas="5&pi;" bawah="3" />
            </td>
            <td className="px-6 py-4">300°</td>
            <td className="px-6 py-4">
              <Pecahan atas="1" bawah="2" sebelum="-" sesudah="&radic;3" />
            </td>
            <td className="px-6 py-4">
              <Pecahan atas="1" bawah="2" />
            </td>
            <td className="px-6 py-4">-&radic;3</td>
            <td className="px-6 py-4">
              <Pecahan atas="2" bawah="3" sebelum="-" sesudah="&radic;3" />
            </td>
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4">
              <Pecahan atas="&radic;3" bawah="3" sebelum="-" />
            </td>
          </tr>
          <tr className="text-center bg-white border-b dark:bg-shadow dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-shadow/60">
            <td className="px-6 py-4">
              <Pecahan atas="7&pi;" bawah="4" />
            </td>
            <td className="px-6 py-4">315°</td>
            <td className="px-6 py-4">
              <Pecahan atas="1" bawah="2" sebelum="-" sesudah="&radic;2" />
            </td>
            <td className="px-6 py-4">
              <Pecahan atas="1" bawah="2" sesudah="&radic;2" />
            </td>
            <td className="px-6 py-4">-1</td>
            <td className="px-6 py-4">-&radic;2</td>
            <td className="px-6 py-4">&radic;2</td>
            <td className="px-6 py-4">-1</td>
          </tr>
          <tr className="text-center bg-white border-b dark:bg-shadow dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-shadow/60">
            <td className="px-6 py-4">
              <Pecahan atas="11&pi;" bawah="6" />
            </td>
            <td className="px-6 py-4">330°</td>
            <td className="px-6 py-4">
              <Pecahan atas="1" bawah="2" sebelum="-" />
            </td>
            <td className="px-6 py-4">
              <Pecahan atas="1" bawah="2" sesudah="&radic;3" />
            </td>
            <td className="px-6 py-4">
              <Pecahan atas="1" bawah="&radic;3" sebelum="-" />
            </td>
            <td className="px-6 py-4">-2</td>
            <td className="px-6 py-4">
              <Pecahan atas="2" bawah="3" sesudah="&radic;3" />
            </td>
            <td className="px-6 py-4">-&radic;3</td>
          </tr>
          <tr className="text-center bg-white border-b dark:bg-shadow dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-shadow/60">
            <td className="px-6 py-4">2&pi;</td>
            <td className="px-6 py-4">360°</td>
            <td className="px-6 py-4">0</td>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">0</td>
            <td className="px-6 py-4">&infin;</td>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">&infin;</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TrignonemetryTable
