import React from 'react'
import BackArrow from '../../Components/BackArrow';
import Headingtxt from '../../Components/Headingtxt';
import ToggleBtn from '../../Components/ToggleBtn';
import '../CSS/lockScreen.css';
import Line from '../../Components/Line';
import { useNavigate } from 'react-router-dom';


export default function LockScreen(){
  
     const navigate = useNavigate();
     const openGlance=()=>{
      navigate('/glance-for-mi')
     }


    return(

        <>
          <BackArrow></BackArrow>
          <Headingtxt headingtxt="Lock screen"></Headingtxt>
           
          <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'20px',fontWeight:'300' , marginLeft:'20px'}}>
                    <span >LOCK SCREEN SETTINGS</span></div>

            <div style={{marginTop:'10px', display:'flex'}} >
                <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550'}}>
                    Sleep </span>
                <div style={{marginTop:'20px',display:'flex' , marginLeft:'260px',fontSize:'25px',fontWeight:'200'}}> &#62;</div>
              </div>

             <div style={{marginTop:'10px', display:'flex'}} >
                <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550'}}>
                    Raise to wake </span>
                <div style={{marginTop:'20px',display:'flex' , marginLeft:'55px',fontSize:'25px',fontWeight:'200'}}> <ToggleBtn></ToggleBtn></div>
              </div>


              <div className="lock-container "  >
                <span style={{marginRight:'50px'}}>Double tap to wake screen</span> 
                <p style={{display:'flex', justifyItems:'center' ,fontSize:'14px',marginRight:'30px' }}>
                   You can double tap to turn the screen off when either Default or Classic
                   theme is applied
                    <div style={{display:'flex', marginLeft:'-50px' , fontSize:'25px',marginTop:'-15px',fontWeight:'200'}}> <ToggleBtn></ToggleBtn></div>
                </p>
             </div>

             <div style={{marginTop:'10px', display:'flex'}} >
                <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550',marginRight:'0px'}}>
                    Wake Lock screen for notifications </span>
                <div style={{marginTop:'20px',display:'flex' , marginLeft:'0px',marginRight:'35px',fontSize:'25px',fontWeight:'200'}}> <ToggleBtn></ToggleBtn></div>
              </div>

              <br></br>
              <Line></Line>
              
               
                <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'20px',fontWeight:'300' , marginLeft:'20px'}}>
                    <span >LOCK SCREEN</span></div>

             
                    <div className="glance-display-container " onClick={openGlance} >
                        <span >Glance for Mi</span> 
                        <p style={{display:'flex', justifyItems:'center' ,fontSize:'15px',marginRight:'50px' }}>
                            Stunning images and exciting stories delivered to you daily
                            <div style={{display:'flex', marginLeft:'0px' , fontSize:'25px',marginTop:'-10px',fontWeight:'200'}}> &#62;</div>
                        </p>
                    </div>

                    <br></br>
                   <Line></Line>

                   <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'20px',fontWeight:'300' , marginLeft:'20px'}}>
                    <span >OTHERS</span></div>


                    <div className="lock-container "  >
                        <span style={{marginRight:'50px'}}>Launch Camera</span> 
                        <p style={{display:'flex', justifyItems:'center' ,fontSize:'14px',marginRight:'30px' }}>
                         Double press to "Volume down" button to open Camera when the 
                         screen is locked
                            <div style={{display:'flex', marginLeft:'-50px' , fontSize:'25px',marginTop:'-15px',fontWeight:'200'}}> <ToggleBtn></ToggleBtn></div>
                        </p>
                    </div> 

                    <div className="lock-container "  >
                        <span style={{marginRight:'50px'}}>Pocket mode</span> 
                        <p style={{display:'flex', justifyItems:'center' ,fontSize:'14px',marginRight:'30px' }}>
                         Lock touch gestures when placed in a pocket
                            <div style={{display:'flex', marginLeft:'-50px' , fontSize:'25px',marginTop:'-15px',fontWeight:'200'}}> <ToggleBtn></ToggleBtn></div>
                        </p>
                    </div> 

        </>
    );

}