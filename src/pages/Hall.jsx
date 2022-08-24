import { useContext, useEffect, useReducer, useState } from "react"
import { Select, ButtonPrimary } from "../components/UiElements"

import workingHoursJson from "../stores/workingHours.json"

import { useNavigate } from "react-router-dom";

import { HoursContext } from "../utils/Providers/hoursProvider";

export const Hall = () => {

    const [hours, setHours] = useContext(HoursContext)

    const [shift, setShift] = useReducer((shift, e) => {
        switch (e.target.value) {
            case "DE":
                return 0

            case "DU":
                return 2

            case "ES":
                return 1

            default:
                return null
        }
    }, 0)

    const [island, setIsland] = useState(null)

    let navigate = useNavigate();


    const setup = () => {

        let workingHours = workingHoursJson[shift].workingHours.map((hour) =>
        ({
            ...hour,
            items: [],
            goal: 0,
            achived: 0
        }))

        localStorage.clear()
        localStorage.setItem("hoursData", JSON.stringify(workingHours))
        navigate(0)
    }

    return (
        <div className="flex bg-slate-100/50 dark:bg-gray-800">
            <div className="container mx-auto my-3 px-6 max-w-md" >
                <div style={{ "height": "calc(100vh - 90px)" }}
                    className="flex flex-col gap-4" >
                    <h1 className="text-2xl font-medium">Új műszak</h1>
                    <Select id="shift" onChange={setShift} label="Válassz műszakot" >
                        <option value="DE">☀ Délelőtt</option>
                        <option value="DU">🌆 Délután</option>
                        <option value="ES">🌙 Este</option>
                    </Select>
                    <Select id="island" label="Válassz szigetet" >
                        <option>MS6 - LF</option>
                        <option>MS6 - EE</option>
                    </Select>

                    <ButtonPrimary onClick={setup} >Kezdés</ButtonPrimary>

                </div>


            </div>
        </div>

    )
}

export default Hall