import React from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import card1 from '../Images/card1.png'
import card2 from '../Images/card2.png'
import Line from '../../Components/Line';
import '../CSS/InHomeScreen.css'
import ToggleBtn from '../../Components/ToggleBtn'
import { useNavigate } from 'react-router-dom'
export default function InHomeScreen() {

  const navigate = useNavigate();
  const goback=()=>{
    navigate('/home-screen')
  }
  return (
    <>

        <BackArrow onClick={goback}></BackArrow>
        <Headingtxt headingtxt="Home screen"></Headingtxt>
        
        <div style={{display:'flex'}}>  
        <div className="inhome-card "> 
          <img src={card1} alt="card1" width='100%' height='100%'></img>
        </div>
        <div className="inhome-card "> <img src={card2} alt="card1" width='100%' height='100%'></img></div>
        </div> 
         <div style={{marginLeft:"55px", marginTop:'10px',fontSize:'18px',fontWeight:'500',display:'flex'}}> Classic
         <p style={{marginLeft:"110px", marginTop:'0px',fontSize:'18px',fontWeight:'500'}}> With App drawer </p></div>
          
         <br></br><br></br>
         <Line></Line> 

            <div style={{marginTop:'70px', display:'flex'}} >
                <span style={{marginLeft:'20px',marginTop:'20px',marginRight:'50px' ,fontSize:'20px',fontWeight:'550'}}>
                    Swipe up on the Home screen 
                    <p style={{marginLeft:'0px',marginTop:'0px',marginRight:'50px' ,fontSize:'20px',fontWeight:'550'}}> to open serach </p>
                    <div style={{marginTop:'-50px',display:'flex' , marginLeft:'180px',fontSize:'25px',fontWeight:'200'}}> <ToggleBtn name="inHome_swipeUpHomeScreen"></ToggleBtn></div></span>
              </div>
               
    </>
  )
}
