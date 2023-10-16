import React from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import '../CSS/casting.css'
import ToggleBtn from '../../Components/ToggleBtn'
import Line from '../../Components/Line'
import Lighttext from '../../Components/Lighttext'
import cast1 from '../Images/casticon.png'
import cast2 from '../Images/casticon2.png'
import cast3 from '../Images/casticon3.png'
export default function Casting() {
  return (
    <> 
       <BackArrow ></BackArrow>
       <Headingtxt headingtxt="Cast"></Headingtxt>

            <div className="casting-container "  >
                <span >Cast</span> 
                <p style={{display:'flex', justifyItems:'center' ,fontSize:'14px',marginRight:'30px' }}>
                    Cast screen contents to an external monitor
                    <div style={{display:'flex', marginLeft:'-40px' , fontSize:'25px',marginTop:'-15px',fontWeight:'200'}}> <ToggleBtn></ToggleBtn></div>
                </p>
             </div>

             <br></br>
             <Line></Line>

             <Lighttext text="SPECIAL FEATURES"></Lighttext>

              <div style={{marginLeft:'40px', marginRight:'30px',marginTop:'20px'}}> <img src={cast1} alt="castimg" width="300" ></img> </div>
              <div style={{marginLeft:'20px',marginTop:'5px'}}> 
                <span style={{fontSize:'20px', fontWeight:'500'}}>Minimise window</span>
                <p style={{fontSize:'15px', fontWeight:'300',marginTop:'0px',marginRight:'10px'}}>
                  Minimize the window that's being cast to be able to use other features of your phone</p>
              </div>

              <div style={{marginLeft:'40px', marginRight:'30px',marginTop:'20px'}}> <img src={cast2} alt="castimg" width="300" ></img> </div>
              <div style={{marginLeft:'20px',marginTop:'5px'}}> 
                <span style={{fontSize:'20px', fontWeight:'500'}}>Cast with screen off</span>
                <p style={{fontSize:'15px', fontWeight:'300',marginTop:'0px',marginRight:'20px'}}>
                  You can keep casting when the screen of your device is turned off.
                  This feature decreases power consumption.</p>
              </div>


              <div style={{marginLeft:'40px', marginRight:'30px',marginTop:'20px'}}> <img src={cast3} alt="castimg" width="300" ></img> </div>
              <div style={{marginLeft:'20px',marginTop:'5px',marginBottom:'10px'}}> 
                <span style={{fontSize:'20px', fontWeight:'500'}}>Hide private items</span>
                <p style={{fontSize:'15px', fontWeight:'300',marginTop:'0px',marginRight:'10px'}}>
                  Don't display floating notifications, incoming calls, and other private items on external
                  monitors</p>
              </div>
    </>
  )
}
