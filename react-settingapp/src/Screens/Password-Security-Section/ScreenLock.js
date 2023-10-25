import React, { useEffect, useState } from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import '../CSS/screenLock.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function ScreenLock() {
    const navigate = useNavigate();
    const goback=()=>{
        navigate('/password-security');
    }
   const apiName ='choose-screen-lock';



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
  
    const onCardClick = (cardName) => {
      setSelectedCard(cardName);
  
      
      axios.put(`/api/${apiName}`, { selectedCard: cardName })
        .then(response => {
          console.log('Selected card updated:', response.data.selectedCard);
        })
        .catch(error => {
          console.error(error);
        });
    };
  
    const cardOptions = [
      {
        name: 'Pattern',
        description: 'Draw a simple pattern with your finger to unlock device',
      },
      {
        name: 'PIN',
        description: ' Enter pin to set the lock',
      },
      {
        name: 'Password',
        description: ' Enter 4 or more letters or number to unlock device',
      },
    ];
  
  return (
    <>
         <div className='screen-lock-all-conainer'>
         <BackArrow onClick={goback}></BackArrow>
         <Headingtxt headingtxt="Change screen lock"></Headingtxt>

          

         <div style={{marginTop:'40px'}}>
       {cardOptions.map(card => (
            <div
              key={card.name}
              className={`lock-option ${selectedCard === card.name ? 'selected' : ''}`}
              onClick={() => onCardClick(card.name)}
            >
              <div style={{ marginLeft: '30px' }}>
                <span style={{ fontSize: '20px', fontWeight: '500' }}>{card.name}</span>
                <p style={{ fontSize: '15px', fontWeight: '250', marginTop: '0px' }}>{card.description}</p>
              </div>
            </div>
      ))}
        </div>





       <div style={{color:'red' , fontSize:'15px',marginTop:'25px',fontWeight:'500' , marginLeft:'25px'}}>
            <span >Turn off screen lock</span></div> 
      
            </div>
    </>
  )
}
