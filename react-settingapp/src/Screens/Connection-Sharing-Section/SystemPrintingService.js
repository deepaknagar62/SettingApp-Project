import React from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import ToggleBtn from '../../Components/ToggleBtn'
import printservice from '../Images/printservice.png';

export default function SystemPrintingService() {
  return (
    <>
      
      <BackArrow></BackArrow>
      <Headingtxt headingtxt="System printing service"></Headingtxt>  

           <div style={{marginTop:'10px', display:'flex'}} >
                <span style={{marginLeft:'30px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550'}}>
                    On </span>
                <div style={{marginTop:'20px',display:'flex' , marginLeft:'120px',fontSize:'25px',fontWeight:'200'}}> <ToggleBtn></ToggleBtn></div>
              </div>  

              <div style={{marginLeft:'40px', marginRight:'30px',marginTop:'20px'}}> <img src={printservice} alt="castimg" width="300" ></img> </div>  
    </>
  )
}
