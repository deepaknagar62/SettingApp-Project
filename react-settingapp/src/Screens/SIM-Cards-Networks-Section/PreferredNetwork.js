import React, { useEffect, useState } from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import '../CSS/preferrednetwork.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function PreferredNetwork() {
     const apiName = 'preferred-network-sim1';
    const navigate = useNavigate();
    const goback=()=>{
        navigate('/simcard-settings');
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
      'Prefer LTE',
      'Prefer 3G',
      '2G only',
    ];


  return (
    <>
        <div className='preferred-network-container'>
       <BackArrow onClick={goback}></BackArrow>
       <Headingtxt headingtxt="Preferred network type"></Headingtxt>



       <div style={{marginTop:'40px'}}>
          {cardNames.map((cardName) => (
            <div
              key={cardName}
              className={`pref-option ${selectedCard === cardName ? 'selected' : ''}`}
              onClick={() => handleCardClick(cardName)}
            >
              <p  style={{fontSize:'20px', fontWeight:'550',marginLeft:'30px'}}>{cardName}</p>
            </div>
          ))}
        </div>

      
        </div>
    </>
  )
}
