import React, { useState } from 'react'
import './GoogleKeep.css'
import GoogleKeepB from './GoogleKeepB'
import GoogleKeepF from './GoogleKeepF'
import GooglekeepH from './GooglekeepH'
import GoogleKeepN from './GoogleKeepN'


function GoogleKeep() {
    const[addItem, setaddItem] = useState([])

     const addNote = (note) =>{
        //  alert('hii nice')
        setaddItem((oldData) =>{
            return [
                ...oldData,
                note
            ]
        })
        
     }
     const onDelete = (id) =>{
         setaddItem((oldData) => {
             oldData.filter((addItems, idx) =>{
                return (
                idx !== id
                );
             })
         }
         )
     }

    return (
        <>

         <GooglekeepH />
         <GoogleKeepB passNote={addNote}  />
          {addItem.map((val, index) => {
                return <GoogleKeepN
                     key={index}
                     id={index}
                     title={val.title}
                     content={val.content}
                     delete={onDelete}
                     
                /> 
                })}
             
         <GoogleKeepF />

        </>
    )
}

export default GoogleKeep
