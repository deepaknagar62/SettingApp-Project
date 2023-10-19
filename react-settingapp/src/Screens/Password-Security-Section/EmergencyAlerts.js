import React from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import ToggleBtn from '../../Components/ToggleBtn'
import '../CSS/emergencyAlerts.css'
import Line from '../../Components/Line'
import Lighttext from '../../Components/Lighttext'
import { useNavigate } from 'react-router-dom'
export default function EmergencyAlerts() {
  
    const navigate = useNavigate();
    const goback=()=>{
        navigate('/password-security')
    }

  return (
    <>
         <BackArrow onClick={goback}></BackArrow>
         <Headingtxt headingtxt="Emergency alerts"></Headingtxt>

         <div className="ea-container "  >
                <span style={{marginRight:'50px'}}>Allow alerts</span> 
                <p style={{display:'flex', justifyItems:'center' ,fontSize:'14px',marginRight:'30px' }}>
                    Receive emergency notifications
                    <div style={{display:'flex', marginLeft:'-33px' , fontSize:'25px',marginTop:'-15px',fontWeight:'200'}}> <ToggleBtn></ToggleBtn></div>
                </p>
            </div>  

           <br></br>
           <Line></Line>

           <Lighttext text=" EMERGENCY ALERT SETTINGS"></Lighttext> 

           <div className="ea-container "  >
                <span style={{marginRight:'50px'}}>Extreme threats</span> 
                <p style={{display:'flex', justifyItems:'center' ,fontSize:'14px',marginRight:'30px' }}>
                    Extreme threats to life and property
                    <div style={{display:'flex', marginLeft:'-53px' , fontSize:'25px',marginTop:'-15px',fontWeight:'200'}}> <ToggleBtn></ToggleBtn></div>
                </p>
            </div>  

            <div className="ea-container "  >
                <span style={{marginRight:'50px'}}>Severs threats</span> 
                <p style={{display:'flex', justifyItems:'center' ,fontSize:'14px',marginRight:'30px' }}>
                    Severs threats to life and property
                    <div style={{display:'flex', marginLeft:'-40px' , fontSize:'25px',marginTop:'-15px',fontWeight:'200'}}> <ToggleBtn></ToggleBtn></div>
                </p>
            </div> 

            <div className="ea-container "  >
                <span style={{marginRight:'50px'}}>AMBER alerts</span> 
                <p style={{display:'flex', justifyItems:'center' ,fontSize:'14px',marginRight:'30px' }}>
                    Child abduction emergency bulletins
                    <div style={{display:'flex', marginLeft:'-55px' , fontSize:'25px',marginTop:'-15px',fontWeight:'200'}}> <ToggleBtn></ToggleBtn></div>
                </p>
            </div>  


            <div className="ea-container "  >
                <span style={{marginRight:'50px'}}>Require monthly test</span> 
                <p style={{display:'flex', justifyItems:'center' ,fontSize:'14px',marginRight:'40px' }}>
                    Receive test Messages for the saftey alerts system
                    <div style={{display:'flex', marginLeft:'-70px' , fontSize:'25px',marginTop:'-15px',fontWeight:'200'}}> <ToggleBtn></ToggleBtn></div>
                </p>
            </div>

            <br></br>
           <Line></Line>

           <Lighttext text="ALERT PREFERENCES"></Lighttext>  

           <div className="ea-container "  >
                <span style={{marginRight:'50px'}}>Vibration</span> 
                <p style={{display:'flex', justifyItems:'center' ,fontSize:'14px',marginRight:'30px' }}>
                    Vibrate on alerts
                    <div style={{display:'flex', marginLeft:'70px' , fontSize:'25px',marginTop:'-15px',fontWeight:'200'}}> <ToggleBtn></ToggleBtn></div>
                </p>
            </div>
    </>
  )
}
