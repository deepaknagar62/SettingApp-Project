import React, { useEffect, useState } from 'react'
import '../CSS/backupRestore.css';
import Line from '../../Components/Line';
import ToggleBtn from '../../Components/ToggleBtn';
import Headingtxt from '../../Components/Headingtxt';
import { useNavigate } from 'react-router-dom';
import BackArrow from '../../Components/BackArrow';
import axios from 'axios';

export default function BackupAndRestore(){
  const apiName = 'choose-backup-accounts';
  const navigate = useNavigate();
  const OpenMoblieDevice=()=>{
    navigate('/local-mobile-backup');
  }
  const OpenXiomiCloud=()=>{
    navigate('/xioami-cloud');
  }
   
  const OpenGoogleBackupData=()=>{
    navigate('/turn-on-backups')
  }
  const OpenBackupAccounts=()=>{
    navigate('/backup-accounts');
  }
  const Goback=()=>{
    navigate('/about-phone');
  }


  const [selectedAccount, setSelectedAccount] = useState("nagardeepak9098@gmail.com");

    useEffect(() => {
      axios.get(`/api/${apiName}`)
        .then(response => {
          setSelectedAccount(response.data.selectedCard);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);


    return(

        <>
         <div className='backup-restore-container'> 
         <BackArrow onClick={Goback}></BackArrow> 
          <Headingtxt headingtxt="Back up and restore"></Headingtxt>
          
          <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'20px',fontWeight:'300' , marginLeft:'20px'}}><span >LOCAL</span></div>
         <div className="mobile-device" onClick={OpenMoblieDevice}>
         <p style={{ marginTop:'10px' , color:'black' , fontWeight:'550' ,fontSize:"20px" }}>  Mobile device 
         <p style={{color:'#534d4d' , fontSize:'15px',marginTop:'2px',fontWeight:'300'}}>Back up and restore items on this device</p></p>
       </div>
       <br></br>
       <Line/>
        
       <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'20px',fontWeight:'300' , marginLeft:'20px'}}><span >CLOUD</span></div> 
        
       <div className="cloud" onClick={OpenXiomiCloud} >
            <div className="mobile-device" style={{marginLeft:'5px',marginTop:'0px', marginRight:'10px'}}>
                        <span style={{fontWeight:'550' ,fontSize:"20px"}}>Xiaomi Cloud</span> 
                        <p style={{display:'flex', marginRight:'0px'}}> Sync the apps,back up system settings and Home screen layout 
                        <p style={{marginLeft:'1px' , fontSize:'25px' }}>&#62;</p></p>
            </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Line></Line>

      <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'20px',fontWeight:'300' , marginLeft:'20px'}}><span >GOOGLE BACKUP & RESET</span></div> 
       
      <div className="cloud" onClick={OpenGoogleBackupData}>
            
        <span style={{fontWeight:'550' ,fontSize:"20px"}}>Back up my data</span> 
        <p style={{display:'flex', justifyItems:'center' ,fontSize:'17px'}}> on
        <p style={{marginLeft:'280px' , fontSize:'25px', marginTop:'-15px' }}>&#62;</p></p>

      </div>

      <div className="cloud" style={{marginTop:'30px'}} onClick={OpenBackupAccounts}>
            
        <span style={{fontWeight:'550' ,fontSize:"20px"}}>Backup account</span> 
        <p style={{display:'flex', justifyItems:'center' ,fontSize:'14px'}}> {selectedAccount}
        <p style={{marginLeft:'295px',position:'fixed' , fontSize:'25px', marginTop:'-15px' }}>&#62;</p></p>

      </div>

      <div className="cloud" style={{marginTop:'30px'}}>
            
        <span style={{fontWeight:'550' ,fontSize:"20px"}}>Automatic restore</span> 
        <p style={{display:'flex', justifyItems:'center' ,fontSize:'14px' }}>
             When reinstalling an app, restore backed-up settings and data
             <div style={{display:'flex', marginRight:'35px'}}> <ToggleBtn name="automatic_restore"></ToggleBtn></div>
        </p>
       
      </div>
      </div>
        </>
    );
}