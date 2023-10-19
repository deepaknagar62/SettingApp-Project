import React from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import Line from '../../Components/Line'
import ToggleBtn from '../../Components/ToggleBtn'
import '../CSS/faceUnlock.css'
import { useNavigate } from 'react-router-dom'

export default function FaceUnlock() {
    const navigate = useNavigate();
    const goback=()=>{
        navigate('/password-security');
    }
  return (
    <>
      <BackArrow onClick={goback}></BackArrow>
      <Headingtxt headingtxt="Face unlock"></Headingtxt>

      <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'25px',fontWeight:'300' , marginLeft:'25px'}}>
            <span >FACE DATA</span></div> 

            <div   style={{marginTop:'15px', display:'flex'}} >
             <span style={{marginLeft:'25px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550'}}>
                 Face 1 </span>
             <div style={{marginTop:'15px',display:'flex' , marginLeft:'255px',fontSize:'28px', fontWeight:'300'}}> &#62;</div>
            </div>   

            <div   style={{marginTop:'15px', display:'flex'}} >
             <span style={{marginLeft:'25px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550'}}>
                 Face 2 </span>
             <div style={{marginTop:'15px',display:'flex' , marginLeft:'255px',fontSize:'28px', fontWeight:'300'}}> &#62;</div>
            </div>  

             <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'25px',fontWeight:'300' , marginLeft:'25px'}}>
            <span >Add face data</span></div>  

            <br></br>
            <Line></Line>  
 
            <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'25px',fontWeight:'300' , marginLeft:'25px'}}>
            <span >UNCLOCK USING FACE DATA</span></div>


                <div className="face-container "  >
                        <span style={{marginRight:'50px'}}>Unlock using face data</span> 
                        <p style={{display:'flex', justifyItems:'center' ,fontSize:'14px',marginRight:'30px' }}>
                         Unlock device using your face data
                            <div style={{display:'flex', marginLeft:'-33px' , fontSize:'25px',marginTop:'-15px',fontWeight:'200'}}> <ToggleBtn></ToggleBtn></div>
                        </p>
                 </div>  


           <br></br>
           <Line></Line>  

           <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'25px',fontWeight:'300' , marginLeft:'25px'}}>
            <span >LOCK SCREEN OPTIONS</span></div>

                <div className="face-container "  >
                        <span style={{marginRight:'50px'}}>Stay screen after unlocking</span> 
                        <p style={{display:'flex', justifyItems:'center' ,fontSize:'14px',marginRight:'30px' }}>
                         Stay on the lock screen after your face is verified.Swipe up to opne the
                         Home screen
                            <div style={{display:'flex', marginLeft:'-40px' , fontSize:'25px',marginTop:'-15px',fontWeight:'200'}}> <ToggleBtn></ToggleBtn></div>
                        </p>
                 </div>  


                 <div className="face-container "  >
                        <span style={{marginRight:'50px'}}>Show after face verifying</span> 
                        <p style={{display:'flex', justifyItems:'center' ,fontSize:'14px',marginRight:'30px' }}>
                         Show only notification source when device is locked and add notification details 
                         after face data is verified
                            <div style={{display:'flex', marginLeft:'-40px' , fontSize:'25px',marginTop:'-15px',fontWeight:'200'}}> <ToggleBtn></ToggleBtn></div>
                        </p>
                 </div>  
      
    </>
  )
}
