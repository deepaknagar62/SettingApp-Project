import React from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import '../CSS/screenLock.css'
import { useNavigate } from 'react-router-dom'
export default function ScreenLock() {
    const navigate = useNavigate();
    const goback=()=>{
        navigate('/password-security');
    }
  return (
    <>

         <BackArrow onClick={goback}></BackArrow>
         <Headingtxt headingtxt="Change screen lock"></Headingtxt>



         <div className="lock-option" style={{marginTop:'20px'}}>
         <div style={{marginLeft:'30px'}}>
            <span style={{fontSize:'20px', fontWeight:'550'}}>Pattern</span>
            <p style={{fontSize:'15px', fontWeight:'250', marginTop:'0px'}}>
                 Draw a simple pattern with your finger to unlock device</p>
         </div>
       </div> 

       <div className="lock-option" style={{marginTop:'20px'}}>
         <div style={{marginLeft:'30px'}}>
            <span style={{fontSize:'20px', fontWeight:'550'}}>PIN</span>
            <p style={{fontSize:'15px', fontWeight:'250', marginTop:'0px'}}>
            Enter pin to set the lock</p>
         </div>
       </div> 

       <div className="lock-option" style={{marginTop:'20px'}}>
         <div style={{marginLeft:'30px'}}>
            <span style={{fontSize:'20px', fontWeight:'550'}}>Password</span>
            <p style={{fontSize:'15px', fontWeight:'250', marginTop:'0px'}}>
                 Enter 4 or more letters or number to unlock device</p>
         </div>
       </div> 


       <div style={{color:'red' , fontSize:'15px',marginTop:'25px',fontWeight:'500' , marginLeft:'25px'}}>
            <span >Turn off screen lock</span></div> 
      
    </>
  )
}
