import React, { useEffect, useState } from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import home from '../Images/home-icon.png';
import '../CSS/defaultLauncher.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function DefaultLauncher() {
  const apiName = 'default-home-screen'
  const navigate = useNavigate();
  const goback=()=>{
    navigate('/home-screen')
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
    'System launcher',
    
   
  ];
  return (
    <>

       <BackArrow onClick={goback}></BackArrow>
       <Headingtxt headingtxt="Default Home Screen"></Headingtxt>
       
        
       <div style={{marginTop:'40px'}}>
          {cardNames.map((cardName) => (
            <div
              key={cardName}
              className={`default-launcher ${selectedCard === cardName ? 'selected' : ''}`}
              onClick={() => handleCardClick(cardName)}
            >
              <p  style={{ marginTop:'13px',display:'flex' , color:'black',marginLeft:'30px' , fontWeight:'550' ,fontSize:"20px" }}> 
               <div style={{marginRight:'20px',marginTop:'-5px'}}> <img src={home} alt="home" width='30' height='30'></img></div> 
              {cardName}</p>
            </div>
          ))}
        </div>


      
    </>
  )
}
