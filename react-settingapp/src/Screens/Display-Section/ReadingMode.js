import React from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import ToggleBtn from '../../Components/ToggleBtn'
import '../CSS/displayBrightness.css';
import Line from '../../Components/Line';
import { useNavigate } from 'react-router-dom';

export default function ReadingMode() {

  const navigate = useNavigate();
  const goback=()=>{
    navigate('/display')
  }
  return (
    <>   
         <div className='display-brightness-conainer'>
        <BackArrow onClick={goback}></BackArrow>
        <Headingtxt headingtxt="Reading mode"></Headingtxt>

            <div className="reading-container "  >
            <span >Reading mode</span> 
            <p style={{display:'flex', justifyItems:'center' ,fontSize:'15px',marginRight:'40px' }}>
                 Reading mode makes the colour of your display warmer allowing your eye to relax
                 <div style={{display:'flex', marginLeft:'-80px' ,marginTop:'-5px'}}> <ToggleBtn name="readinmode_reading"></ToggleBtn></div>
            </p>
           </div>

           <br></br>
           <Line></Line>

           <div className="reading-container "  >
            <span >Schedule</span> 
            <p style={{display:'flex', justifyItems:'center' ,fontSize:'15px',marginRight:'40px' }}>
                 Schedule time to turn Reading mode on and off
                 <div style={{display:'flex', marginLeft:'-80px' ,marginTop:'-5px'}}> <ToggleBtn name="readinmode_schedule"></ToggleBtn></div>
            </p>
           </div>
           </div>
    </>
  )
}
