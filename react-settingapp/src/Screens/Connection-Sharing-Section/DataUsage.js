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
import { useNavigate } from 'react-router-dom'
export default function DataUsage() {

  const navigate = useNavigate();
  const goback=()=>{
    navigate('/connection-sharing')
  }
  return (
    <>
       <div className='data-usage-container'>
       <BackArrow  onClick={goback}></BackArrow>
       <Headingtxt headingtxt="Data usage"></Headingtxt>

            <div className="datausage-icons" >
                <img src={printer} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black',marginRight:'-30px' , fontWeight:'550' ,fontSize:"20px",marginLeft:'25px' }}>
                    Mobile hotspots 
                    <p style={{ marginTop:'0px', fontWeight:'250' ,fontSize:"14px" }}>900.0 MB</p>
                     </p>
                     
      
                
            </div> 

            <div className="datausage-icons" >
                <img src={appicon} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black', fontWeight:'550' ,fontSize:"20px",marginLeft:'25px' }}>
                    System apps 
                    <p style={{ marginTop:'0px', fontWeight:'250' ,fontSize:"14px" }}>600.0 MB</p>
                     </p>
                     
      
                
            </div> 

            <div className="datausage-icons" >
                <img src={youtube} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black',marginRight:'-30px' , fontWeight:'550' ,fontSize:"20px",marginLeft:'25px' }}>
                    YouTube 
                    <p style={{ marginTop:'0px', fontWeight:'250' ,fontSize:"14px"}}>400.0 MB</p>
                     </p>
                    
      
                
            </div> 


            <div className="datausage-icons" >
                <img src={callicon} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black',marginRight:'-30px' , fontWeight:'550' ,fontSize:"20px",marginLeft:'25px' }}>
                    Truecaller 
                    <p style={{ marginTop:'0px', fontWeight:'250' ,fontSize:"14px" }}>200.0 MB</p>
                     </p>
                    
      
                
            </div> 


            <div className="datausage-icons" >
                <img src={linkedin} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black',marginRight:'-30px' , fontWeight:'550' ,fontSize:"20px",marginLeft:'25px' }}>
                    LinkedIn
                    <p style={{ marginTop:'0px', fontWeight:'250' ,fontSize:"14px" }}>190.4 MB</p>
                     </p>
                     
      
                
            </div> 

            <div className="datausage-icons" >
                <img src={message} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black',marginRight:'-30px' , fontWeight:'550' ,fontSize:"20px",marginLeft:'25px' }}>
                   Messages
                   <p style={{ marginTop:'0px', fontWeight:'250' ,fontSize:"14px" }}>160.0 MB</p>
                     </p>
                     
      
                
            </div> 


            <div className="datausage-icons" >
                <img src={paytm} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black',marginRight:'-30px' , fontWeight:'550' ,fontSize:"20px",marginLeft:'25px' }}>
                   Paytm
                   <p style={{ marginTop:'0px', fontWeight:'250' ,fontSize:"14px" }}>100.0 MB</p>
                     </p>
                     
      
                
            </div> 

            <div className="datausage-icons" >
                <img src={music} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black',marginRight:'-30px' , fontWeight:'550' ,fontSize:"20px",marginLeft:'25px' }}>
                   Music
                   <p style={{ marginTop:'0px', fontWeight:'250' ,fontSize:"14px" }}>100.0 MB</p>
                     </p>
                    
      
                
            </div> 

            <div className="datausage-icons" >
                <img src={contact} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black',marginRight:'-30px' , fontWeight:'550' ,fontSize:"20px",marginLeft:'25px' }}>
                   Chrome
                <p style={{ marginTop:'0px', fontWeight:'250' ,fontSize:"14px" }}>80.0 MB</p>
                     </p>
                 
            </div> 
            </div>
    </>
  )
}
