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
import BackArrow from '../../Components/BackArrow';
import { useNavigate } from 'react-router-dom';

export default function XiaomiCloud() {
    const navigate = useNavigate();

    const goback=()=>{
      navigate('/backup-restore')
    }

  return (
    <>
     <div className='xiaomi-cloud-container'> 
     <BackArrow onClick={goback}></BackArrow>
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
            <p style={{ marginTop:'5px', color:'black' , fontWeight:'550' ,fontSize:"20px",marginLeft:'25px' }}>
                Backup </p>
            <div style={{display:'flex', marginLeft:'50px'}}> <ToggleBtn name="xc_backup"></ToggleBtn></div>
         </div>

          
            <div className="xiaomi-icons">
       
                <img src={finddevice} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black' , fontWeight:'550' ,fontSize:"20px",marginLeft:'25px' , marginRight:'-25px'}}>
                    Find Device </p>
                <div style={{display:'flex', marginLeft:'32px' , marginRight:'-35px'}}> <ToggleBtn name="xc_findDevice"></ToggleBtn></div>
            </div>
            <br></br><br></br>
            <Line></Line>

            <div style={{marginLeft:'20px'}}><h3>Sync app data</h3></div>

            <div className="xiaomi-icons">
                <img src={garlleryicon} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black' , fontWeight:'550' ,fontSize:"20px",marginLeft:'25px' }}>
                    Gallery </p>
                <div style={{display:'flex', marginLeft:'50px'}}> <ToggleBtn name="xc_gallery" ></ToggleBtn></div>
            </div>

            <div className="xiaomi-icons">
                <img src={msgicon} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black' , fontWeight:'550' ,fontSize:"20px",marginLeft:'25px' }}>
                    Messages </p>
                <div style={{display:'flex', marginLeft:'25px'}}> <ToggleBtn name="xc_messages" ></ToggleBtn></div>
            </div>


            <div className="xiaomi-icons">
                <img src={contacticon } alt='message'></img>
                <p style={{ marginTop:'5px', color:'black' , fontWeight:'550' ,fontSize:"20px",marginLeft:'25px' }}>
                    Contacts </p>
                <div style={{display:'flex', marginLeft:'34px'}}> <ToggleBtn name="xc_contacts"></ToggleBtn></div>
            </div>

            <div className="xiaomi-icons">
       
                <img src={callicon} alt='message'></img>
                <p style={{ marginTop:'5px', color:'black' , fontWeight:'550' ,fontSize:"20px",marginLeft:'25px' , marginRight:'-25px'}}>
                    Call history </p>
                <div style={{display:'flex', marginLeft:'36px' , marginRight:'-35px'}}> <ToggleBtn name="xc_callHistory"></ToggleBtn></div>
            </div>

         </div> 
    </>
  )
}
