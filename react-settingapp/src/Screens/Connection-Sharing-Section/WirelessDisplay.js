import React from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import ToggleBtn from '../../Components/ToggleBtn'
import { useNavigate } from 'react-router-dom';

export default function WirelessDisplay() {

  const navigate = useNavigate();
  const goback=()=>{
    navigate('/connection-sharing')
  }
  return (
    <>
       
       <BackArrow onClick={goback}></BackArrow>
       <Headingtxt headingtxt="Wireless display"></Headingtxt>
             <div style={{marginTop:'10px', display:'flex'}} >
                <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550'}}>
                    Wireless display </span>
                <div style={{marginTop:'20px',display:'flex' , marginLeft:'20px',fontSize:'25px',fontWeight:'200'}}> <ToggleBtn name="C&S_wirelessDisplay"></ToggleBtn></div>
              </div>
    </>
  )
}
