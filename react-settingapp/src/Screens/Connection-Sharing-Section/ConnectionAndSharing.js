

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
        navigate('/casting');
    }
    const openPrinting=()=>{
      navigate('/printing');
  }
 
  const openDataUsage=()=>{
    navigate('/data-usage');
  }
  const openWirelessdisplay=()=>{
    navigate('/wireless-display');
  }
  const openreset=()=>{
    navigate('/reset-wifi-networks');
  }
  
  const goback=()=>{
    navigate('/')
  }

    return(

        <>
               <div className='connection-sharing-container'>
              <BackArrow onClick={goback}></BackArrow>
              <Headingtxt headingtxt="Connection & sharing"></Headingtxt>
             
              <div style={{marginTop:'10px', display:'flex'}}  onClick={opencasting} >
                <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550'}}>
                    Cast </span>
                <div style={{marginTop:'20px',display:'flex' , marginLeft:'265px',fontSize:'25px',fontWeight:'200'}}> &#62;</div>
              </div>   

              <div style={{marginTop:'10px', display:'flex'}} onClick={openPrinting} >
                <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550'}}>
                    Printing </span>
                <div style={{marginTop:'20px',display:'flex' , marginLeft:'230px',fontSize:'25px',fontWeight:'200'}}> &#62;</div>
              </div>

              <br></br>
              <Line></Line>

              <div style={{marginTop:'10px', display:'flex'}} >
                <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550'}}>
                    Aeroplane mode </span>
                <div style={{marginTop:'20px',display:'flex' , marginLeft:'20px',fontSize:'25px',fontWeight:'200'}}> <ToggleBtn name="C&S_aeroplanMode"></ToggleBtn></div>
              </div>


              <div style={{marginTop:'10px', display:'flex'}} >
                <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550'}}>
                    Private DNS </span>
                <div style={{marginTop:'20px',display:'flex' , marginLeft:'60px',fontSize:'25px',fontWeight:'200'}}> <ToggleBtn name="C&S_privateDNS"></ToggleBtn></div>
              </div>

              <br></br>
              <Line></Line>

              <div style={{marginTop:'10px', display:'flex'}} onClick={openDataUsage}>
                <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550'}}>
                    Data usage </span>
                <div style={{marginTop:'20px',display:'flex' , marginLeft:'195px',fontSize:'25px',fontWeight:'200'}}> &#62;</div>
              </div>   

              <br></br>
              <Line></Line>

              <div className="wireess-display-container " onClick={openWirelessdisplay} >
                <span >Wireless display</span> 
                <p style={{display:'flex', justifyItems:'center' ,fontSize:'15px',marginRight:'0px' }}>
                    Connect to a display using Wi-Fi
                    <div style={{display:'flex', marginLeft:'90px' , fontSize:'25px',marginTop:'-15px',fontWeight:'200'}}> &#62;</div>
                </p>
             </div>

           <br></br>
           <Line></Line>
        
            
           <div style={{marginTop:'10px', display:'flex'}} onClick={openreset}>
                <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px', marginRight:'65px',fontWeight:'550'}}>
                    Reset Wi-Fi,mobile networks, and Bluetooth </span>
                <div style={{marginTop:'30px',display:'flex',marginRight:'60px' , marginLeft:'-45px',fontSize:'25px',fontWeight:'200'}}> &#62;</div>
              </div>  

              </div>

        </>
    );

}