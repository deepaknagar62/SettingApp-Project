import React from 'react'
import Headingtxt from '../../Components/Headingtxt'
import '../CSS/xiaomiCloud.css';
import Line from '../../Components/Line';
import messageicon from '../Images/cloudicon.png';
import garlleryicon from '../Images/galleryicon.png';
import finddevice from '../Images/finddevice.png';
import msgicon from '../Images/messageicon.png';
import contacticon from '../Images/contacticon.png';
import callicon from '../Images/callicon.png';
import ToggleBtn from '../../Components/ToggleBtn';

export default function XiaomiCloud() {
  return (
    <>
     <div className='xiaomi-cloud-container'> 
      <Headingtxt headingtxt="Xiaomi Cloud"></Headingtxt>
       
        <div className="xiaomi-card" >
            <p style={{fontWeight:'400', fontSize:'22px'}}> 0.3 GB | 5 GB</p>
            <div className='indicator'> 
             <div style={{width:'50px' , backgroundColor:'red', height:'20px' , borderRadius:'10px'}}></div>
            </div>
        </div>
        <br></br><br></br>
        <Line></Line>

        <div className="xiaomi-icons">
        <img src={messageicon} alt='message'></img>
            <p style={{ marginTop:'5px', color:'black' , fontWeight:'500' ,fontSize:"18px",marginLeft:'25px' }}>
                Backup </p>
            <div style={{display:'flex', marginLeft:'50px'}}> <ToggleBtn ></ToggleBtn></div>
         </div>

          
            <div className="xiaomi-icons">
       
                <img src={finddevice} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black' , fontWeight:'500' ,fontSize:"18px",marginLeft:'25px' , marginRight:'-25px'}}>
                    Find Device </p>
                <div style={{display:'flex', marginLeft:'40px' , marginRight:'-35px'}}> <ToggleBtn ></ToggleBtn></div>
            </div>
            <br></br><br></br>
            <Line></Line>

            <div style={{marginLeft:'20px'}}><h3>Sync app data</h3></div>

            <div className="xiaomi-icons">
                <img src={garlleryicon} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black' , fontWeight:'500' ,fontSize:"18px",marginLeft:'25px' }}>
                    Gallery </p>
                <div style={{display:'flex', marginLeft:'50px'}}> <ToggleBtn ></ToggleBtn></div>
            </div>

            <div className="xiaomi-icons">
                <img src={msgicon} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black' , fontWeight:'500' ,fontSize:"18px",marginLeft:'25px' }}>
                    Messages </p>
                <div style={{display:'flex', marginLeft:'30px'}}> <ToggleBtn ></ToggleBtn></div>
            </div>


            <div className="xiaomi-icons">
                <img src={contacticon } alt='message'></img>
                <p style={{ marginTop:'5px', color:'black' , fontWeight:'500' ,fontSize:"18px",marginLeft:'25px' }}>
                    Contacts </p>
                <div style={{display:'flex', marginLeft:'38px'}}> <ToggleBtn ></ToggleBtn></div>
            </div>

            <div className="xiaomi-icons">
       
                <img src={callicon} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black' , fontWeight:'500' ,fontSize:"18px",marginLeft:'25px' , marginRight:'-25px'}}>
                    Call history </p>
                <div style={{display:'flex', marginLeft:'43px' , marginRight:'-35px'}}> <ToggleBtn ></ToggleBtn></div>
            </div>

         </div> 
    </>
  )
}
