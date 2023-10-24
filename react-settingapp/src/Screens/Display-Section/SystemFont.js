import React, { useEffect, useState } from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import '../CSS/silentDND.css'
import '../CSS/systemFont.css'
import { useNavigate } from 'react-router-dom';
import Line from '../../Components/Line';
import axios from 'axios'
export default function SystemFont() {
  const apiName = "choose-font"
  const navigate = useNavigate();
  const goback=()=>{
    navigate('/display')
  }

  const [selectedCard, setSelectedCard] = useState("itelic");

    
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
    'normal',
    'italic',   
    'monospace',
    'fantasy',
    'revert-layer ',
    'cursive',
    
  ];


   const txt = selectedCard;


  return (
    <>
         <BackArrow onClick={goback}></BackArrow>
         <Headingtxt headingtxt="System font"></Headingtxt>  

         <p style={{marginTop:'40px', fontWeight:'400', textAlign:'center',fontSize:'28px' ,fontFamily:`${txt}`,fontStyle: `${txt}`}} > This is Exmaple text</p>
         <br></br>
         <Line></Line>



         <div style={{marginTop:'50px'}}>
          {cardNames.map((cardName) => (
            <div
              key={cardName}
              className={`system-font-option ${selectedCard === cardName ? 'selected' : ''}`}
              onClick={() => handleCardClick(cardName)}
            >
              <p style={{fontSize:'20px', fontWeight:'400',marginLeft:'30px',marginTop:'0px' }}>{cardName}</p>
            </div>
          ))}
        </div>








    </>
  )
}
