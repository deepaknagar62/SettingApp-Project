import React from 'react'
import ToggleBtn from './ToggleBtn'

export default function TextWithToggle(props) {
  return (
    <>
         <div style={{marginTop:'10px', display:'flex'}} >
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'500', marginRight:'-30px'}}>
                 {props.text} </span>
             <div style={{marginTop:'20px',display:'flex' , marginLeft:'5px'}}> <ToggleBtn ></ToggleBtn></div>
           </div>       
    </>
  )
}
