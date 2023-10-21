import React from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import ToggleBtn from '../../Components/ToggleBtn'
import  '../CSS/brightnessLevel.css';
import Lighttext from '../../Components/Lighttext';
import { useNavigate } from 'react-router-dom';
import VolumeContainer from '../../Components/VolumeContainer';



export default function BrightnessLevel() {
  const navigate = useNavigate();
  const goback=()=>{
    navigate('/display')
  }
  return (
    <>
         <BackArrow onClick={goback}></BackArrow>
         <Headingtxt headingtxt="Brightness level"></Headingtxt>  


         <div style={{marginTop:'10px', display:'flex'}} >
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550', marginRight:'-30px'}}>
                 Automatic brightness </span>
             <div style={{marginTop:'20px',display:'flex' , marginLeft:'5px'}}> <ToggleBtn name="brightness_automaticBrightness"></ToggleBtn></div>
           </div>  
          
           <div style={{marginLeft:'20px', marginTop:'20px'}}>  
               <VolumeContainer name="Brightness_level_container"></VolumeContainer>
            </div>  

            <Lighttext text="Screen brightness will be optimised according to ambient light"></Lighttext>

         

             <div style={{marginTop:'10px', display:'flex'}} >
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550', marginRight:'-30px'}}>
                 Sunlight mode </span>
             <div style={{marginTop:'20px',display:'flex' , marginLeft:'65px'}}> <ToggleBtn name="brightness_sunlightMode"></ToggleBtn></div>
           </div> 

           <Lighttext text="Adjust brightness to strong ambient light when automatic brightness is off"></Lighttext>
    </>
  )
}
