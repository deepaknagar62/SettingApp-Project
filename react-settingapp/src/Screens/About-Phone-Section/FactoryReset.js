import React from 'react'
import Headingtxt from '../../Components/Headingtxt'
import '../CSS/factoryReset.css';
import Line from '../../Components/Line';
import reseticon from '../Images/resetimg.png';

export default function FactoryReset() {
  return (
    <>
       <Headingtxt headingtxt="Factory reset"></Headingtxt>
       <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'20px',fontWeight:'300' , marginLeft:'20px'}}>
        <span >ERASE THE FOLLOWING ITEMS</span></div>

        <p className='reset-text'> Accounts </p>

         <p className='reset-text'> Contacts </p>
         <p className='reset-text'> Photos and videos </p>
         <p className='reset-text'> Apps </p>
         <p className='reset-text'> Backups </p>
         <p className='reset-text'> Other items on this device </p>

         <br></br>
         <Line></Line>

         <div style={{color:'#534d4d' , fontSize:'14px',marginTop:'20px',fontWeight:'300' , marginLeft:'20px' , marginRight:'20px'}}>
          <p>All the items listed above will be erased permanently.
            Back up all important items to your computer or Xiaomi Cloud before you continue.
          </p>
        </div>

        <div style={{color:'#534d4d' , fontSize:'14px',marginTop:'20px',fontWeight:'300' , marginLeft:'20px' , marginRight:'20px'}}>
          <p>Note: Before restoring items,check whether the folder 'MIUI-Backup-AllBackup' 
            exits on your mobile device. if it doesn't,create it.
          </p>
        </div>

        <footer class="footer">
        <img src={reseticon} alt="reset"/>
        <p>Erase all data</p>
        
      </footer>

    </>
  )
}
