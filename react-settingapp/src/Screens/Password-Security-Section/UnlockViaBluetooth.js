import React from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import ToggleBtn from '../../Components/ToggleBtn'
import Line from '../../Components/Line'
import { useNavigate } from 'react-router-dom'

export default function UnlockViaBluetooth() {
    const navigate = useNavigate();
    const goback=()=>{
        navigate('/password-security');
    }
  return (
    <>

        <BackArrow onClick={goback} ></BackArrow>
        <Headingtxt headingtxt="Unlock with Bluetooth device"></Headingtxt>

        <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'25px',fontWeight:'300' , marginLeft:'25px'}}>
            <span >APPLY TO</span></div>  

        <div style={{marginTop:'10px', display:'flex'}} >
            <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550'}}>
                Unlock device </span>
            <div style={{marginTop:'20px',display:'flex' , marginLeft:'50px',fontSize:'25px',fontWeight:'200'}}> <ToggleBtn></ToggleBtn></div>
            </div>  


          <br></br> 
          <Line></Line>  

          <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'25px',fontWeight:'300' , marginLeft:'25px'}}>
            <span >DEVICE</span></div> 


            <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'25px',fontWeight:'300' , marginLeft:'25px'}}>
            <span >No device detected</span></div>   
      
    </>
  )
}
