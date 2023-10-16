import React from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import '../CSS/silentDND.css'

export default function TextSize() {
  return (
    <>
       <BackArrow></BackArrow>
       <Headingtxt headingtxt="Text Size"></Headingtxt>

       <div className="choose-silent-option" style={{marginTop:'20px'}}>
         <div style={{marginLeft:'30px' ,display:'flex'}}>
            <span style={{fontSize:'15px', fontWeight:'500' , }}>XXS  :</span>
            <p style={{fontSize:'15px',  marginTop:'0px' , marginLeft:'20px'}}> This is example text</p>
         </div>
       </div> 

       <div className="choose-silent-option" style={{marginTop:'20px'}}>
         <div style={{marginLeft:'30px' ,display:'flex'}}>
            <span style={{fontSize:'18px', fontWeight:'500' , }}> XS  :</span>
            <p style={{fontSize:'18px',  marginTop:'0px' , marginLeft:'20px'}}> This is example text</p>
         </div>
       </div> 

       <div className="choose-silent-option" style={{marginTop:'20px'}}>
         <div style={{marginLeft:'30px' ,display:'flex'}}>
            <span style={{fontSize:'20px', fontWeight:'500' , }}> S  :</span>
            <p style={{fontSize:'20px',  marginTop:'0px' , marginLeft:'20px'}}> This is example text</p>
         </div>
       </div> 

       <div className="choose-silent-option" style={{marginTop:'20px'}}>
         <div style={{marginLeft:'30px' ,display:'flex'}}>
            <span style={{fontSize:'22px', fontWeight:'500' , }}> L :</span>
            <p style={{fontSize:'22px',  marginTop:'0px' , marginLeft:'20px'}}> This is example text</p>
         </div>
       </div> 

       <div className="choose-silent-option" style={{marginTop:'20px'}}>
         <div style={{marginLeft:'30px' ,display:'flex'}}>
            <span style={{fontSize:'24px', fontWeight:'500' , marginRight:'-20px'}}> XL :</span>
            <p style={{fontSize:'24px',  marginTop:'0px' , marginLeft:'30px'}}> This is example text</p>
         </div>
       </div> 
      
       <div className="choose-silent-option" style={{marginTop:'20px'}}>
         <div style={{marginLeft:'30px' ,display:'flex'}}>
            <span style={{fontSize:'26px', fontWeight:'500' , marginRight:'-40px'}}> XXL: </span>
            <p style={{fontSize:'26px',  marginTop:'0px' , marginLeft:'50px'}}> This is example text</p>
         </div>
       </div> 
    </>
  )
}
