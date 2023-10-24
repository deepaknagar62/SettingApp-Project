import React from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import Line from '../../Components/Line'
import reseticon from '../Images/resetimg.png';
import '../CSS/resetWifiNetwork.css'
import { useNavigate } from 'react-router-dom';
export default function ResetWiFiNetwork() {

  const navigate = useNavigate();
  const goback=()=>{
    navigate('/connection-sharing')
  }
  return (
    <>
       <div className='reset-wifi-bluetooth-container'>
       <BackArrow onClick={goback}></BackArrow>
       <Headingtxt headingtxt="Reset Wi-Fi, mobile networks, and Bluetooth"></Headingtxt>
        
       <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'40px',fontWeight:'300' , marginLeft:'20px'}}>
        <span >THIS WILL RESET ALL NEWTWORK SETTINGS, INCLUDING :</span></div>

        <p style={{marginLeft:'20px', marginTop:'40px', fontSize:'22px', fontWeight:'500'}}>Wi-Fi</p>
        <p style={{marginLeft:'20px', marginTop:'40px', fontSize:'22px', fontWeight:'500'}}>Mobile data</p>
        <p style={{marginLeft:'20px', marginTop:'40px', fontSize:'22px', fontWeight:'500'}}>Bluetooth</p>


        <br></br>
        <Line></Line>
        

        <footer class="reset-footer">
        <img src={reseticon} alt="reset"/>
        <p>Reset settings</p>
        
        </footer>
        </div>
       
    </>
  )
}
