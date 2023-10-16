

import React from 'react'
import BackArrow from '../../Components/BackArrow';
import Headingtxt from '../../Components/Headingtxt';
import '../CSS/connectionSharing.css'
import Line from '../../Components/Line';
import ToggleBtn from '../../Components/ToggleBtn';
import { useNavigate } from 'react-router-dom';



export default function ConnectionAndSharing(){
     
    const navigate = useNavigate();
    const opencasting=()=>{
        navigate('/casting')
    }


    return(

        <>
              <BackArrow></BackArrow>
              <Headingtxt headingtxt="Connection & sharing"></Headingtxt>
             
              <div style={{marginTop:'10px', display:'flex'}}  onClick={opencasting} >
                <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'500'}}>
                    Cast </span>
                <div style={{marginTop:'20px',display:'flex' , marginLeft:'265px',fontSize:'25px',fontWeight:'200'}}> &#62;</div>
              </div>   

              <div style={{marginTop:'10px', display:'flex'}} >
                <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'500'}}>
                    Printing </span>
                <div style={{marginTop:'20px',display:'flex' , marginLeft:'230px',fontSize:'25px',fontWeight:'200'}}> &#62;</div>
              </div>

              <br></br>
              <Line></Line>

              <div style={{marginTop:'10px', display:'flex'}} >
                <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'500'}}>
                    Aeroplane mode </span>
                <div style={{marginTop:'20px',display:'flex' , marginLeft:'20px',fontSize:'25px',fontWeight:'200'}}> <ToggleBtn></ToggleBtn></div>
              </div>


              <div style={{marginTop:'10px', display:'flex'}} >
                <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'500'}}>
                    Private DNS </span>
                <div style={{marginTop:'20px',display:'flex' , marginLeft:'60px',fontSize:'25px',fontWeight:'200'}}> <ToggleBtn></ToggleBtn></div>
              </div>

              <br></br>
              <Line></Line>

              <div style={{marginTop:'10px', display:'flex'}} >
                <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'500'}}>
                    Data usage </span>
                <div style={{marginTop:'20px',display:'flex' , marginLeft:'195px',fontSize:'25px',fontWeight:'200'}}> &#62;</div>
              </div>   

              <br></br>
              <Line></Line>

              <div className="wireess-display-container "  >
                <span >Wireless display</span> 
                <p style={{display:'flex', justifyItems:'center' ,fontSize:'14px',marginRight:'0px' }}>
                    Connect to a display using Wi-Fi
                    <div style={{display:'flex', marginLeft:'100px' , fontSize:'25px',marginTop:'-15px',fontWeight:'200'}}> &#62;</div>
                </p>
             </div>

           <br></br>
           <Line></Line>
        
            
           <div style={{marginTop:'10px', display:'flex'}} >
                <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px', marginRight:'65px',fontWeight:'500'}}>
                    Reset Wi-Fi,mobile networks, and Bluetooth </span>
                <div style={{marginTop:'30px',display:'flex',marginRight:'60px' , marginLeft:'-45px',fontSize:'25px',fontWeight:'200'}}> &#62;</div>
              </div>  

        </>
    );

}