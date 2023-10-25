import React, { useEffect, useState } from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import '../CSS/textSize.css'
import { useNavigate } from 'react-router-dom';
import Line from '../../Components/Line';
import axios from 'axios';

export default function TextSize() {
  const apiName = "choose-text"
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
    'XXS',
    'XS',   
    'S',
    'L',
    'XL',
    'XXL',
    
  ];
    
    let font = '20px'

     if(selectedCard==="XXS"){
      font = '15px'
     }
     else if(selectedCard==="XS"){
      font ='18px'
     }
     else if(selectedCard==="S"){
      font ='20px'
     }
     else if(selectedCard==="L"){
      font ='22px'
     }
     else if(selectedCard==="XL"){
      font ='24px'
     }
     else if(selectedCard==="XXL"){
      font ='26px'
     }


  return (
    <> 
        <div className='text-size-conainer'>
       <BackArrow onClick={goback}></BackArrow>
       <Headingtxt headingtxt="Text Size"></Headingtxt>

       <p style={{marginTop:'40px', fontWeight:'400', textAlign:'center',fontSize:`${font}` }} > This is Exmaple text</p>
         <br></br>
         <Line></Line>




         <div style={{marginTop:'50px'}}>
          {cardNames.map((cardName) => (
            <div
              key={cardName}
              className={`system-text-option ${selectedCard === cardName ? 'selected' : ''}`}
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
