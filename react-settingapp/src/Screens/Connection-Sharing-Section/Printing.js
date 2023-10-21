import React from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import printer from '../Images/print.png'
import '../CSS/printing.css'
import Line from '../../Components/Line'
import { useNavigate } from 'react-router-dom'
export default function Printing() {
 
    const navigate = useNavigate();
    const openprintService=()=>{
        navigate('/print-services');
    }
    const goback=()=>{
      navigate('/connection-sharing')
    }

  return (
    <>
        <BackArrow onClick={goback}></BackArrow>
        <Headingtxt headingtxt="Printing"></Headingtxt>
        <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'25px',fontWeight:'300' , marginLeft:'25px'}}>
            <span >PRINTING SERVICES</span></div>  

            <div className="print-icons" onClick={openprintService}>
                <img src={printer} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black',marginRight:'-30px' , fontWeight:'550' ,fontSize:"20px",marginLeft:'25px' }}>
                    System printing service </p>
                <div style={{ marginLeft:'100px',fontSize:'25px',fontWeight:'250'}}> &#62;</div>
            </div> 

            <div   style={{marginBottom:'5px', marginTop:'20px',display:'flex'}} >
               <div style={{marginLeft:'30px',marginTop:'8px' ,fontSize:'40px',fontWeight:'100'}}>&#43;</div> 
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550'}}> Add service</span>
             <div style={{marginTop:'15px',display:'flex' , marginLeft:'135px',fontSize:'28px',fontWeight:'250'}}> &#62;</div>
            </div>

            <br></br> 
            <Line></Line>
    </>
  )
}
