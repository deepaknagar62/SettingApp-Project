import React from 'react'
import BackArrow from '../../Components/BackArrow';
import Headingtxt from '../../Components/Headingtxt';
import '../CSS/battery.css';
import ToggleBtn from '../../Components/ToggleBtn';
import battery from '../Images/battrysav.png'
import ultra from '../Images/ultra.png'
import graph from '../Images/graph.png'
import Line from '../../Components/Line';


export default function Battery(){

    return(

        <>
            <BackArrow></BackArrow>
            <Headingtxt headingtxt="Battery saver"></Headingtxt>

            <div className="battery-card "> 
            <div style={{width:'160px',display:'flex',marginTop:'20px' , backgroundColor:'#0cf346', height:'100px' , borderRadius:'10px'}}> 
                <p style={{marginLeft:'20px',marginTop:'30px',fontSize:'25px' ,fontWeight:500,
                color:'white',textAlign:'center',alignItems:'center'}}> 1 hr 55 mins
                <p style={{fontSize:'15px',marginTop:'0px',fontWeight:'300px'}}>Remaing tiome | 40% charged</p></p>
                
            </div>
            
            </div>

            <div className="bs-icons">
                <img src={battery} alt='message'></img>
                    <p style={{ marginTop:'5px', color:'black' , fontWeight:'550' ,fontSize:"20px",marginLeft:'10px' }}>
                        Backup
                        <p style={{fontSize:'13px',marginTop:'0px',fontWeight:'300' ,marginRight:'-50px'}}> 23h 32m remaining</p> </p>
                    <div style={{display:'flex', marginLeft:'50px'}}> <ToggleBtn ></ToggleBtn></div>
            </div>


            <div className="bs-icons" style={{marginTop:"10px"}}>
                <img src={ultra} alt='message'></img>
                    <p style={{ marginTop:'5px', color:'black' , fontWeight:'550' ,fontSize:"20px",marginLeft:'10px',marginRight:'-100px' }}>
                        Ultra saver
                        <p style={{fontSize:'13px',marginTop:'0px',fontWeight:'300' ,marginRight:'-50px'}}> 23h 32m remaining</p> </p>
                    <div style={{display:'flex', marginLeft:'118px',marginRight:'-40px'}}> <ToggleBtn ></ToggleBtn></div>
            </div>

          <br></br>
          <Line></Line>

          <div style={{marginLeft:'40px', marginRight:'30px',marginTop:'20px'}}> <img src={graph} alt="castimg" width="300" ></img> </div>
           

          <br></br>
          <Line></Line>
        </>
    );

}