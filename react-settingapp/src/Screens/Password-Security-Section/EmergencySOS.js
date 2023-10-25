import React from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import sos from '../Images/sos.png'
import ToggleBtn from '../../Components/ToggleBtn'
import '../CSS/emergencySOS.css'
import Line from '../../Components/Line'
import { useNavigate } from 'react-router-dom'

export default function EmergencySOS() {
    const navigate = useNavigate();
    const goback=()=>{
        navigate('/password-security')
    }

  return (
    <>

       <div className='emergency-sos-conainer'>
       <BackArrow onClick={goback}></BackArrow>
       <Headingtxt headingtxt="Emergency SOS"></Headingtxt>

       <div style={{marginLeft:'40px', marginRight:'30px',marginTop:'20px'}}> 
       <img src={sos} alt="castimg" width="300" ></img> </div>


           <div className="sos-container "  >
                <span style={{marginRight:'50px'}}>Emergency SOS</span> 
                <p style={{display:'flex', justifyItems:'center' ,fontSize:'14px',marginRight:'30px' }}>
                    Rapidly press the Power button 5 times to send SOS text message with your
                    location to your emergency contacts
                    <div style={{display:'flex', marginLeft:'-33px' , fontSize:'25px',marginTop:'-15px',fontWeight:'200'}}> <ToggleBtn name="Emergency_SOS"></ToggleBtn></div>
                </p>
            </div>  


            <br></br>
            <Line></Line>
            </div>
    </>
  )
}
