import React from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import ToggleBtn from '../../Components/ToggleBtn'
import '../CSS/glance.css'
import { useNavigate } from 'react-router-dom'
export default function GlanceMi() {

  const navigate = useNavigate();

  const goback=()=>{
    navigate('/lock-screen')
  }

  return (
    <>

       <BackArrow onClick={goback}></BackArrow>
       <Headingtxt headingtxt="Glance for Mi"></Headingtxt>
        
        <div className="glance1-container "  >
            <span style={{marginRight:'50px'}}>Turn on</span> 
            <p style={{display:'flex', justifyItems:'center' ,fontSize:'14px',marginRight:'30px' }}>
                An exciting way to unlock your phone
                <div style={{display:'flex', marginLeft:'-50px' , fontSize:'25px',marginTop:'-15px',fontWeight:'200'}}> <ToggleBtn name="glanceMi_turnON"></ToggleBtn></div>
            </p>
        </div> 
    </>
  )
}
