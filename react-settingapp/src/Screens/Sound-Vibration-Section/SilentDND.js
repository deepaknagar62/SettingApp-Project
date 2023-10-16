import React from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import '../CSS/silentDND.css'
import Line from '../../Components/Line'
import ToggleBtn from '../../Components/ToggleBtn'

export default function SilentDND() {
  return (
    <>
       <BackArrow></BackArrow>
       <Headingtxt headingtxt="Silent/DND"></Headingtxt>

       <div className="choose-silent-option" style={{marginTop:'50px'}}>
         <div style={{marginLeft:'30px'}}>
            <span style={{fontSize:'20px', fontWeight:'400'}}>Regular</span>
            <p style={{fontSize:'15px', fontWeight:'250', marginTop:'0px'}}> All sounds will work normally</p>
         </div>
       </div>
       
       <div className="choose-silent-option">
       <div style={{marginLeft:'30px'}}>
            <span style={{fontSize:'20px', fontWeight:'400'}}>Silent</span>
            <p style={{fontSize:'15px', fontWeight:'250', marginTop:'0px'}}> 
            Calls and notifications will be silenced</p>
         </div>
       </div>

       <div className="choose-silent-option">
       <div style={{marginLeft:'30px'}}>
            <span style={{fontSize:'20px', fontWeight:'400'}}>DND</span>
            <p style={{fontSize:'15px', fontWeight:'250', marginTop:'0px'}}> 
            Silence sounds and turn off vibration except for alarms</p>
         </div>
       </div>

       <br></br>
       <Line></Line>


       <div style={{marginTop:'10px', display:'flex'}} >
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'500'}}>
                 Mute music stream </span>
             <div style={{marginTop:'20px',display:'flex' , marginLeft:'0px'}}> <ToggleBtn ></ToggleBtn></div>
           </div>   
           

           <br></br>
       <Line></Line>
    </>
  )
}
