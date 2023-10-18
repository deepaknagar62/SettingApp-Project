import React from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import home from '../Images/home-icon.png';
import '../CSS/defaultLauncher.css'
export default function DefaultLauncher() {
  return (
    <>

       <BackArrow></BackArrow>
       <Headingtxt headingtxt="Default Home Screen"></Headingtxt>
       <div className="launcher ">
       <img src={home} alt="home"></img>
         <p style={{ marginTop:'13px' , color:'black',marginLeft:'20px' , fontWeight:'550' ,fontSize:"20px" }}>  
           System launcher</p>
          
       </div>
    </>
  )
}
