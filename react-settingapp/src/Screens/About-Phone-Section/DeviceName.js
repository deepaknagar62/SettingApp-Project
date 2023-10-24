import React, { useEffect, useState } from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import { useNavigate } from 'react-router-dom';
import '../CSS/deviceName.css'
import axios from 'axios';

export default function DeviceName() {
    const deviceName = 'device-name'
    const navigate = useNavigate();
    const goback=()=>{
        navigate('/about-phone');
    }


    const [text, setText] = useState('Redmi 8A');

    
    useEffect(() => {
      axios.get(`/api/text-data/${deviceName}`)
        .then(response => {
          setText(response.data.enteredText);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
  
    const handleSaveClick = () => {
     
      axios.put(`/api/text-data/${deviceName}`, { enteredText: text })
        .then(response => {
          console.log('Entered text updated:', response.data.enteredText);
        })
        .catch(error => {
          console.error(error);
        });
    };

   



  return (
    <>
       <div className='device-name-conainer'>
       <BackArrow onClick={goback}></BackArrow>
       <Headingtxt headingtxt="Rename device"></Headingtxt>
  
         
       <div className="card">
        <input type="text" value={text} placeholder="Enter sim name" onChange={(e) => setText(e.target.value)} id="editText" />
        <button onClick={handleSaveClick} id="saveButton">Save</button>
      </div>
      </div>

      
    </>
  )
}
