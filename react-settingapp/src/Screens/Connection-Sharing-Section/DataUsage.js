import React from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import printer from '../Images/print.png'
import youtube from '../Images/youtube.png'
import appicon from '../Images/appicon.png'
import callicon from '../Images/callicon.png'
import linkedin from '../Images/linkedin.png'
import message from '../Images/messageicon.png'
import paytm from '../Images/paytm.png'
import music from '../Images/print.png'
import contact from '../Images/chrome.png'
import '../CSS/datausage.css'
export default function DataUsage() {
  return (
    <>

       <BackArrow></BackArrow>
       <Headingtxt headingtxt="Data usage"></Headingtxt>

            <div className="datausage-icons" >
                <img src={printer} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black',marginRight:'-30px' , fontWeight:'550' ,fontSize:"20px",marginLeft:'25px' }}>
                    Mobile hotspots 
                    <div class="volume-container2">
                    <div class="volume-bar2" id="volume-bar">
                        <div class="volume-fill2" id="volume-fill" style={{width:'100%'}}></div>
                    </div>
                    </div>
                     </p>
                     <p style={{ marginTop:'25px', fontWeight:'250' ,fontSize:"14px",marginLeft:'15px' }}>900.0 MB</p>
      
                
            </div> 

            <div className="datausage-icons" >
                <img src={appicon} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black', fontWeight:'550' ,fontSize:"20px",marginLeft:'25px' }}>
                    System apps 
                    <div class="volume-container2">
                    <div class="volume-bar2" id="volume-bar">
                        <div class="volume-fill2" id="volume-fill" style={{width:'100%'}}></div>
                    </div>
                    </div>
                     </p>
                     <p style={{ marginTop:'25px', fontWeight:'250' ,fontSize:"14px",marginLeft:'15px' }}>600.0 MB</p>
      
                
            </div> 

            <div className="datausage-icons" >
                <img src={youtube} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black',marginRight:'-30px' , fontWeight:'550' ,fontSize:"20px",marginLeft:'25px' }}>
                    YouTube 
                    <div class="volume-container2">
                    <div class="volume-bar2" id="volume-bar">
                        <div class="volume-fill2" id="volume-fill" style={{width:'100%'}}></div>
                    </div>
                    </div>
                     </p>
                     <p style={{ marginTop:'25px', fontWeight:'250' ,fontSize:"14px",marginLeft:'15px' }}>400.0 MB</p>
      
                
            </div> 


            <div className="datausage-icons" >
                <img src={callicon} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black',marginRight:'-30px' , fontWeight:'550' ,fontSize:"20px",marginLeft:'25px' }}>
                    Truecaller 
                    <div class="volume-container2">
                    <div class="volume-bar2" id="volume-bar">
                        <div class="volume-fill2" id="volume-fill" style={{width:'100%'}}></div>
                    </div>
                    </div>
                     </p>
                     <p style={{ marginTop:'25px', fontWeight:'250' ,fontSize:"14px",marginLeft:'15px' }}>200.0 MB</p>
      
                
            </div> 


            <div className="datausage-icons" >
                <img src={linkedin} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black',marginRight:'-30px' , fontWeight:'550' ,fontSize:"20px",marginLeft:'25px' }}>
                    LinkedIn
                    <div class="volume-container2">
                    <div class="volume-bar2" id="volume-bar">
                        <div class="volume-fill2" id="volume-fill" style={{width:'100%'}}></div>
                    </div>
                    </div>
                     </p>
                     <p style={{ marginTop:'25px', fontWeight:'250' ,fontSize:"14px",marginLeft:'15px' }}>190.4 MB</p>
      
                
            </div> 

            <div className="datausage-icons" >
                <img src={message} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black',marginRight:'-30px' , fontWeight:'550' ,fontSize:"20px",marginLeft:'25px' }}>
                   Messages
                    <div class="volume-container2">
                    <div class="volume-bar2" id="volume-bar">
                        <div class="volume-fill2" id="volume-fill" style={{width:'100%'}}></div>
                    </div>
                    </div>
                     </p>
                     <p style={{ marginTop:'25px', fontWeight:'250' ,fontSize:"14px",marginLeft:'15px' }}>160.0 MB</p>
      
                
            </div> 


            <div className="datausage-icons" >
                <img src={paytm} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black',marginRight:'-30px' , fontWeight:'550' ,fontSize:"20px",marginLeft:'25px' }}>
                   Paytm
                    <div class="volume-container2">
                    <div class="volume-bar2" id="volume-bar">
                        <div class="volume-fill2" id="volume-fill" style={{width:'100%'}}></div>
                    </div>
                    </div>
                     </p>
                     <p style={{ marginTop:'25px', fontWeight:'250' ,fontSize:"14px",marginLeft:'15px' }}>100.0 MB</p>
      
                
            </div> 

            <div className="datausage-icons" >
                <img src={music} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black',marginRight:'-30px' , fontWeight:'550' ,fontSize:"20px",marginLeft:'25px' }}>
                   Music
                    <div class="volume-container2">
                    <div class="volume-bar2" id="volume-bar">
                        <div class="volume-fill2" id="volume-fill" style={{width:'100%'}}></div>
                    </div>
                    </div>
                     </p>
                     <p style={{ marginTop:'25px', fontWeight:'250' ,fontSize:"14px",marginLeft:'15px' }}>100.0 MB</p>
      
                
            </div> 

            <div className="datausage-icons" >
                <img src={contact} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black',marginRight:'-30px' , fontWeight:'550' ,fontSize:"20px",marginLeft:'25px' }}>
                   Chrome
                    <div class="volume-container2">
                    <div class="volume-bar2" id="volume-bar">
                        <div class="volume-fill2" id="volume-fill" style={{width:'100%'}}></div>
                    </div>
                    </div>
                     </p>
                     <p style={{ marginTop:'25px', fontWeight:'250' ,fontSize:"14px",marginLeft:'15px' }}>80.0 MB</p>
      
                
            </div> 
      
    </>
  )
}
