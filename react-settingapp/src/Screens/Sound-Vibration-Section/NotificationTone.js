import React, { useEffect, useState } from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../CSS/notificationTone.css'

export default function NotificationTone() {
  const apiName = "notification-ring" 
   const navigate = useNavigate();

   const goback=()=>{
    navigate('/sound-vibration')
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
    'Bottle',
    'Brust',
    'Crystal',   
    'Frog',
    'Fade out',
    'Harp ',
    'Moment',
    'Potion',
    'Radar',
    'Swoosh',
    'Spring',
  ];
  

  return (
    <> 
         <div className='notification-tone-conainer'>
         <BackArrow onClick={goback}></BackArrow>
          <Headingtxt headingtxt="Notification Ring"></Headingtxt>


          <div style={{marginTop:'50px'}}>
          {cardNames.map((cardName) => (
            <div
              key={cardName}
              className={`choose-notif-ring ${selectedCard === cardName ? 'selected' : ''}`}
              onClick={() => handleCardClick(cardName)}
            >
              <p style={{fontSize:'20px', fontWeight:'400',marginLeft:'30px',marginTop:'0px' }}>{cardName}</p>
            </div>
          ))}
        </div>
        </div>
    </>
  )
}
