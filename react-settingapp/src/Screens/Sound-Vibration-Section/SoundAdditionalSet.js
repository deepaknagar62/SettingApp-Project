import React from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import ToggleBtn from '../../Components/ToggleBtn'

export default function SoundAdditionalSet() {
  return (
    <>

     <BackArrow></BackArrow>
     <Headingtxt headingtxt="Additional settings"></Headingtxt>

           <div style={{marginTop:'10px', display:'flex'}} >
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'600'}}>
                 Dial pad tones </span>
             <div style={{marginTop:'20px',display:'flex' , marginLeft:'20px'}}> <ToggleBtn ></ToggleBtn></div>
           </div> 


           <div style={{marginTop:'10px', display:'flex'}} >
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'600'}}>
                 Tap sounds </span>
             <div style={{marginTop:'20px',display:'flex' , marginLeft:'50px'}}> <ToggleBtn ></ToggleBtn></div>
           </div> 

           <div style={{marginTop:'10px', display:'flex'}} >
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'600'}}>
                 Screen locking sound </span>
             <div style={{marginTop:'20px',display:'flex' , marginLeft:'-42px'}}> <ToggleBtn ></ToggleBtn></div>
           </div> 

           <div style={{marginTop:'10px', display:'flex'}} >
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'600'}}>
                 Sreenshot sound</span>
             <div style={{marginTop:'20px',display:'flex' , marginLeft:'-1px'}}> <ToggleBtn ></ToggleBtn></div>
           </div> 

           <div style={{marginTop:'10px', display:'flex'}} >
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'600'}}>
                 "Delete sound" </span>
             <div style={{marginTop:'20px',display:'flex' , marginLeft:'13px'}}> <ToggleBtn ></ToggleBtn></div>
           </div> 

           <div style={{marginTop:'10px', display:'flex'}} >
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'600'}}>
                 Boot audio </span>
             <div style={{marginTop:'20px',display:'flex' , marginLeft:'53px'}}> <ToggleBtn ></ToggleBtn></div>
           </div> 
      
    </>
  )
}
