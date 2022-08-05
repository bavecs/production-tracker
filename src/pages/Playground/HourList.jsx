import React from 'react'

export default ({children, hours, Component}) => {


    const renderHour = (i, hour) => (
        <Component key={i} 
            data={hour}
            handleHourSelection={(n) => handleHourSelection(n)}
            removeItem={(el) => Item.remove(hour.hour, el)} >
            {children}
        </Component>)
    
    return hours.map((hour, i) => (
        <Component key={i} 
            data={hour}
            handleHourSelection={(n) => handleHourSelection(n)}
            removeItem={(el) => Item.remove(hour.hour, el)} >

            {children}
            
        </Component>)
        
    
}