import React from 'react'
import './CSS/style.css'
import phoneicon from './Images/phone-icon.png';
import arrowicon from './Images/arrow-icon.png';
import simcard from './Images/sim-card.png'
import soundicon from './Images/sound-icon.png';
import displayicon from './Images/display-icon.png';
import connectionicon from './Images/connectionss.png';
import lockicon from './Images/lock-icon.png';
import homeicon from './Images/home-icon.png';
import batteryicon from './Images/battery.png';
import passwordicon from './Images/fingerprint.png';




export default function HomePage(){


    return(

        <>
            <div className='setting'>  Settings </div>
           <div class="search-bar">
            <div class="search-icon">
                <i class="fa fa-search"></i> 
            </div>
            <input class="search-input" type="text" placeholder="Search settings"/>
            </div>
           
            <div className="container">
                <div className="img-icon ">
                    <img src={phoneicon} alt="Phone Icon" width="25" height="25"/>
                </div>
                <span>About phone</span>
                <div className="arrow-icon1">
                <img src={arrowicon} alt="Arrow Icon" width="12" height="12"/>
                </div>
            </div>

            <div className="container" >
                <div className="img-icon ">
                    <img src={simcard} alt="SIM Icon" width="25" height="25"/>
                </div>
                <span>SIM cards & mobile network</span>
                <div className="arrow-icon2">
                <img src={arrowicon} alt="Arrow Icon" width="12" height="12"/>
                </div>
            </div>

            <div className="container" >
                <div className="img-icon ">
                    <img src={soundicon} alt="SIM Icon" width="24" height="24"/>
                </div>
                <span>Sound & vibration</span>
                <div className="arrow-icon3">
                <img src={arrowicon} alt="Arrow Icon" width="12" height="12"/>
                </div>
            </div>

            <div className="container" >
                <div className="img-icon ">
                    <img src={displayicon} alt="SIM Icon" width="25" height="25"/>
                </div>
                <span>Display & Brightness</span>
                <div className="arrow-icon4">
                <img src={arrowicon} alt="Arrow Icon" width="12" height="12"/>
                </div>
            </div>

            <div className="container" >
                <div className="img-icon ">
                    <img src={connectionicon} alt="SIM Icon" width="25" height="25"/>
                </div>
                <span>Connection & sharing</span>
                <div className="arrow-icon5">
                <img src={arrowicon} alt="Arrow Icon" width="12" height="12"/>
                </div>
            </div>

            <div className="container" >
                <div className="img-icon ">
                    <img src={lockicon} alt="SIM Icon" width="25" height="25"/>
                </div>
                <span>Lock screen</span>
                <div className="arrow-icon6">
                <img src={arrowicon} alt="Arrow Icon" width="12" height="12"/>
                </div>
            </div>

            <div className="container" >
                <div className="img-icon ">
                    <img src={homeicon} alt="SIM Icon" width="25" height="25"/>
                </div>
                <span>Home screen</span>
                <div className="arrow-icon7">
                <img src={arrowicon} alt="Arrow Icon" width="12" height="12"/>
                </div>
            </div>

            <div className="container" >
                <div className="img-icon ">
                    <img src={batteryicon} alt="SIM Icon" width="24" height="24"/>
                </div>
                <span>Battery</span>
                <div className="arrow-icon8">
                <img src={arrowicon} alt="Arrow Icon" width="12" height="12"/>
                </div>
            </div>

            <div className="container" >
                <div className="img-icon ">
                    <img src={passwordicon} alt="SIM Icon" width="25" height="25"/>
                </div>
                <span>Password & security</span>
                <div className="arrow-icon9">
                <img src={arrowicon} alt="Arrow Icon" width="12" height="12"/>
                </div>
            </div>
        
        </>

    );


}