import React from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import ToggleBtn from '../../Components/ToggleBtn'
import  '../CSS/brightnessLevel.css';
import Lighttext from '../../Components/Lighttext';



export default function BrightnessLevel() {
  return (
    <>
         <BackArrow></BackArrow>
         <Headingtxt headingtxt="Brightness level"></Headingtxt>  


         <div style={{marginTop:'10px', display:'flex'}} >
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550', marginRight:'-30px'}}>
                 Automatic brightness </span>
             <div style={{marginTop:'20px',display:'flex' , marginLeft:'5px'}}> <ToggleBtn ></ToggleBtn></div>
           </div>  
          
           <div style={{marginLeft:'20px', marginTop:'20px'}}>  
           <div class="volume-container4">
            <div class="volume-bar4" id="volume-bar">
                <div class="volume-fill4" id="volume-fill" style={{width:'70%'}}></div>
            </div>
            </div> 
            </div>  

            <Lighttext text="Screen brightness will be optimised according to ambient light"></Lighttext>

         

             <div style={{marginTop:'10px', display:'flex'}} >
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550', marginRight:'-30px'}}>
                 Sunlight mode </span>
             <div style={{marginTop:'20px',display:'flex' , marginLeft:'65px'}}> <ToggleBtn ></ToggleBtn></div>
           </div> 

           <Lighttext text="Adjust brightness to strong ambient light when automatic brightness is off"></Lighttext>
    </>
  )
}
