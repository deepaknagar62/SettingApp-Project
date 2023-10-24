import React from "react";
import BackArrow from "../../Components/BackArrow";
import Headingtxt from "../../Components/Headingtxt";
import ToggleBtn from "../../Components/ToggleBtn";
import { useNavigate } from "react-router-dom";
import "../CSS/dataRoaming.css"
export default function DataRoaming() {
  const navigate = useNavigate();
  const goback=()=>{
    navigate('/simcards-network')
}

  return (
    <> 
         <div className="data-roaming-container">
      <BackArrow onClick={goback}></BackArrow>
      <Headingtxt headingtxt="Data roaming"></Headingtxt>
      <div
        style={{
          color: "#534d4d",
          fontSize: "15px",
          marginTop: "40px",
          fontWeight: "300",
          marginLeft: "20px",
        }}
      >
        <span>SETTINGS</span>
      </div>

      <div style={{marginTop:'20px', display:'flex'}} >
             <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'600'}}> International roaming </span>
             <div style={{marginTop:'20px',display:'flex' , marginLeft:'-10px'}}> <ToggleBtn name="dr_internationalRoaming"></ToggleBtn></div>
         </div>

         </div>
    </>
  );
}
