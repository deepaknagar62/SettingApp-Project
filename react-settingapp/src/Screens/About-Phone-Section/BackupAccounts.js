import React from 'react'
import Headingtxt from '../../Components/Headingtxt'
import '../CSS/backupAccounts.css';
import BackArrow from '../../Components/BackArrow';

export default function BackupAccounts() {
  return (
    <> 
      <div className='backupAccounts-container'>  
      <BackArrow></BackArrow>
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
