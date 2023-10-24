import React, { useEffect, useState } from 'react'
import Headingtxt from '../../Components/Headingtxt'
import '../CSS/backupAccounts.css';
import BackArrow from '../../Components/BackArrow';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

export default function BackupAccounts() {
  const apiName = 'choose-backup-accounts';
  const navigate = useNavigate();

    const goback=()=>{
      navigate('/backup-restore')
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
      'nagardeepak9098@gmail.com',
      'dhakaddeepak6261@gmail.com',
      'raj883430@gmail.com',
    ];
    
  return (
    <> 
      <div className='backupAccounts-container'>  
      <BackArrow onClick={goback}></BackArrow>
       <Headingtxt headingtxt="Choose backup account"></Headingtxt> 
  
      

     <div style={{marginTop:'40px'}}>
          {cardNames.map((cardName) => (
            <div
              key={cardName}
              className={`choose-account ${selectedCard === cardName ? 'selected' : ''}`}
              onClick={() => handleCardClick(cardName)}
            >
              <p>{cardName}</p>
            </div>
          ))}
        </div>

       </div>
    </>
  )
}
