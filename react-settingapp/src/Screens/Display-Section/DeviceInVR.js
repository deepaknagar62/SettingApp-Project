import React from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'

export default function DeviceInVR() {
  return (
    <>

       <BackArrow></BackArrow>
       <Headingtxt headingtxt="When device is in VR"></Headingtxt>

       <div style={{backgroundColor:'#ffffff', borderRadius:'10px', 
       boxShadow:'0 0 10px rgba(0, 0, 0, 0.2)',padding:'10px',width:'320px',height:'45px',
       marginLeft:'20px',marginTop:'20px',marginRight:'20px', display:'flex' ,justifyContent:'center'}}>
          <span style={{marginTop:'10px', fontSize:'20px' ,textAlign:'center' ,fontWeight:500}}>Reduce blur</span>
       </div>

       <div style={{backgroundColor:'#ffffff', borderRadius:'10px', 
       boxShadow:'0 0 10px rgba(0, 0, 0, 0.2)',padding:'10px',width:'320px',height:'45px',
       marginLeft:'20px',marginTop:'20px',marginRight:'20px', display:'flex' ,justifyContent:'center'}}>
          <span style={{marginTop:'10px', fontSize:'20px' ,textAlign:'center' ,fontWeight:500}}>Reduce flicker</span>
       </div>
      
    </>
  )
}
