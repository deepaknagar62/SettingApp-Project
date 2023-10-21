import React from 'react'
import Headingtxt from '../../Components/Headingtxt'
import '../CSS/backupAccounts.css';
import BackArrow from '../../Components/BackArrow';
import { useNavigate } from 'react-router-dom';

export default function BackupAccounts() {

  const navigate = useNavigate();

    const goback=()=>{
      navigate('/backup-restore')
    }
  return (
    <> 
      <div className='backupAccounts-container'>  
      <BackArrow onClick={goback}></BackArrow>
       <Headingtxt headingtxt="Choose backup account"></Headingtxt> 
  
       <div className="choose-account" style={{marginTop:'50px'}}>
       <p> nagardeepak9098@gmail.com</p>
       </div>
       
       <div className="choose-account">
       <p> dhakaddeepak6261@gmail.com</p>
       </div>

       <div className="choose-account">
       <p> raj883430@gmail.com</p>
       </div>

       </div>
    </>
  )
}
