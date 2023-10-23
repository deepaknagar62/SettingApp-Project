import React, { useEffect, useState } from "react";
import "../CSS/simCardsNetwork.css";
import Headingtxt from "../../Components/Headingtxt";
import BackArrow from "../../Components/BackArrow";
import sim1 from "../Images/sim1icon.png"
import sim2 from "../Images/sim2icon.png"
import bothicon from "../Images/both.png"
import ToggleBtn from "../../Components/ToggleBtn";
import Line from "../../Components/Line";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function SimCards() {
 const navigate = useNavigate();

 const OpenSimSettings=()=>{
  navigate('/simcard-settings')
 }
 const OpenSimSettings2=()=>{
  navigate('/simcard-settings2')
 }


 const OpenDataroaming=()=>{
  navigate('/data-roaming');
 }

 const goback=()=>{
  navigate('/');
 }





 const [selectedCard, setSelectedCard] = useState(null);


  useEffect(() => {
    axios.get('/api/default-sim-for-calls')
      .then(response => {
        setSelectedCard(response.data.selectedCard,);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const onOptionClick = (optionName) => {
    setSelectedCard(optionName);

    
    axios.put('/api/default-sim-for-calls', { selectedCard: optionName })
      .then(response => {
        console.log('Selected option updated:', response.data.selectedCard);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const optionImages = [
    { name: 'sim1', iconSrc: sim1 },
    { name: 'sim2', iconSrc: sim2 },
    { name: 'both', iconSrc: bothicon },
  ];





  const [selectedCard2, setSelectedCard2] = useState(null);

  useEffect(() => {
    axios.get('/api/default-sim-for-data')
      .then(response => {
        setSelectedCard2(response.data.selectedCard,);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const onOptionClick2 = (optionName) => {
    setSelectedCard2(optionName);

    
    axios.put('/api/default-sim-for-data', { selectedCard: optionName })
      .then(response => {
        console.log('Selected option updated:', response.data.selectedCard);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const optionImages2 = [
    { name: 'sim1', iconSrc: sim1 },
    { name: 'sim2', iconSrc: sim2 },
    
  ];




  const [sim1_name, setText] = useState('');

    
    useEffect(() => {
      axios.get('/api/sim1-name')
        .then(response => {
          setText(response.data.enteredText);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

   
    const [sim1_number, setNumber] = useState('');

    
    useEffect(() => {
      axios.get('/api/sim1-number')
        .then(response => {
          setNumber(response.data.enteredText);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

  




    const [sim2_name, setSim2Name] = useState('');

    
    useEffect(() => {
      axios.get('/api/sim2-name')
        .then(response => {
          setSim2Name(response.data.enteredText);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

   
    const [sim2_number, setSim2Number] = useState('');

    
    useEffect(() => {
      axios.get('/api/sim2-number')
        .then(response => {
          setSim2Number(response.data.enteredText);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);







  return (
    <>
      <BackArrow onClick={goback}></BackArrow>
      <Headingtxt headingtxt="SIM & mobile networks"></Headingtxt>
      <div style={{ display: "flex" }}>
        <div className="sim-cards" onClick={OpenSimSettings}>
          <img src={sim1} alt="icon" width="35" height="35"></img>
          <p style={{ color: "#534d4d", fontSize: "18px",marginTop:'2px',fontWeight: "500" }}>
            {sim1_name}
            <p style={{ marginTop: "-4px", color: "black", fontWeight: "300", fontSize: "12px" }}>
              {sim1_number} <span style={{fontSize:'15px'}}>&#62;</span>
            </p>
          </p>
        </div>

        <div className="sim-cards" onClick={OpenSimSettings2}>

        <img src={sim2} alt="icon" width="35" height="35"></img>
          <p style={{ color: "#534d4d", fontSize: "18px",marginTop:'2px',fontWeight: "500" }}>
            {sim2_name}
            <p style={{ marginTop: "-4px", color: "black", fontWeight: "300", fontSize: "12px" }}>
              {sim2_number} <span style={{fontSize:'15px'}}>&#62;</span>
            </p>
          </p>
        </div>
      </div>

        <div style={{marginLeft:'25px', marginTop:'35px', fontWeight:'600' , fontSize:'18px'}}><span>Default for calls</span></div>

        <div className="options-container">
        {optionImages.map(option => (
          <div
            key={option.name}
            className={`options ${selectedCard === option.name ? 'selected' : ''}`}
            onClick={() => onOptionClick(option.name)}
          >
            <img src={option.iconSrc} alt="icon" width="35" height="35" />
          </div>
          ))}
       </div>

          

          <div style={{marginLeft:'25px', marginTop:'35px', fontSize:'18px',fontWeight:'600'}}><span>Data card</span></div>
          
          
          <div className="options-container">
        {optionImages2.map(option => (
          <div style={{marginLeft:'50px',width:'80px'}}
            key={option.name}
            className={`options ${selectedCard2 === option.name ? 'selected' : ''}`}
            onClick={() => onOptionClick2(option.name)}
          >
            <img src={option.iconSrc} alt="icon" width="35" height="35"  />
          </div>
          ))}
       </div>
          
          

          <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'40px',fontWeight:'300' , marginLeft:'20px'}}><span >SETTINGS</span></div>
         
          <div className="net-settings " style={{marginTop:'10px'}}>
            <span style={{fontSize:"20px",fontWeight:'600'}}>Mobile data</span> 
            <p style={{display:'flex', justifyItems:'center' ,fontSize:'15px',marginRight:'-30px' }}>
                 Allow this device to use mobile data
                 <div style={{display:'flex', marginLeft:'-45px',marginTop:'-10px'}}> <ToggleBtn name="simnet_mobileData"></ToggleBtn></div>
            </p>
           </div>

           <div className="net-settings " style={{marginTop:'30px'}}>
            <span style={{fontSize:"20px" ,fontWeight:'600'}}>Dual 4G</span> 
            <p style={{display:'flex', justifyItems:'center' ,fontSize:'15px',marginRight:'-20px' }}>
                 Allow 4G connectivity for both SIM
                 <div style={{display:'flex', marginLeft:'-35px',marginTop:'-10px'}}> <ToggleBtn name="simnet_dual4G" ></ToggleBtn></div>
            </p>
           </div>

           <div className="net-settings " style={{marginTop:'30px'}}>
            <span style={{fontSize:"19px" ,fontWeight:'600'}}>Use mobile data during VoLTE calls on the secondary SIM</span> 
            <p style={{display:'flex', justifyItems:'center' ,fontSize:'15px',marginRight:'0px' }}>
                 During VoLTE calls, device will connect to a mobile data network using the
                 secondary SIM
                 <div style={{display:'flex', marginLeft:'-10px',marginRight:'10px',marginTop:'-5px'}}> <ToggleBtn name="simnet_useMobileCalls"></ToggleBtn></div>
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
                 <div style={{display:'flex', marginLeft:'-45px',marginTop:'-10px'}}> <ToggleBtn name="simnet_receiveMMS"></ToggleBtn></div>
            </p>
           </div>
           <br></br>
           <br></br>
           <Line></Line>

           <div className="net-settings " style={{marginTop:'30px',marginBottom:'30px'}}>
            <span style={{fontSize:"19px" ,fontWeight:'600'}}>Remember SIM prefrences</span> 
            <p style={{display:'flex', justifyItems:'center' ,fontSize:'15px',marginRight:'10px' }}>
                 use a SIM card that was used during the previous call with this contact
                 <div style={{display:'flex', marginLeft:'-95px',marginTop:'-10px'}}> <ToggleBtn name="simnet_rememberSim"></ToggleBtn></div>
            </p>
           </div>
    </>
  );
}
