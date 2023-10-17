import React from 'react'
import Headingtxt from '../../Components/Headingtxt'
import BackArrow from '../../Components/BackArrow'
import ToggleBtn from '../../Components/ToggleBtn'
import '../CSS/simcardSettings.css'
import Line from '../../Components/Line'

export default function SimcardSettings() {
  return (
    <>
 
      <BackArrow></BackArrow>
     <Headingtxt headingtxt="SIM card settings"></Headingtxt>
      
         <div className='sim-net-container' >
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'600'}}> Turn on </span>
             <div style={{marginTop:'20px',display:'flex' , marginLeft:'100px'}}> <ToggleBtn ></ToggleBtn></div>
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

        <div className='sim-net-container' >
            <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'600'}}> Preferred network type </span>
            <div style={{marginTop:'20px',display:'flex' , marginLeft:'70px',fontSize:'28px', fontWeight:'300'}}> &#62;</div>
         </div>   

         <div className='sim-net-container' >
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'600'}}> Mobile networks </span>
             <div style={{marginTop:'20px',display:'flex' , marginLeft:'130px',fontSize:'28px', fontWeight:'300'}}> &#62;</div>
         </div>

         <div className="sim-net-settings " style={{marginTop:'30px',marginLeft:'20px'}}>
            <span style={{fontSize:"20px" ,fontWeight:'600'}}>Use VoLTE</span> 
            <p style={{display:'flex', justifyItems:'center' ,fontSize:'14px',marginRight:'39px',marginTop:'0px' }}>
                 Use VoLTE to improve the quality of voice calls
                 <div style={{display:'flex', marginLeft:'-65px',marginTop:'-10px'}}> <ToggleBtn ></ToggleBtn></div>
            </p>
           </div>

           <br></br>
           <Line></Line>

           <div className="sim-net-settings " style={{marginTop:'30px',marginLeft:'20px'}}>
            <span style={{fontSize:"20px" ,fontWeight:'600'}}>Make calls using Wi-Fi</span> 
            <p style={{display:'flex', justifyItems:'center' ,fontSize:'14px',marginRight:'39px',marginTop:'0px' }}>
                 Use Wi-Fi to make and receive calls whenever possible
                 <div style={{display:'flex', marginLeft:'-65px',marginTop:'-10px'}}> <ToggleBtn ></ToggleBtn></div>
            </p>
           </div>
        
    </>
  )
}
