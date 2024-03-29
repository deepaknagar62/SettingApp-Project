import React, { useEffect, useState } from 'react'
import '../CSS/aboutPhone.css'
import versionicon from '../Images/deviceicon.jpg'
import { useNavigate } from 'react-router-dom';
import Line from '../../Components/Line';
import BackArrow from '../../Components/BackArrow';
import Headingtxt from '../../Components/Headingtxt';
import axios from 'axios';



export default function AboutPhone(){
    const deviceName = 'device-name'
    const navigate = useNavigate();

    const OpenAllSpecs =()=>{
        navigate('/all-specs');
    }

    const OpenBackupRestore=()=>{
        navigate('/backup-restore');
    }
    
    const OpenFactoryReset=()=>{
        navigate('/factory-reset');
    }
    const opnedeviceName=()=>{
        navigate('/device-name');
    }

    const Goback=()=>{
      navigate('/');
    }

    const [device_name, setDeviceName] = useState('Redmi 8A');

    
    useEffect(() => {
      axios.get(`/api/text-data/${deviceName}`)
        .then(response => {
            setDeviceName(response.data.enteredText);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
  
   

    return(

        <>
         <div className='aboutphone-conainer'>  
         <BackArrow onClick={Goback}></BackArrow> 
         <Headingtxt headingtxt="About Phone"></Headingtxt>
          
           <div className='cards'>
                <div className="card11">
                    <img className='img1' src={versionicon} alt='version'></img>
                    <div className="text1">Device Version</div>
                    <p> MIUI Global<p className='text4'>12.5.2 <p className='text4'>stable</p></p></p>
                </div>
            <div style={{display : 'inline'}} > 
                <div className="card21" onClick={opnedeviceName}>
                    <div className="text1">Device Name</div>
                    <p className='text2'>{device_name}</p>
                </div>
            <div className="card31">
                <div className="text1">Storage</div>
                <p className='text3'>Occupied <p className='text4'>27 GB/32 GB</p></p>
                
            </div>
            </div> 
           </div>

           <div className="container2" >
                <span >MIUI version</span> 
                <p>MIUI Global 12.5.2 stable</p>
            </div>

            <div className="container2" >
                <span>Android version</span> 
                <p style={{marginLeft:'60px'}}>10 QKQ1.191014.001</p>
            </div>

            <div className="container2" >
                <span>Android security patch level</span> 
                <p style={{marginLeft:'20px'}}>2023-09-01</p>
            </div>

            <div className="container2" onClick={OpenAllSpecs} >
                <span>All specs</span> 
                <p style={{marginLeft:'240px' , fontSize:'22px'}}>&#62;</p>
            </div>

            <Line></Line>

            <div className="container2" onClick={OpenBackupRestore}>
                <span>Back up and restore</span> 
                <p style={{marginLeft:'135px' , fontSize:'22px'}}>&#62;</p>
            </div>

            <div className="container2" onClick={OpenFactoryReset}>
                <span>Factory reset</span> 
                <p style={{marginLeft:'195px' , fontSize:'22px'}}>&#62;</p>
            </div>

            <Line></Line>

            </div>
        </>
    );

}