import React, { useEffect, useState } from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import { useNavigate } from 'react-router-dom';
import '../CSS/editSimNumber.css'
import axios from 'axios';

export default function EditSimNumber1() {

    const navigate = useNavigate();
    const goback=()=>{
        navigate('/simcard-settings');
    }


    const [text, setText] = useState('6261877594');

    
    useEffect(() => {
      axios.get('/api/sim1-number')
        .then(response => {
          setText(response.data.enteredText);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
  
    const handleSaveClick = () => {
     
      axios.put('/api/sim1-number', { enteredText: text })
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
       <Headingtxt headingtxt="Edit SIM card number"></Headingtxt>


       <div className="card">
        <input type="text" value={text} placeholder="Enter number" onChange={(e) => setText(e.target.value)} id="editText" />
        <button onClick={handleSaveClick} id="saveButton">Save</button>
      </div>
      
    </>
  )
}
