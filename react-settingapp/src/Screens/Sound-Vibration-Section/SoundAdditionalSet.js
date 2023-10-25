import React from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import ToggleBtn from '../../Components/ToggleBtn'
import { useNavigate } from 'react-router-dom';
import '../CSS/silentDND.css'

export default function SoundAdditionalSet() {

  const navigate = useNavigate();

  const goback=()=>{
    navigate('/sound-vibration')
  }
  return (
    <>
      <div className='silent-dnd-conainer'>
     <BackArrow onClick={goback}></BackArrow>
     <Headingtxt headingtxt="Additional settings"></Headingtxt>

           <div style={{marginTop:'10px', display:'flex'}} >
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'600'}}>
                 Dial pad tones </span>
             <div style={{marginTop:'20px',display:'flex' , marginLeft:'25px'}}> <ToggleBtn name="SAS_dialpadTones" ></ToggleBtn></div>
           </div> 


           <div style={{marginTop:'10px', display:'flex'}} >
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'600'}}>
                 Tap sounds </span>
             <div style={{marginTop:'20px',display:'flex' , marginLeft:'55px'}}> <ToggleBtn name="SAS_TapSounds"></ToggleBtn></div>
           </div> 

           <div style={{marginTop:'10px', display:'flex'}} >
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'600'}}>
                 Screen locking sound </span>
             <div style={{marginTop:'20px',display:'flex' , marginLeft:'-42px'}}> <ToggleBtn name="SAS_screenLockSound"></ToggleBtn></div>
           </div> 

           <div style={{marginTop:'10px', display:'flex'}} >
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'600'}}>
                 Sreenshot sound</span>
             <div style={{marginTop:'20px',display:'flex' , marginLeft:'-1px'}}> <ToggleBtn name="SAS_screenShotSound"></ToggleBtn></div>
           </div> 

           <div style={{marginTop:'10px', display:'flex'}} >
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'600'}}>
                 "Delete sound" </span>
             <div style={{marginTop:'20px',display:'flex' , marginLeft:'13px'}}> <ToggleBtn name="SAS_deleteSound"></ToggleBtn></div>
           </div> 

           <div style={{marginTop:'10px', display:'flex'}} >
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'600'}}>
                 Boot audio </span>
             <div style={{marginTop:'20px',display:'flex' , marginLeft:'53px'}}> <ToggleBtn name="SAS_bootAudio"></ToggleBtn></div>
           </div> 
           </div>
      
    </>
  )
}
