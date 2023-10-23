import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BackArrow from '../../Components/BackArrow';
import Headingtxt from '../../Components/Headingtxt';
import '../CSS/editSimName.css'
import axios from 'axios';

export default function EditSimName2() {

    const navigate = useNavigate();
    const goback=()=>{
        navigate('/simcard-settings2');
    }


    const [text, setText] = useState('Airtel');

    
    useEffect(() => {
      axios.get('/api/sim2-name')
        .then(response => {
          setText(response.data.enteredText);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
  
    const handleSaveClick = () => {
     
      axios.put('/api/sim2-name', { enteredText: text })
        .then(response => {
          console.log('Entered text updated:', response.data.enteredText);
        })
        .catch(error => {
          console.error(error);
        });
    };


  return (
    <>
        <BackArrow onClick={goback}></BackArrow>
       <Headingtxt headingtxt="Edit SIM card name"></Headingtxt>

       <div className="card">
        <input type="text" value={text} placeholder="Enter sim name" onChange={(e) => setText(e.target.value)} id="editText" />
        <button onClick={handleSaveClick} id="saveButton">Save</button>
      </div>
    </>
  )
}
