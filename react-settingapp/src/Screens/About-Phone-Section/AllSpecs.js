import React from 'react'
import '../CSS/allSpecs.css'
import phoneicon from '../Images/phone.png'
import ramicon from '../Images/ramicon.png'
import cpuicon from '../Images/cpuicon.png'
import BackArrow from '../../Components/BackArrow'
import {useNavigate} from 'react-router-dom'
import Headingtxt from '../../Components/Headingtxt'

export default function AllSpecs(){
    const navigate = useNavigate();

    const Goback=()=>{
      navigate('/about-phone');
    }
    return(

      <>
        
       <div className='allspecs-container'>  
        <BackArrow onClick={Goback}></BackArrow> 
        <Headingtxt headingtxt="All specs"></Headingtxt>
         
        <div className="card1">
            <div style={{display:'flex'}}> 
           <div className='inCard1'>
            <img src={phoneicon} alt="icon" width="35" height="35"></img>
            <p style={{color:'#534d4d' , fontSize:'15px'}}>  Device model <p style={{marginTop:'0px' , color:'black' , fontWeight:'550',fontSize:'18px'}}>Redmi 8A</p></p>
           </div>
           
           <div className='inCard2'>
            <img src={ramicon} alt="icon" width="35" height="35"></img>
            <p style={{color:'#534d4d' , fontSize:'15px'}}>RAM <p style={{marginTop:'0px' , color:'black' , fontWeight:'500',fontSize:'18px'}}>4.00 GB</p></p>
           </div>
           </div>
           <div>
            <div style={{display:'flex' , marginLeft:'-5px', marginTop:'20px'}}>
           <div className='inCard3'>
            <img src={cpuicon} alt="icon" width="45" height="45" style={{marginLeft:'10px'}}></img>
            <p style={{color:'#534d4d' , fontSize:'15px', marginLeft:'20px' }}>CPU <p style={{marginTop:'0px' , color:'black' , fontWeight:'550',fontSize:'18px' }}>Octa-core 2.01 GHz</p></p>
           </div>
           </div>
           </div>
        </div>


        <div className="card2">
         <p style={{ marginTop:'10px' , color:'black' , fontWeight:'550' ,fontSize:'20px' }}>  Android version <p style={{color:'#534d4d' , fontSize:'15px',marginTop:'2px',fontWeight:'300'}}>10 QKQ1.191014.001</p></p>
       </div>

       
       <div className='cards'>
                <div className="card4">
                   <p style={{ marginTop:'10px' , color:'black' , fontWeight:'550' ,fontSize:'20px' } }>Android security </p>
                   <p style={{ marginTop:'80px' ,  fontWeight:'300' } }>2023-09-01</p>
                </div>
            
                <div className="card5">
                <p style={{ marginTop:'10px' , color:'black' , fontWeight:'550' ,fontSize:'20px'  }}>MIUI version </p>
                <p style={{ marginTop:'80px' ,  fontWeight:'300' } }>MIUI Global 12.5.2 stable</p>
                </div>
           
             
           </div>


           <div className="card6">
           <div className="container" >
                <span style={{ marginTop:'10px' , color:'black' , fontWeight:'550' ,fontSize:'20px'  }}>Model</span> 
                <p>M1908C3KI</p>
            </div>

            <div className="container" >
                <span style={{ marginTop:'10px' , color:'black' , fontWeight:'550' ,fontSize:'20px'  }}>Baseband version</span> 
                <p>9_GENNS_PACK-2.41274947.5</p>
            </div>

            <div className="container" >
                <span style={{ marginTop:'10px' , color:'black' , fontWeight:'550' ,fontSize:'20px'  }}>Kernal version</span> 
                <p>4.9.193-perf-g743cb02</p>
            </div>
           </div>
          
           <div className="card2">
         <p style={{ marginTop:'10px' , color:'black' , fontWeight:'550' ,fontSize:'20px'  }}>  Internal Storage<p style={{color:'#534d4d' , fontSize:'15px',marginTop:'2px',fontWeight:'300'}}>Available 4.5 GB / 32 GB</p></p>
       </div>

       </div>
      </>
    );
}