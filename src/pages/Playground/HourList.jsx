import React, {useState} from 'react'


export default ({
    hours,
    hourComponent: HourComponent,
    selectedHourState
}) => {

    const [selectedHour, setSelectedHour] = selectedHourState


    const renderHourElement =  (hour, i) =>
        <HourComponent
            key={i}
            data={hour}

            selected={selectedHour && selectedHour === hour.hour}
            onSelect={n => setSelectedHour(n)} />

    return hours.map((hour, i) => renderHourElement(hour, i))

    
        
    
}