import React from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import ToggleBtn from '../../Components/ToggleBtn'
import '../CSS/glance.css'
export default function GlanceMi() {
  return (
    <>

       <BackArrow></BackArrow>
       <Headingtxt headingtxt="Glance for Mi"></Headingtxt>
        
        <div className="glance1-container "  >
            <span style={{marginRight:'50px'}}>Turn on</span> 
            <p style={{display:'flex', justifyItems:'center' ,fontSize:'14px',marginRight:'30px' }}>
                An exciting way to unlock your phone
                <div style={{display:'flex', marginLeft:'-50px' , fontSize:'25px',marginTop:'-15px',fontWeight:'200'}}> <ToggleBtn></ToggleBtn></div>
            </p>
        </div> 
    </>
  )
}
