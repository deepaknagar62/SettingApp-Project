import React from 'react'
import Headingtxt from '../../Components/Headingtxt'
import ToggleBtn from '../../Components/ToggleBtn'
import '../CSS/googlebackup.css'
import BackArrow from '../../Components/BackArrow'
import { useNavigate } from 'react-router-dom'
export default function GoogleBackupMyData() {

  const navigate = useNavigate();

    const goback=()=>{
      navigate('/backup-restore')
    }


  return (
    <>  
       <div className='googlebackup-container'>  
       <BackArrow onClick={goback}></BackArrow>
       <Headingtxt headingtxt="Back up my data"></Headingtxt>
       <div style={{display:'flex' , marginTop:'20px' , alignItems:'center'}}>
         <h2 style={{marginLeft:'20px' ,marginTop:'20px' , fontWeight:'400'}}>Turn on backups</h2>
         <ToggleBtn name='bkmd_turnOnBackups'></ToggleBtn>
       </div>

       <div style={{marginLeft:'20px' ,marginRight:'20px' , fontWeight:'300'}}>
           <p>Automatically back up device data (such as Wi-Fi passwords and call history)
            app data (such as settings and files stored by apps) remotely.
           </p>

           <p>
            When you turn on automatic backup, device and app data is periodically saved remotely.
            App data can be any data that an app has saved (based on developer settings), including
            potentially senstive data such as contacts,messages and photos.
           </p>

       </div>

       </div>
    </>
  )
}
