import React, { useEffect, useState } from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import { useNavigate } from 'react-router-dom';
import '../CSS/editSimNumber.css'
import axios from 'axios';

export default function EditSimNumber2() {
  const sim2Number = 'sim2-number'
    const navigate = useNavigate();
    const goback=()=>{
        navigate('/simcard-settings2');
    }


    const [text, setText] = useState('9977380998');

    
    useEffect(() => {
      axios.get(`/api/text-data/${sim2Number}`)
        .then(response => {
          setText(response.data.enteredText);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
  
    const handleSaveClick = () => {
     
      axios.put(`/api/text-data/${sim2Number}`, { enteredText: text })
        .then(response => {
          console.log('Entered text updated:', response.data.enteredText);
        })
        .catch(error => {
          console.error(error);
        });
    };



  return (
    <>

      <div className='editsim-number-container'>
       <BackArrow onClick={goback}></BackArrow>
       <Headingtxt headingtxt="Edit SIM card number"></Headingtxt>


       <div className="card">
        <input type="text" value={text} placeholder="Enter number" onChange={(e) => setText(e.target.value)} id="editText" />
        <button onClick={handleSaveClick} >Save</button>
      </div>
      </div>
    </>
  )
}
