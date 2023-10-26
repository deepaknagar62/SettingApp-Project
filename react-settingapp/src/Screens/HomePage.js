
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

import { Route, Routes, useNavigate } from 'react-router-dom';
import Line from '../Components/Line';
import { useState } from 'react';
import SearchBar from '../Components/SearchBar';
import AboutPhone from './About-Phone-Section/AboutPhone';
import LockScreen from './Lock-Screen-Section/LockScreen';
import Battery from './Battery-Section/Battery';
import SimCards from './SIM-Cards-Networks-Section/SimCards';
import ConnectionAndSharing from './Connection-Sharing-Section/ConnectionAndSharing';
import DisplayAndBrightness from './Display-Section/DisplayAndBrightness';
import HomeScreen from './Home-Screen-Section/HomeScreen';
import PasswordAndSecurity from './Password-Security-Section/PasswordAndSecurity';
import SoundAndVibration from './Sound-Vibration-Section/SoundAndVibration';
import BackupAndRestore from './About-Phone-Section/BackupAndRestore';
import FactoryReset from './About-Phone-Section/FactoryReset';
import SimcardSettings from './SIM-Cards-Networks-Section/SimcardSettings';
import SilentDND from './Sound-Vibration-Section/SilentDND';
import Ringtone from './Sound-Vibration-Section/Ringtone';
import BrightnessLevel from './Display-Section/BrightnessLevel';

 



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
       
    const [selectedComponent, setSelectedComponent] = useState(null);

    const onComponentSelect = (componentName) => {
      setSelectedComponent(componentName);
      navigate(`/${componentName.toLowerCase().replace(' ', '-')}`); 
    };
  
    
    const components = [
      'About Phone',
      'Lock Screen',
      'Battery',
      'Display',
      'connection-sharing',
      'Simcards network',
      'Sound vibration',
      'Backup restore',
      'Factory reset',
      'Simcard settings',
      'Silent DND',
      'Choose ringtone ',
      'Brightness level',
      'Password security'
    ];

    return(

         <>
          
           <div className='homepage-container'> 

            <div className='setting'>  Settings </div>
          
            <div>
                <SearchBar components={components} onComponentSelect={onComponentSelect} />
            </div>

           
            {selectedComponent && (
                <Routes>
                <Route path="/about-phone" element={<AboutPhone />} />
                <Route path="/lock-screen" element={<LockScreen />} />
                <Route path="/battery" element={<Battery />} />
                <Route path="/connection-sharing" element={<ConnectionAndSharing/>} />
                <Route path="/display" element={<DisplayAndBrightness/>} />
                <Route path="/simcards-network" element={<SimCards/>} />
                <Route path="/sound-vibration" element={<SoundAndVibration/>} />
                <Route path="/home-screen" element={<HomeScreen/>} />
                <Route path="/password-security" element={<PasswordAndSecurity/>} />
                <Route path="/backup-restore" element={<BackupAndRestore/>}/>
                <Route path="/factory-reset" element={<FactoryReset/>}></Route>
                <Route path='/simcard-settings' element={<SimcardSettings/>}></Route>
                <Route path='/silent-dnd' element={<SilentDND/>}></Route>
                <Route path='/choose-ringtone' element={<Ringtone/>}></Route>
                <Route path='/brightness-level' element={<BrightnessLevel/>}></Route>
                <Route path="/password-security" element={<PasswordAndSecurity/>} />
                </Routes>
            )}
            
                    
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