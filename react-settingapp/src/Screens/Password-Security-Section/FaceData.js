import React from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import { useNavigate } from 'react-router-dom';
import '../CSS/faceUnlock.css'
import face from '../Images/facedata.png'

export default function FaceData() {

  const navigate = useNavigate();
  const goback=()=>{
      navigate('/face-lock');
  }
  return (
    <>
      <div className='face-unlock-conainer'>
      <BackArrow onClick={goback}></BackArrow>
      <Headingtxt headingtxt="Face data"></Headingtxt>
      
      <div style={{marginLeft:'40px', marginRight:'30px',marginTop:'80px'}}> <img src={face} alt="castimg" width="300" ></img> </div>
     
      <div class="button-container" style={{marginTop:'50px'}}>
          <button class="round-button" style={{color:'red'}}>Delete face data</button>
        </div>
      </div>
    </>
  )
}

