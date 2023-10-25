import React, { useState } from 'react'
import BackArrow from '../../Components/BackArrow';
import Headingtxt from '../../Components/Headingtxt';
import ToggleBtn from '../../Components/ToggleBtn';
import '../CSS/lockScreen.css';
import Line from '../../Components/Line';
import { useNavigate } from 'react-router-dom';
import SleepPopup from './SleepPopup';


export default function LockScreen(){
  
     const navigate = useNavigate();
     const openGlance=()=>{
      navigate('/glance-for-mi')
     }
     const goback=()=>{
        navigate('/')
      }


      const [isPopupVisible, setPopupVisible] = useState(false);

        const handleSleep = (duration) => {
            // Add your code to trigger sleep for the specified duration.
            console.log(`Sleeping for ${duration} minutes...`);
        };

        const openPopup = () => {
            setPopupVisible(true);
        };

        const closePopup = () => {
            setPopupVisible(false);
        };


    return(

        <> 
          <div className='lock-screen-conainer'>
          <BackArrow onClick={goback}></BackArrow>
          <Headingtxt headingtxt="Lock screen"></Headingtxt>
           
          <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'20px',fontWeight:'300' , marginLeft:'20px'}}>
                    <span >LOCK SCREEN SETTINGS</span></div>

            <div style={{marginTop:'10px', display:'flex'}} onClick={openPopup} >
                <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550'}}>
                    Sleep </span>
                <div style={{marginTop:'20px',display:'flex' , marginLeft:'260px',fontSize:'25px',fontWeight:'200'}}> &#62;</div>

              </div>


              {isPopupVisible && (
                    <SleepPopup onClose={closePopup} onSleep={handleSleep} />
                )}

             <div style={{marginTop:'10px', display:'flex'}} >
                <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550'}}>
                    Raise to wake </span>
                <div style={{marginTop:'20px',display:'flex' , marginLeft:'55px',fontSize:'25px',fontWeight:'200'}}> <ToggleBtn name="lockscreen_raiseToWake"></ToggleBtn></div>
              </div>


              <div className="lock-container "  >
                <span style={{marginRight:'50px'}}>Double tap to wake screen</span> 
                <p style={{display:'flex', justifyItems:'center' ,fontSize:'14px',marginRight:'130px' }}>
                   You can double tap to turn the screen off when either Default or Classic
                   theme is applied
                    <div style={{display:'flex',position:'absolute', marginLeft:'180px' , fontSize:'25px',marginTop:'-15px',fontWeight:'200'}}> <ToggleBtn name="lockscreen_doubleToWake"></ToggleBtn></div>
                </p>
             </div>

             <div style={{marginTop:'10px', display:'flex'}} >
                <p style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550',marginRight:'190px'}}>
                Wake Lock screen for notifications </p>
                <div style={{marginTop:'45px',display:'flex' , position:'absolute', marginLeft:'200px',fontSize:'25px',fontWeight:'200'}}> <ToggleBtn name="lockscreen_wakeTolockScreen"></ToggleBtn></div>
              </div>

              <br></br>
              <Line></Line>
              
               
                <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'20px',fontWeight:'300' , marginLeft:'20px'}}>
                    <span >LOCK SCREEN</span></div>

             
                    <div className="glance-display-container " onClick={openGlance} >
                        <span >Glance for Mi</span> 
                        <p style={{display:'flex', justifyItems:'center' ,fontSize:'15px',marginRight:'150px' }}>
                            Stunning images and exciting stories delivered to you daily
                            <div style={{  position:'absolute', marginLeft:'300px' , fontSize:'25px',marginTop:'-10px',fontWeight:'200'}}> &#62;</div>
                        </p>
                    </div>

                    <br></br>
                   <Line></Line>

                   <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'20px',fontWeight:'300' , marginLeft:'20px'}}>
                    <span >OTHERS</span></div>


                    <div className="lock-container "  >
                        <span style={{marginRight:'50px'}}>Launch Camera</span> 
                        <p style={{display:'flex', justifyItems:'center' ,fontSize:'14px',marginRight:'130px' }}>
                         Double press to "Volume down" button to open Camera when the 
                         screen is locked
                            <div style={{position:'absolute', marginLeft:'180px' , fontSize:'25px',marginTop:'-15px',fontWeight:'200'}}> <ToggleBtn name="lockscreen_launchCamera"></ToggleBtn></div>
                        </p>
                    </div> 

                    <div className="lock-container "  >
                        <span style={{marginRight:'50px'}}>Pocket mode</span> 
                        <p style={{display:'flex', justifyItems:'center' ,fontSize:'14px',marginRight:'120px' }}>
                         Lock touch gestures when placed in a pocket
                            <div style={{position:'absolute', marginLeft:'180px', fontSize:'25px',marginTop:'-15px',fontWeight:'200'}}> <ToggleBtn name="lockscreen_pocketMode"></ToggleBtn></div>
                        </p>
                    </div> 

                    </div>

        </>
    );

}