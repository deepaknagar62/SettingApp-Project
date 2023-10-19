import React from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import card1 from '../Images/card1.png'
import Line from '../../Components/Line';
import '../CSS/systemNavigation.css'
import ToggleBtn from '../../Components/ToggleBtn';
export default function SystemNavigation() {
  return (
    <>

        <BackArrow></BackArrow>
        <Headingtxt headingtxt="System navigation"></Headingtxt>


        <div style={{display:'flex'}}>  
        <div className="sysnav-card "> 
          <img src={card1} alt="card1" width='100%' height='100%'></img>
        </div>
        <div className="sysnav-card "> <img src={card1} alt="card1" width='100%' height='100%'></img></div>
        </div> 
         <div style={{marginLeft:"55px", marginTop:'10px',fontSize:'18px',fontWeight:'500',display:'flex'}}> Buttons
         <p style={{marginLeft:"110px", marginTop:'0px',fontSize:'18px',fontWeight:'500'}}> Full screen gestures </p></div>
          
         <br></br><br></br>
         <Line></Line> 


           <div style={{marginTop:'70px', display:'flex'}} >
                <span style={{marginLeft:'20px',marginTop:'20px',marginRight:'50px' ,fontSize:'20px',fontWeight:'550'}}>
                    Mirro buttons
                    <p style={{marginLeft:'0px',marginTop:'0px',marginRight:'50px' ,fontSize:'15px',fontWeight:'250'}}> Mirror back and Menu buttons </p>
                    <div style={{marginTop:'-50px',display:'flex' , marginLeft:'180px',fontSize:'25px',fontWeight:'200'}}> <ToggleBtn></ToggleBtn></div></span>
              </div>
      
    </>
  )
}
