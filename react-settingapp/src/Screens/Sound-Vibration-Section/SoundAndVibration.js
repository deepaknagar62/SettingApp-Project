import React from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import '../CSS/soundVibration.css'
import versionicon from '../Images/bellicon.png'
import phone from '../Images/callicon.png'
import alarm from '../Images/alarmicon.png'
import alarm2 from '../Images/alarm.png'
import bell from '../Images/bell.png'
import music from '../Images/music.png'
import Line from '../../Components/Line'
import ToggleBtn from '../../Components/ToggleBtn'
import { useNavigate } from 'react-router-dom'
export default function SoundAndVibration(){
    const navigate = useNavigate();

    const OpneSilentDND=()=>{
        navigate('/silent-dnd')
    }
    const OpneAdditionals=()=>{
        navigate('/sound-additional-settings')
    }

    return(
        <>
          
          <BackArrow></BackArrow>
          <Headingtxt headingtxt="Sound & vibration"></Headingtxt>

          <div style={{display:'flex'}}>
                <div className="ring-card">
                    <img  src={versionicon} alt='version'></img>
                    <div style={{marginTop:'-5px',fontSize:'18px',fontWeight:'400'}}>Notifications</div>
                    <p style={{marginTop:'0px',marginLeft:'-40px',fontWeight:'300'}}> Droplets</p>
                </div>

            <div style={{display : 'inline'}}> 
                <div className="ringtone-card">
                <img  src={phone} alt='version' width='25' height='25'></img>
                <div style={{fontSize:'20px', marginLeft:'80p',marginTop:'-20px',paddingLeft:'10px'}}><p>Ringtone</p>  
                <p style={{marginTop:'-20px',marginLeft:'0px',fontWeight:'300' ,fontSize:'15px'}}> Mi (Remix) </p> </div>
                </div>
            <div className="ringtone-card" style={{marginTop:'10px'}}>
                <img  src={alarm} alt='version' width='25' height='25'></img>
                <div style={{fontSize:'20px', marginLeft:'80p',marginTop:'-24px',paddingLeft:'10px'}}><p>Alarm</p>  
                <p style={{marginTop:'-20px',marginLeft:'0px',fontWeight:'300' ,fontSize:'15px'}}> Weather alarm </p> </div>
            </div>
            </div> 
           </div>

           <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'25px',fontWeight:'300' , marginLeft:'25px'}}>
            <span >SOUND</span></div> 

            <div className='silent-container' onClick={OpneSilentDND} >
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'600'}}> Silent/DND </span>
             <div style={{marginTop:'15px',display:'flex' , marginLeft:'200px',fontSize:'28px', fontWeight:'300'}}> &#62;</div>
            </div>
           
           <div style={{marginLeft:'20px', marginTop:'20px'}} > 
           <span style={{marginLeft:'10px',fontWeight:'400',fontSize:'18px', display:'flex'}}><img src={bell} alt="alarm" width='25' height='22'></img>  <span style={{marginLeft:'5px'}}>Calls, reminders, notifications</span> </span> 
           <div class="volume-container">
            <div class="volume-bar" id="volume-bar">
                <div class="volume-fill" id="volume-fill" style={{width:'50%'}}></div>
            </div>
            </div>
            </div>

        <div style={{marginLeft:'20px', marginTop:'20px'}} > 
           <span style={{marginLeft:'10px',fontWeight:'400',fontSize:'18px', display:'flex'}}>
            <img src={alarm2} alt="alarm" width='20' height='20'></img>  
            <span style={{marginLeft:'8px'}}>Alarm volume</span> </span> 
           <div class="volume-container">
            <div class="volume-bar" id="volume-bar">
                <div class="volume-fill" id="volume-fill" style={{width:'90%'}}></div>
            </div>
            </div>
        </div>


        <div style={{marginLeft:'20px', marginTop:'20px'}} > 
           <span style={{marginLeft:'10px',fontWeight:'400',fontSize:'18px', display:'flex'}}>
            <img src={music} alt="alarm" width='20' height='20'></img>  
            <span style={{marginLeft:'8px'}}>Music, games, media</span> </span> 
           <div class="volume-container">
            <div class="volume-bar" id="volume-bar">
                <div class="volume-fill" id="volume-fill" style={{width:'70%'}}></div>
            </div>
            </div>
        </div>

        <br></br>
        <Line></Line>
        <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'25px',fontWeight:'300' , marginLeft:'25px'}}>
            <span >VIBRATE</span></div> 


            <div style={{marginTop:'10px', display:'flex'}} >
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'600'}}>
                 Vibrate for calls </span>
             <div style={{marginTop:'20px',display:'flex' , marginLeft:'20px'}}> <ToggleBtn ></ToggleBtn></div>
           </div>   


            <div style={{marginTop:'10px', display:'flex'}} >
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'600'}}>
                 Vibrate in silent mode </span>
             <div style={{marginTop:'20px',display:'flex' , marginLeft:'-37px'}}> <ToggleBtn ></ToggleBtn></div>
           </div>    

           <br></br>
          <Line></Line>


          <div className='silent-container' onClick={OpneAdditionals} style={{marginBottom:'10px'}}>
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'600'}}> Additional settings </span>
             <div style={{marginTop:'15px',display:'flex' , marginLeft:'110px',fontSize:'28px', fontWeight:'300'}}> &#62;</div>
            </div>

    


        </>
    )
}