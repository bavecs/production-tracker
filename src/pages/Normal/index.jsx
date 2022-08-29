import { useEffect, useState, useMemo, useContext } from "react";
import useLocalStorage from "../../utils/hooks/useLocalStorage"

export default function Table() {
  const [hoursData] = useLocalStorage('hoursData');

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
                Óránkénti
              </th>
              <th scope="col" className="py-3 px-2">
                Összesen
              </th>
            </tr>
          </thead>
          <tbody>
            {
              hoursData.map(hour => (
                  <tr className="bg-white dark:bg-gray-800">
                    <th scope="row" className="py-4 px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {hour.hour } - {hour.hour + 1 }
                    </th>
                    <td className="py-4 px-2">
                      {hour.achived} / {hour.goal}
                    </td>

                    <td className="py-4 px-2">
                      - / -
                    </td>
                  </tr>
                ))
            }


          </tbody>
        </table>

      </div>

    </>
  );
}