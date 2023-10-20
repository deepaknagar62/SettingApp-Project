import React from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import ToggleBtn from '../../Components/ToggleBtn'
import { useNavigate } from 'react-router-dom'

export default function MobileNeotworks() {

    const navigate = useNavigate();
    const goback=()=>{
        navigate('/simcard-settings');
    }

  return (
    <>
      <BackArrow onClick={goback}></BackArrow>
      <Headingtxt headingtxt="Mobile networks"></Headingtxt>
        

      <div className='sim-net-container' >
             <span style={{marginLeft:'20px',marginTop:'20px',marginRight:'-30px' ,fontSize:'20px',fontWeight:'600'}}>
                 Automatically select network </span>
             <div style={{marginTop:'20px',display:'flex' , marginRight:'30px'}}> <ToggleBtn ></ToggleBtn></div>
         </div>
    </>
  )
}
