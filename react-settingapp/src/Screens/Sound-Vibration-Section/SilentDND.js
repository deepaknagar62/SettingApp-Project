import React, { useEffect, useState } from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import '../CSS/silentDND.css'
import Line from '../../Components/Line'
import ToggleBtn from '../../Components/ToggleBtn'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function SilentDND() {
  const navigate = useNavigate();

  const goback=()=>{
    navigate('/sound-vibration')
  }


  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    axios.get('/api/silent-DND')
      .then(response => {
        setSelectedCard(response.data.selectedCard);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const onCardClick = (cardName) => {
    setSelectedCard(cardName);

    
    axios.put('/api/silent-DND', { selectedCard: cardName })
      .then(response => {
        console.log('Selected card updated:', response.data.selectedCard);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const cardOptions = [
    {
      name: 'Regular',
      description: 'All sounds will work normally',
    },
    {
      name: 'Silent',
      description: 'Calls and notifications will be silenced',
    },
    {
      name: 'DND',
      description: 'Silence sounds and turn off vibration except for alarms',
    },
  ];

  return (
    <>
       <BackArrow onClick={goback}></BackArrow>
       <Headingtxt headingtxt="Silent/DND"></Headingtxt>

       <div style={{marginTop:'40px'}}>
       {cardOptions.map(card => (
            <div
              key={card.name}
              className={`choose-silent-option ${selectedCard === card.name ? 'selected' : ''}`}
              onClick={() => onCardClick(card.name)}
            >
              <div style={{ marginLeft: '30px' }}>
                <span style={{ fontSize: '20px', fontWeight: '500' }}>{card.name}</span>
                <p style={{ fontSize: '15px', fontWeight: '250', marginTop: '0px' }}>{card.description}</p>
              </div>
            </div>
      ))}
        </div>
    
       

       <br></br>
       <Line></Line>


       <div style={{marginTop:'10px', display:'flex'}} >
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'600'}}>
                 Mute music stream </span>
             <div style={{marginTop:'20px',display:'flex' , marginLeft:'0px'}}> <ToggleBtn name="silentDND_muteMusicStream"></ToggleBtn></div>
           </div>   
           

           <br></br>
       <Line></Line>
    </>
  )
}
