import React from 'react'
import './GoogleKeep.css'
import DeleteIcon from '@material-ui/icons/Delete';

function GoogleKeepN(props) {
      
    const deleteNote = ()=> {
         props.delete(props.id)
    }

    return (
        <>
           <div className='notediv'>
            <h1 style={{fontSize:"20px", marginTop:'-10px'}}>{props.title}</h1>
            <br />
            
            <p className='para1' style={{textDecoration:'underline'}}>{props.content}</p>
            
            <p style={{marginTop:'-70px'}} className='repeatp'></p>
            
            
            <button className='notebutton' onClick={deleteNote}>
               <DeleteIcon />
            </button>
            </div>
            
            
        </>
    )
}

export default GoogleKeepN
