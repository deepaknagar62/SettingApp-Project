import React from 'react'
import './CSS/style.css'
import phoneicon from './Images/phone-icon.png';
import simcard from './Images/sim-card.png'
import soundicon from './Images/snd3.png';
import displayicon from './Images/display-icon.png';
import connectionicon from './Images/connectionss.png';
import lockicon from './Images/lock-icon.png';
import homeicon from './Images/home-icon.png';
import batteryicon from './Images/battery.png';
import passwordicon from './Images/fingerprint.png';

import { useNavigate } from 'react-router-dom';
import Line from '../Components/Line';



export default function HomePage(){
    const navigate = useNavigate();

    const OpenAboutPhone = () => {
        navigate('/about-phone'); 
      };

    const OpenSimCards = () =>{
        navigate('/simcards-network');
    } 
    const OpenSoundVibration = ()=>{
        navigate('/sound-vibration');
    } 

    const OpenDisplay = ()=>{
        navigate('/display');
    }

    const OpenConnectionSharing =()=>{
        navigate('/connection-sharing');
    }
    const OpenLockScreen =()=>{
        navigate('/lock-screen');
    }

    const OpenHomeScreen =()=> {
        navigate('/home-screen');
    }

    const OpenBattery =()=>{
        navigate('/battery');
    }

    const OpenPasswordAndSecurity=()=>{
        navigate('/password-security');
    }
    return(

         <>
          
           <div className='homepage-container'> 

            <div className='setting'>  Settings </div>
           <div class="search-bar">
            <div class="search-icon">
                <i class="fa fa-search"></i> 
            </div>
            <input class="search-input" type="text" placeholder="Search settings"/>
            </div>
           
            <div className="container1" onClick={OpenAboutPhone}>
                <div className="img-icon ">
                    <img src={phoneicon} alt="Phone Icon" width="30" height="30"/>
                </div>
                <span style={{fontSize:'20px' ,fontWeight:'550'}}>About Phone</span>
                <div style={{fontSize:'25px',marginLeft:'153px',fontWeight:'200'}}> &#62;</div>
            </div>
            <br></br>
            <Line></Line>

            <div className="container1" onClick={OpenSimCards}>
                <div className="img-icon ">
                    <img src={simcard} alt="SIM Icon" width="30" height="30"/>
                </div>
                <span style={{fontSize:'20px' ,fontWeight:'550'}}>SIM cards & mobile network</span>
                <div style={{fontSize:'25px',marginLeft:'16px',fontWeight:'200',marginTop:'-2px'}}> &#62;</div>
            </div>

            <div className="container1" onClick={OpenConnectionSharing }>
                <div className="img-icon ">
                    <img src={connectionicon} alt="SIM Icon" width="30" height="30"/>
                </div>
                <span style={{fontSize:'20px' ,fontWeight:'550'}}>Connection & sharing</span>
                <div style={{fontSize:'25px',marginLeft:'75px',fontWeight:'200'}}> &#62;</div>
            </div>
             
            <br></br>
            <Line></Line>

            <div className="container1" onClick={OpenSoundVibration}>
                <div className="img-icon ">
                    <img src={soundicon} alt="SIM Icon" width="30" height="30"/>
                </div>
                <span style={{fontSize:'20px' ,fontWeight:'550'}}>Sound & vibration</span>
                <div style={{fontSize:'25px',marginLeft:'105px',fontWeight:'200'}}> &#62;</div>
            </div>

            <div className="container1" onClick={OpenDisplay}>
                <div className="img-icon ">
                    <img src={displayicon} alt="SIM Icon" width="30" height="30"/>
                </div>
                <span style={{fontSize:'20px' ,fontWeight:'550'}}>Display & Brightness</span>
                <div style={{fontSize:'25px',marginLeft:'80px',fontWeight:'200'}}> &#62;</div>
            </div>

            

            <div className="container1" onClick={OpenLockScreen}>
                <div className="img-icon ">
                    <img src={lockicon} alt="SIM Icon" width="30" height="30"/>
                </div>
                <span style={{fontSize:'20px' ,fontWeight:'550'}}>Lock screen</span>
                <div style={{fontSize:'25px',marginLeft:'160px',fontWeight:'200'}}> &#62;</div>
            </div>

            <div className="container1" onClick={OpenHomeScreen}>
                <div className="img-icon ">
                    <img src={homeicon} alt="SIM Icon" width="30" height="30"/>
                </div>
                <span style={{fontSize:'20px' ,fontWeight:'550'}}>Home screen</span>
                <div style={{fontSize:'25px',marginLeft:'148px',fontWeight:'200'}}> &#62;</div>
            </div>
                 
            <br></br>
            <Line></Line>


            <div className="container1" onClick={OpenBattery} >
                <div className="img-icon ">
                    <img src={batteryicon} alt="SIM Icon" width="30" height="30"/>
                </div>
                <span style={{fontSize:'20px' ,fontWeight:'550'}}>Battery</span>
                <div style={{fontSize:'25px',marginLeft:'195px',fontWeight:'200'}}> &#62;</div>
            </div>

            <div className="container1" onClick={OpenPasswordAndSecurity}>
                <div className="img-icon ">
                    <img src={passwordicon} alt="SIM Icon" width="30" height="30"/>
                </div>
                <span style={{fontSize:'20px' ,fontWeight:'550'}}>Password & security</span>
                <div style={{fontSize:'25px',marginLeft:'80px',fontWeight:'200'}}> &#62;</div>
            </div>
            </div>
        </>

    );


}