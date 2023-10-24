import React, { useEffect, useState } from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import { useNavigate } from 'react-router-dom';
import '../CSS/ringtone.css'
import axios from 'axios';

export default function Ringtone() {

const navigate = useNavigate();
   const apiName = 'choose-ringtone'
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
    'Acoustic',
    'Carousel',
    'Celesta',   
    'Childhood',
    'Fantasy',
    'Mi (Remix)',
    'Lolipop',
  ];
  




  return (
    <>
          
          <BackArrow onClick={goback}></BackArrow>
          <Headingtxt headingtxt="Choose Ringtone"></Headingtxt>


          <div style={{marginTop:'50px'}}>
          {cardNames.map((cardName) => (
            <div
              key={cardName}
              className={`choose-ringtone ${selectedCard === cardName ? 'selected' : ''}`}
              onClick={() => handleCardClick(cardName)}
            >
              <p style={{fontSize:'20px', fontWeight:'400',marginLeft:'30px',marginTop:'0px' }}>{cardName}</p>
            </div>
          ))}
        </div>










      
    </>
  )
}
