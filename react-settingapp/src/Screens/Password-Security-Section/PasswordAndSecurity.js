import React from 'react'
import BackArrow from '../../Components/BackArrow';
import Headingtxt from '../../Components/Headingtxt';
import lock from '../Images/lock1.png'
import face from '../Images/face1.png'
import bluetooth from '../Images/bluet.png'
import '../CSS/passwordSecurity.css'
import Line from '../../Components/Line';
import { useNavigate } from 'react-router-dom';
import Lighttext from '../../Components/Lighttext';


export default function PasswordAndSecurity(){
   
    const navigate = useNavigate();
    const openchangelock=()=>{
        navigate('/change-screen-lock');
    }
    const openfacelock=()=>{
        navigate('/face-lock');
    }

    const openbluetoothunlock=()=>{
        navigate('/bluetooth-unlock');
    }
    const privacyprotection=()=>{
        navigate('/privacy-protection-password');
    }
    const emergencyalert=()=>{
        navigate('/emergency-alerts');
    }

    const sos=()=>{
        navigate('/emergency-sos');
    }

    const openlockscreen=()=>{
        navigate('/lock-screen');
    }
    
    const openHomepage=()=>{
        navigate('/');
    }


    return(

        <>
           
           <BackArrow onClick={openHomepage}></BackArrow>
           <Headingtxt headingtxt="Password & security"></Headingtxt>


           <div style={{display:'flex'}}>
                
                <div className="pass-card" onClick={openchangelock}>
                 <img  src={lock} alt='version' width='25' height='25'></img>
                    <div style={{marginTop:'5px',fontSize:'18px',fontWeight:'400'}}>Screen lock</div>
                    
                </div>

              <div style={{display : 'inline'}} onClick={openfacelock}> 
              <div className="pass-card">
                 <img  src={face} alt='version' width='25' height='25'></img>
                    <div style={{marginTop:'5px',fontSize:'18px',fontWeight:'550'}}>Face unlock</div>
                    
                </div>
             
            </div> 
           </div>

           <div className="pass-card" style={{overflow: 'hidden', position: 'relative'}} onClick={openbluetoothunlock}>
                 <img  src={bluetooth} alt='version' width='25' height='25'></img>
                    <div class="moving-text"> Unlock with bluetooth device</div>
                    
                </div>

             <br></br>
             <Line></Line>  

          <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'25px',fontWeight:'300' , marginLeft:'25px'}}>
            <span >OTHER PASSWORDS</span></div>   


             <div   style={{marginTop:'15px', display:'flex'}} onClick={privacyprotection} >
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550'}}>
                 Privacy protection password </span>
             <div style={{marginTop:'15px',display:'flex' , marginLeft:'55px',fontSize:'28px', fontWeight:'300'}}> &#62;</div>
            </div>   


            <br></br>
            <Line></Line>  

            <div   style={{marginTop:'15px', display:'flex'}}  onClick={emergencyalert}>
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550'}}>
                 Emergency alerts </span>
             <div style={{marginTop:'15px',display:'flex' , marginLeft:'155px',fontSize:'28px', fontWeight:'300'}}> &#62;</div>
            </div>  

            <div   style={{marginTop:'15px', display:'flex'}} onClick={sos}  >
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550'}}>
                 Emergency SOS </span>
             <div style={{marginTop:'15px',display:'flex' , marginLeft:'170px',fontSize:'28px', fontWeight:'300'}}> &#62;</div>
            </div> 


            <br></br>
            <Line></Line> 

            <Lighttext text="NEED OTHER SETTINGS"></Lighttext>
            <p style={{marginLeft:'25px',fontWeight:'500' ,marginTop:'10px',fontSize:'18px'}} onClick={openlockscreen}>Lock Screen</p>

        </>
    );

}