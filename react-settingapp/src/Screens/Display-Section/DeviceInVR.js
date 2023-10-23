import React, { useEffect, useState } from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../CSS/deviceInVR.css'
export default function DeviceInVR() {
   const apiName = "device-in-vr"
   const navigate = useNavigate();
   const goback=()=>{
     navigate('/display')
   }
   

   const [selectedCard, setSelectedCard] = useState(null);

    
   useEffect(() => {
     axios.get(`/api/${apiName}`)
       .then(response => {
         setSelectedCard(response.data.selectedCard);
       })
       .catch(error => {
         console.error(error);
       });
   }, []);
 
   const handleCardClick = (cardName) => {
     setSelectedCard(cardName);
 
    
     axios.put(`/api/${apiName}`, { selectedCard: cardName })
       .then(response => {
         console.log('Selected card updated:', response.data.selectedCard);
       })
       .catch(error => {
         console.error(error);
       });
   };
 
   const cardNames = [
     'Reduce blur',
     'Reduce flicker',
    
   ];


  return (
    <>

       <BackArrow onClick={goback}></BackArrow>
       <Headingtxt headingtxt="When device is in VR"></Headingtxt>


       <div style={{marginTop:'40px'}}>
          {cardNames.map((cardName) => (
            <div
              key={cardName}
              className={`device-vr ${selectedCard === cardName ? 'selected' : ''}`}
              onClick={() => handleCardClick(cardName)}
            >
              <p  style={{fontSize:'20px',marginTop:'0px', fontWeight:'550',marginLeft:'30px'}}>{cardName}</p>
            </div>
          ))}
        </div>


      
      
    </>
  )
}
