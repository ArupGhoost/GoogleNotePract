import React, { useState } from 'react'
import './GoogleKeep.css'
// import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

function GoogleKeepB(props) {
             
    const[note, setNote] = useState({
        title: '',
        content: ''
    })
    const noteChange = (event) => {
        const{value, name} = event.target;

          setNote((prevDate) => {
             return {
                 ...prevDate,
                 [name]: value,
             }
          })
          console.log(note)
    }
    const noteButton = (event) => {
          props.passNote(note);
        event.preventDefault();
        setNote({
            title: '',
            content: ''
        })
    }
       
    return (
        <>
            <div className='main_note'>
                <form>
                    <input type='text' placeholder='Title'  autoComplete='off' name='title'
                        value={note.title} onChange={noteChange}
                    />
                    <br />
                    <textarea rows='' column='' placeholder='write a note...' name='content'
                    value={note.content} onChange={noteChange}></textarea>
                    <br />
                    <button className='mainbutton' onClick={noteButton}>
                        <AddIcon className='icon'/>
                    
                    </button>
                </form>

            </div>
        </>
    )
}

export default GoogleKeepB
