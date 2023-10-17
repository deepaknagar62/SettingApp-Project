import React from "react";
import "../CSS/simCardsNetwork.css";
import Headingtxt from "../../Components/Headingtxt";
import BackArrow from "../../Components/BackArrow";
import sim1 from "../Images/sim1icon.png"
import sim2 from "../Images/sim2icon.png"
import bothicon from "../Images/both.png"
import ToggleBtn from "../../Components/ToggleBtn";
import Line from "../../Components/Line";
import { useNavigate } from "react-router-dom";


export default function SimCards() {
 const navigate = useNavigate();

 const OpenSimSettings=()=>{
  navigate('/simcard-settings')
 }

 const OpenDataroaming=()=>{
  navigate('/data-roaming');
 }

  return (
    <>
      <BackArrow></BackArrow>
      <Headingtxt headingtxt="SIM & mobile networks"></Headingtxt>
      <div style={{ display: "flex" }}>
        <div className="sim-cards" onClick={OpenSimSettings}>
          <img src={sim1} alt="icon" width="35" height="35"></img>
          <p style={{ color: "#534d4d", fontSize: "18px",marginTop:'2px',fontWeight: "500" }}>
            Jio
            <p style={{ marginTop: "-4px", color: "black", fontWeight: "300", fontSize: "12px" }}>
              6261877594 <span style={{fontSize:'15px'}}>&#62;</span>
            </p>
          </p>
        </div>

        <div className="sim-cards" onClick={OpenSimSettings}>

        <img src={sim2} alt="icon" width="35" height="35"></img>
          <p style={{ color: "#534d4d", fontSize: "18px",marginTop:'2px',fontWeight: "500" }}>
            Airtel
            <p style={{ marginTop: "-4px", color: "black", fontWeight: "300", fontSize: "12px" }}>
              9977380998 <span style={{fontSize:'15px'}}>&#62;</span>
            </p>
          </p>
        </div>
      </div>

        <div style={{marginLeft:'25px', marginTop:'35px', fontWeight:'600' , fontSize:'18px'}}><span>Default for calls</span></div>
          <div className="options-container">
             <div className="options"> <img src={sim1} alt="icon" width="35" height="35"></img> </div>
             <div className="options"> <img src={sim2} alt="icon" width="35" height="35"></img> </div>
             <div className="options"> <img src={bothicon} alt="icon" width="35" height="35"></img> </div>
          </div>

          <div style={{marginLeft:'25px', marginTop:'35px', fontSize:'18px',fontWeight:'600'}}><span>Data card</span></div>
          <div className="options-container">
             <div className="options" style={{marginLeft:'10px',width:'40%'}}> <img src={sim1} alt="icon" width="35" height="35"></img> </div>
             <div className="options" style={{marginLeft:'30px',width:'40%'}}> <img src={sim2} alt="icon" width="35" height="35"></img> </div>

          </div>

          <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'40px',fontWeight:'300' , marginLeft:'20px'}}><span >SETTINGS</span></div>
         
          <div className="net-settings " style={{marginTop:'10px'}}>
            <span style={{fontSize:"20px",fontWeight:'600'}}>Mobile data</span> 
            <p style={{display:'flex', justifyItems:'center' ,fontSize:'15px',marginRight:'-30px' }}>
                 Allow this device to use mobile data
                 <div style={{display:'flex', marginLeft:'-45px',marginTop:'-10px'}}> <ToggleBtn ></ToggleBtn></div>
            </p>
           </div>

           <div className="net-settings " style={{marginTop:'30px'}}>
            <span style={{fontSize:"20px" ,fontWeight:'600'}}>Dual 4G</span> 
            <p style={{display:'flex', justifyItems:'center' ,fontSize:'15px',marginRight:'-20px' }}>
                 Allow 4G connectivity for both SIM
                 <div style={{display:'flex', marginLeft:'-35px',marginTop:'-10px'}}> <ToggleBtn ></ToggleBtn></div>
            </p>
           </div>

           <div className="net-settings " style={{marginTop:'30px'}}>
            <span style={{fontSize:"19px" ,fontWeight:'600'}}>Use mobile data during VoLTE calls on the secondary SIM</span> 
            <p style={{display:'flex', justifyItems:'center' ,fontSize:'15px',marginRight:'0px' }}>
                 During VoLTE calls, device will connect to a mobile data network using the
                 secondary SIM
                 <div style={{display:'flex', marginLeft:'-10px',marginRight:'10px',marginTop:'-5px'}}> <ToggleBtn ></ToggleBtn></div>
            </p>
           </div>

           <div className="net-settings " style={{marginTop:'90px'}} onClick={OpenDataroaming}>
            <span style={{fontSize:"20px" ,fontWeight:'600'}}>Data roaming</span> 
            <p style={{display:'flex', justifyItems:'center' ,fontSize:'15px',marginRight:'-30px' }}>
                 Connect to data services when roaming
                 <div style={{display:'flex', marginLeft:'60px' , fontSize:'27px',marginTop:'-15px'}}> &#62;</div>
            </p>
           </div>

           <div className="net-settings " style={{marginTop:'30px'}}>
            <span style={{fontSize:"20px" ,fontWeight:'600'}}>Always receive MMS</span> 
            <p style={{display:'flex', justifyItems:'center' ,fontSize:'15px',marginRight:'10px' }}>
                 Receive MMS even when mobile data is off
                 <div style={{display:'flex', marginLeft:'-45px',marginTop:'-10px'}}> <ToggleBtn ></ToggleBtn></div>
            </p>
           </div>
           <br></br>
           <br></br>
           <Line></Line>

           <div className="net-settings " style={{marginTop:'30px'}}>
            <span style={{fontSize:"19px" ,fontWeight:'600'}}>Remember SIM prefrences</span> 
            <p style={{display:'flex', justifyItems:'center' ,fontSize:'15px',marginRight:'10px' }}>
                 use a SIM card that was used during the previous call with this contact
                 <div style={{display:'flex', marginLeft:'-95px',marginTop:'-10px'}}> <ToggleBtn ></ToggleBtn></div>
            </p>
           </div>
    </>
  );
}
