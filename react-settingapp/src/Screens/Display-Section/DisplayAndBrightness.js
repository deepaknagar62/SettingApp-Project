import React from 'react'
import BackArrow from '../../Components/BackArrow';
import Headingtxt from '../../Components/Headingtxt';
import '../CSS/displayBrightness.css';
import Line from '../../Components/Line';
import ToggleBtn from '../../Components/ToggleBtn';
import { useNavigate } from 'react-router-dom';


export default function DisplayAndBrightness(){
     
    const navigate = useNavigate();

    const OpenBrightnesslevel=()=>{
        navigate('/brightness-level');
    }
    
    const OpenReadingmode=()=>{
        navigate('/reading-mode');
    }
    const opneSystemFont=()=>{
        navigate('/system-fonts');
    }

    const openTextSize=()=>{
        navigate('/text-size');
    }

    const openDeviceVR=()=>{
        navigate('/device-in-vr');
    }
    const openFullscreenMode=()=>{
        navigate('/fullscreen-mode');
    }
    const goback=()=>{
        navigate('/')
      }

    return(

        <>
           <BackArrow onClick={goback}></BackArrow>
           <Headingtxt headingtxt="Display and Brightness"></Headingtxt>
           <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'25px',fontWeight:'300' , marginLeft:'25px'}}>
            <span >SCREEN</span></div> 

            <div className='display-container'  style={{marginBottom:'5px'}} onClick={OpenBrightnesslevel}>
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550'}}> Brightness level </span>
             <div style={{marginTop:'15px',display:'flex' , marginLeft:'150px',fontSize:'28px', fontWeight:'300'}}> &#62;</div>
            </div>

            <div className="reading-container " onClick={OpenReadingmode} >
            <span style={{fontSize:'20px',fontWeight:'550' }}>Reading mode</span> 
            <p style={{display:'flex', justifyItems:'center' ,fontSize:'15px',marginRight:'55px' }}>
                 Reading mode makes the colour of your display warmer allowing your eye to relax
                 <div style={{display:'flex', marginLeft:'30px' , fontSize:'27px',marginTop:'-15px',fontWeight:'400'}}> &#62;</div>
            </p>
           </div>

           

            <br></br>
            <Line></Line>

            <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'25px',fontWeight:'300' , marginLeft:'25px'}}>
            <span >SYSTEM FONT</span></div> 

            <div className='display-container'  style={{marginBottom:'5px'}} onClick={opneSystemFont}>
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550'}}> System font </span>
             <div style={{marginTop:'15px',display:'flex' , marginLeft:'185px',fontSize:'28px', fontWeight:'300'}}> &#62;</div>
            </div>

            <div className='display-container'  style={{marginBottom:'5px'}} onClick={openTextSize}>
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550'}}> Text size </span>
             <div style={{marginTop:'15px',display:'flex' , marginLeft:'215px',fontSize:'28px', fontWeight:'300'}}> &#62;</div>
            </div>

             
            <br></br>
            <Line></Line>

            <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'25px',fontWeight:'300' , marginLeft:'25px'}}>
            <span >SYSTEM</span></div> 

            <div className='display-container'  style={{marginTop:'5px'}} onClick={openDeviceVR}>
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550'}}> When device is in VR </span>
             <div style={{marginTop:'15px',display:'flex' , marginLeft:'105px',fontSize:'28px', fontWeight:'300'}}> &#62;</div>
            </div>


            <div className="reading-container " onClick={openFullscreenMode} >
            <span style={{fontSize:'20px',fontWeight:'550' }}>Fullscreen mode</span> 
            <p style={{display:'flex', justifyItems:'center' ,fontSize:'15px',marginRight:'55px' }}>
                 Allow selected apps to work in fullscreen mode
                 <div style={{display:'flex', marginLeft:'10px' , fontSize:'27px',marginTop:'-15px',fontWeight:'400'}}> &#62;</div>
            </p>
           </div>


           <div style={{marginTop:'10px', display:'flex'}} >
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550'}}>
                 Auto-rotate screen </span>
             <div style={{marginTop:'20px',display:'flex' , marginLeft:'0px'}}> <ToggleBtn name="D&B_autoRotateScreen"></ToggleBtn></div>
           </div>  
        </>
    );

}