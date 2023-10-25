import React, { useEffect, useState } from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import card1 from '../Images/card1.png'
import Line from '../../Components/Line';
import '../CSS/systemNavigation.css'
import ToggleBtn from '../../Components/ToggleBtn';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function SystemNavigation() {
  const apiName = 'system-navigation'
  const navigate = useNavigate();
  const goback=()=>{
    navigate('/home-screen')
  }



  
 const [selectedCard, setSelectedCard] = useState(null);


 useEffect(() => {
   axios.get(`/api/${apiName}`)
     .then(response => {
       setSelectedCard(response.data.selectedCard,);
     })
     .catch(error => {
       console.error(error);
     });
 }, []);

 const onOptionClick = (optionName) => {
   setSelectedCard(optionName);

   
   axios.put(`/api/${apiName}`, { selectedCard: optionName })
     .then(response => {
       console.log('Selected option updated:', response.data.selectedCard);
     })
     .catch(error => {
       console.error(error);
     });
 };

 const optionImages = [
   { name: 'Buttons', iconSrc: card1 },
   { name: 'Full screen gestures', iconSrc: card1 },
   
 ];


  return (
    <>
         <div className='system-navigation-conainer'>
        <BackArrow onClick={goback}></BackArrow>
        <Headingtxt headingtxt="System navigation"></Headingtxt>
            
        <div style={{marginTop:'40px',display:'flex'}}>
        {optionImages.map(option => (
          <div
            key={option.name}
            className={`sysnav-card ${selectedCard === option.name ? 'selected' : ''}`}
            onClick={() => onOptionClick(option.name)}
          >
            <img src={option.iconSrc} alt="icon" width="100%" height="100%" />
          </div>
          ))}
        </div>


         <div style={{marginLeft:"55px", marginTop:'10px',fontSize:'18px',fontWeight:'500',display:'flex'}}> Buttons
         <p style={{marginLeft:"100px", marginTop:'0px',fontSize:'18px',fontWeight:'500'}}> Full screen gestures </p></div>
          
         <br></br><br></br>
         <Line></Line> 


           <div style={{marginTop:'70px', display:'flex'}} >
                <span style={{marginLeft:'20px',marginTop:'20px',marginRight:'50px' ,fontSize:'20px',fontWeight:'550'}}>
                    Mirror buttons
                    <p style={{marginLeft:'0px',marginTop:'0px',marginRight:'50px' ,fontSize:'15px',fontWeight:'250'}}> Mirror back and Menu buttons </p>
                    <div style={{marginTop:'-50px',display:'flex' , marginLeft:'180px',fontSize:'25px',fontWeight:'200'}}> <ToggleBtn name="SysNav_mirrorbtn"></ToggleBtn></div></span>
              </div>
              </div>
    </>
  )
}
