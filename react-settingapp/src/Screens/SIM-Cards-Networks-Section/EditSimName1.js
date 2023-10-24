import React, { useEffect, useState } from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import { useNavigate } from 'react-router-dom';
import '../CSS/editSimName.css'
import axios from 'axios';

export default function EditSimName1() {
  const sim1Name = 'sim1-name'
    const navigate = useNavigate();
    const goback=()=>{
        navigate('/simcard-settings');
    }


    const [text, setText] = useState('Jio');

    
    useEffect(() => {
      axios.get(`/api/text-data/${sim1Name}`)
        .then(response => {
          setText(response.data.enteredText);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
  
    const handleSaveClick = () => {
     
      axios.put(`/api/text-data/${sim1Name}`, { enteredText: text })
        .then(response => {
          console.log('Entered text updated:', response.data.enteredText);
        })
        .catch(error => {
          console.error(error);
        });
    };




  return (
    <>
        <div className='editsim-name-container'>
       <BackArrow onClick={goback}></BackArrow>
       <Headingtxt headingtxt="Edit SIM card name"></Headingtxt>

       <div className="card">
        <input type="text" value={text} placeholder="Enter sim name" onChange={(e) => setText(e.target.value)} id="editText" />
        <button onClick={handleSaveClick} >Save</button>
      </div>
      </div>
      
    </>
  )
}
