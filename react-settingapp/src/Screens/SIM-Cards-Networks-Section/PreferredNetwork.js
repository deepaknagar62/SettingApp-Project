import React from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import '../CSS/preferrednetwork.css'
import { useNavigate } from 'react-router-dom';

export default function PreferredNetwork() {

    const navigate = useNavigate();
    const goback=()=>{
        navigate('/simcard-settings');
    }


  return (
    <>
       <BackArrow onClick={goback}></BackArrow>
       <Headingtxt headingtxt="Preferred network type"></Headingtxt>


       <div className="pref-option" style={{marginTop:'20px'}}>
         <div style={{marginLeft:'30px'}}>
            <span style={{fontSize:'20px', fontWeight:'550'}}>Prefer LTE</span>
         </div>
       </div> 

       <div className="pref-option" style={{marginTop:'20px'}}>
         <div style={{marginLeft:'30px'}}>
            <span style={{fontSize:'20px', fontWeight:'550'}}>Prefer 3G</span>
         </div>
       </div> 

       <div className="pref-option" style={{marginTop:'20px'}}>
         <div style={{marginLeft:'30px'}}>
            <span style={{fontSize:'20px', fontWeight:'550'}}>2G only</span>
         </div>
       </div> 
      
    </>
  )
}
