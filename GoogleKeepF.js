import React, { useState } from 'react'
import './GoogleKeep.css'

function GoogleKeepF() {
    
    const Time = new Date().getUTCFullYear();
    const[newDate, setDate] = useState(Time);



    return (
        <>
            <div className='mainfooter'>
               <p style={{filter: 'opacity(70%)'}}>[Ghost, All Rights Reserved {newDate}]</p>
            </div>
        </>
    )
}

export default GoogleKeepF
