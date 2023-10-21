import React from 'react'
import Line from '../../Components/Line';
import ToggleBtn from '../../Components/ToggleBtn';
import BackArrow from '../../Components/BackArrow';
import Headingtxt from '../../Components/Headingtxt';
import { useNavigate } from 'react-router-dom';
import '../CSS/simcardSettings.css'

export default function SimcardSettings2() {
    const navigate = useNavigate();
    const openPrefNetwork=()=>{
        navigate('/preferred-network2')
    }
    const openMobileNetwork=()=>{
        navigate('/mobile-networks2')
    }

    const goback=()=>{
        navigate('/simcards-network')
    }

  return (
    <>
 
      <BackArrow onClick={goback}></BackArrow>
     <Headingtxt headingtxt="SIM card settings"></Headingtxt>
      
         <div className='sim-net-container' >
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'600'}}> Turn on </span>
             <div style={{marginTop:'20px',display:'flex' , marginLeft:'100px'}}> <ToggleBtn name="simcard_turnOn2"></ToggleBtn></div>
         </div>
         <br></br>
         <Line></Line>

         <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'20px',fontWeight:'300' , marginLeft:'20px'}}>
            <span >EDIT SIM INFO</span></div> 


         <div className='sim-net-container' >
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'600'}}> Edit SIM card name </span>
             <div style={{marginTop:'20px',display:'flex' , marginLeft:'120px',fontSize:'28px', fontWeight:'300'}}> &#62;</div>
         </div>  

         <div className='sim-net-container' >
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'600'}}> Edit SIM card number </span>
             <div style={{marginTop:'20px',display:'flex' , marginLeft:'100px',fontSize:'28px', fontWeight:'300'}}> &#62;</div>
         </div>  

         <br></br>
         <Line></Line>

         <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'20px',fontWeight:'300' , marginLeft:'20px'}}>
            <span >MOBILE NETWORK</span></div> 

        <div className='sim-net-container' onClick={openPrefNetwork} >
            <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'600'}}> Preferred network type </span>
            <div style={{marginTop:'20px',display:'flex' , marginLeft:'75px',fontSize:'28px', fontWeight:'300'}}> &#62;</div>
         </div>   

         <div className='sim-net-container' onClick={openMobileNetwork}  >
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'600'}}> Mobile networks </span>
             <div style={{marginTop:'20px',display:'flex' , marginLeft:'140px',fontSize:'28px', fontWeight:'300'}}> &#62;</div>
         </div>

         <div className="sim-net-settings " style={{marginTop:'30px',marginLeft:'20px'}}>
            <span style={{fontSize:"20px" ,fontWeight:'600'}}>Use VoLTE</span> 
            <p style={{display:'flex', justifyItems:'center' ,fontSize:'14px',marginRight:'39px',marginTop:'0px' }}>
                 Use VoLTE to improve the quality of voice calls
                 <div style={{display:'flex', marginLeft:'-65px',marginTop:'-10px'}}> <ToggleBtn name="simcard_useVolte2" ></ToggleBtn></div>
            </p>
           </div>

           <br></br>
           <Line></Line>

           <div className="sim-net-settings " style={{marginTop:'30px',marginLeft:'20px'}}>
            <span style={{fontSize:"20px" ,fontWeight:'600'}}>Make calls using Wi-Fi</span> 
            <p style={{display:'flex', justifyItems:'center' ,fontSize:'14px',marginRight:'39px',marginTop:'0px' }}>
                 Use Wi-Fi to make and receive calls whenever possible
                 <div style={{display:'flex', marginLeft:'-65px',marginTop:'-10px'}}> <ToggleBtn name="simcard_makeCallWiFi2"></ToggleBtn></div>
            </p>
           </div>

           </>
  )
}
