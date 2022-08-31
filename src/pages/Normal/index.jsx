import { useReducer } from "react";
import { useEffect, useState, useMemo, useContext } from "react";
import useLocalStorage from "../../utils/hooks/useLocalStorage"

export default function Table() {
  const [hoursData] = useLocalStorage('hoursData');

  const [tableContent, setTableContent] = useState([]);



  useEffect(()=> {

    let allAchived = 0
    let allGoal = 0
    let tableContent = hoursData.map(hour => {
      allAchived += hour.achived
      allGoal += hour.goal
      return {...hour, allAchived: hour.achived ? allAchived : 0, allGoal: hour.goal ? allGoal : 0}
    });

    setTableContent(tableContent)

  }, [hoursData]);



  return (
    <>
    

      <div className="w-full relative norm_table">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-2">

              </th>
              <th scope="col" className="py-3 px-2">
                Óránkénti  <br/><span className="text-[0.6rem]">valós / cél</span>
              </th>
              <th scope="col" className="py-3 px-2">
                Összes <br/><span className="text-[0.6rem]">valós / cél</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              tableContent.map((hour, i) => (
                <tr key={i} className="bg-white dark:bg-gray-800 border border-black">
                  <th scope="row" className="py-4 px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-black">
                    {hour.hour } - {hour.hour + 1 }
                  </th>
                  <td className="py-4 px-2 val_col">
                    { hour.achived ? (<>
                      {hour.achived} <span className="separator">/</span> {hour.goal}
                      </>) : ''
                    }
                    
                  </td>
          
                  <td className="py-4 px-2 val_col border  border-black">
                  { hour.achived ? (<>
                      {hour.allAchived} <span className="separator">/</span> {hour.allGoal}
                      </>) : ''
                    }
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