import React from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import '../CSS/silentDND.css'
import { useNavigate } from 'react-router-dom';
export default function SystemFont() {
  const navigate = useNavigate();
  const goback=()=>{
    navigate('/display')
  }
  return (
    <>
         <BackArrow onClick={goback}></BackArrow>
         <Headingtxt headingtxt="System font"></Headingtxt>  

         <div className="choose-silent-option" style={{marginTop:'50px'}}>
         <div style={{marginLeft:'30px'}}>
            <span style={{fontSize:'20px', fontWeight:'400' , fontStyle:'normal'}}>Normal</span>
            <p style={{fontSize:'15px', fontWeight:'250', marginTop:'0px',fontStyle:'normal'}}> This is example text</p>
         </div>
       </div>  

       <div className="choose-silent-option" style={{marginTop:'20px'}}>
         <div style={{marginLeft:'30px'}}>
            <span style={{fontSize:'20px', fontWeight:'400' , fontStyle:'italic'}}>Italic</span>
            <p style={{fontSize:'15px', fontWeight:'250', marginTop:'0px' , fontStyle:'italic'}}> This is example text</p>
         </div>
       </div>  

       <div className="choose-silent-option" style={{marginTop:'20px'}}>
         <div style={{marginLeft:'30px'}}>
            <span style={{fontSize:'20px', fontWeight:'400' , fontFamily:"serif"}}>Serif</span>
            <p style={{fontSize:'15px', fontWeight:'250', marginTop:'0px' , fontFamily:"serif"}}> This is example text</p>
         </div>
       </div>  

       <div className="choose-silent-option" style={{marginTop:'20px'}}>
         <div style={{marginLeft:'30px'}}>
            <span style={{fontSize:'20px', fontWeight:'400' , fontFamily:'monospace'}}>Monospace</span>
            <p style={{fontSize:'15px', fontWeight:'250', marginTop:'0px' , fontFamily:'monospace'}}> This is example text</p>
         </div>
       </div> 

       <div className="choose-silent-option" style={{marginTop:'20px'}}>
         <div style={{marginLeft:'30px'}}>
            <span style={{fontSize:'20px', fontWeight:'400' , fontFamily:'fantasy'}}>Fantasy</span>
            <p style={{fontSize:'15px', fontWeight:'250', marginTop:'0px' , fontFamily:'fantasy'}}> This is example text</p>
         </div>
       </div> 

       <div className="choose-silent-option" style={{marginTop:'20px'}}>
         <div style={{marginLeft:'30px'}}>
            <span style={{fontSize:'20px', fontWeight:'400' , fontFamily:'revert-layer'}}>Revert-layer</span>
            <p style={{fontSize:'15px', fontWeight:'250', marginTop:'0px' , fontFamily:'revert-layer'}}> This is example text</p>
         </div>
       </div> 


       <div className="choose-silent-option" style={{marginTop:'20px'}}>
         <div style={{marginLeft:'30px'}}>
            <span style={{fontSize:'20px', fontWeight:'400' , fontFamily:'cursive'}}>Cursive</span>
            <p style={{fontSize:'15px', fontWeight:'250', marginTop:'0px' , fontFamily:'cursive'}}> This is example text</p>
         </div>
       </div> 
    </>
  )
}
