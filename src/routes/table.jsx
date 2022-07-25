export default function Table() {
  return (
    <>
    

      <div className=" relative">
        <table className=" text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-2">
                Óra
              </th>
              <th scope="col" className="py-3 px-2">
                Col
              </th>
              <th scope="col" className="py-3 px-2">
                Col
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:bg-gray-800">
              <th scope="row" className="py-4 px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                6 - 7
              </th>
              <td className="py-4 px-2">
                Item
              </td>

              <td className="py-4 px-2">
                Item
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th scope="row" className="py-4 px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                7 - 8
              </th>

              <td className="py-4 px-2">
                Item
              </td>
              <td className="py-4 px-2">
                Item
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th scope="row" className="py-4 px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                8 - 9
              </th>

              <td className="py-4 px-2">
                Item
              </td>
              <td className="py-4 px-2">
                Item
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  );
}