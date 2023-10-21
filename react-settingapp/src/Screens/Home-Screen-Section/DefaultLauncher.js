import React from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import home from '../Images/home-icon.png';
import '../CSS/defaultLauncher.css'
import { useNavigate } from 'react-router-dom';
export default function DefaultLauncher() {
  const navigate = useNavigate();
  const goback=()=>{
    navigate('/home-screen')
  }
  return (
    <>

       <BackArrow onClick={goback}></BackArrow>
       <Headingtxt headingtxt="Default Home Screen"></Headingtxt>
       <div className="launcher ">
       <img src={home} alt="home"></img>
         <p style={{ marginTop:'13px' , color:'black',marginLeft:'20px' , fontWeight:'550' ,fontSize:"20px" }}>  
           System launcher</p>
          
       </div>
    </>
  )
}
