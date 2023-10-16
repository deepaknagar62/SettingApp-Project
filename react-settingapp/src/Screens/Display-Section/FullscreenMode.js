import React from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import Lighttext from '../../Components/Lighttext'
import garlleryicon from '../Images/galleryicon.png';
import msgicon from '../Images/messageicon.png';
import contacticon from '../Images/contacticon.png';
import callicon from '../Images/callicon.png';
import ToggleBtn from '../../Components/ToggleBtn';
import gmail from '../Images/gmailicon.png';
import linkedin from '../Images/linkedin.png';
import youtube from '../Images/youtube.png';
import chrome from '../Images/chrome.png';
import paytm from '../Images/paytm.png';
import '../CSS/fullscreenMode.css';


export default function FullscreenMode() {
  return (
    <>

       <BackArrow></BackArrow>
       <Headingtxt headingtxt="Fullscreen mode"></Headingtxt>
       <Lighttext text="This apps works best in fullscreen mode"></Lighttext>

            <div className="app-icons">
                <img src={garlleryicon} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black' , fontWeight:'500' ,fontSize:"18px",marginLeft:'25px' }}>
                    Gallery </p>
                <div style={{display:'flex', marginLeft:'50px'}}> <ToggleBtn ></ToggleBtn></div>
            </div>


            <div className="app-icons">
                <img src={msgicon} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black' , fontWeight:'500' ,fontSize:"18px",marginLeft:'25px' }}>
                    Messages </p>
                <div style={{display:'flex', marginLeft:'30px'}}> <ToggleBtn ></ToggleBtn></div>
            </div>


            <div className="app-icons">
                <img src={contacticon } alt='message'></img>
                <p style={{ marginTop:'5px', color:'black' , fontWeight:'500' ,fontSize:"18px",marginLeft:'25px' }}>
                    Contacts </p>
                <div style={{display:'flex', marginLeft:'38px'}}> <ToggleBtn ></ToggleBtn></div>
            </div>

            <div className="app-icons">
       
                <img src={callicon} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black' , fontWeight:'500' ,fontSize:"18px",marginLeft:'25px' , marginRight:'-25px'}}>
                    Call history </p>
                <div style={{display:'flex', marginLeft:'43px' , marginRight:'-35px'}}> <ToggleBtn ></ToggleBtn></div>
            </div>

            <div className="app-icons">
                <img src={gmail} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black' , fontWeight:'500' ,fontSize:"18px",marginLeft:'25px' }}>
                    Gmail </p>
                <div style={{display:'flex', marginLeft:'65px'}}> <ToggleBtn ></ToggleBtn></div>
            </div>
            

            <div className="app-icons">
                <img src={linkedin} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black' , fontWeight:'500' ,fontSize:"18px",marginLeft:'25px' }}>
                    LinkedIn </p>
                <div style={{display:'flex', marginLeft:'40px'}}> <ToggleBtn ></ToggleBtn></div>
            </div>
            
            <div className="app-icons">
                <img src={paytm} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black' , fontWeight:'500' ,fontSize:"18px",marginLeft:'25px' }}>
                    Paytm </p>
                <div style={{display:'flex', marginLeft:'60px'}}> <ToggleBtn ></ToggleBtn></div>
            </div>


            <div className="app-icons">
                <img src={youtube} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black' , fontWeight:'500' ,fontSize:"18px",marginLeft:'25px' }}>
                    YouTube </p>
                <div style={{display:'flex', marginLeft:'41px'}}> <ToggleBtn ></ToggleBtn></div>
            </div>

            <div className="app-icons">
                <img src={chrome} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black' , fontWeight:'500' ,fontSize:"18px",marginLeft:'25px' }}>
                    chrome </p>
                <div style={{display:'flex', marginLeft:'50px'}}> <ToggleBtn ></ToggleBtn></div>
            </div>

      
    </>
  )
}
