import React from 'react'
import '../CSS/homeScreen.css'
import BackArrow from '../../Components/BackArrow';
import Headingtxt from '../../Components/Headingtxt';
import ToggleBtn from '../../Components/ToggleBtn';
import Line from '../../Components/Line';
import '../CSS/homeScreen.css'
import { useNavigate } from 'react-router-dom';

export default function HomeScreen(){
    const navigate = useNavigate();
    const openDefaultHS=()=>{
        navigate('/default-home-screen')
    }

    const opneHomescreen=()=>{
        navigate('/inside-home-screen')
    }

    return(

        <>
           <BackArrow></BackArrow>
           <Headingtxt headingtxt="Home screen"></Headingtxt>

            <div style={{marginTop:'10px', display:'flex'}} onClick={openDefaultHS}>
                <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550'}}>
                    Default launcher </span>
                <div style={{marginTop:'20px',display:'flex' , marginLeft:'160px',fontSize:'25px',fontWeight:'200'}}> &#62;</div>
            </div>

            <div style={{marginTop:'10px', display:'flex'}} onClick={opneHomescreen} >
                <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550'}}>
                    Home screen </span>
                <div style={{marginTop:'20px',display:'flex' , marginLeft:'195px',fontSize:'25px',fontWeight:'200'}}> &#62;</div>
            </div>

            <div style={{marginTop:'10px', display:'flex'}} >
                <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550'}}>
                    App vault </span>
                <div style={{marginTop:'20px',display:'flex' , marginLeft:'90px',fontSize:'25px',fontWeight:'200'}}> <ToggleBtn></ToggleBtn></div>
              </div>

             <br></br>
             <Line></Line> 

             <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'20px',fontWeight:'300' , marginLeft:'20px'}}>
                    <span >SYSTEM NAVIGATION</span></div>


                <div style={{marginTop:'10px', display:'flex'}} >
                    <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550'}}>
                        System navigation </span>
                    <div style={{marginTop:'20px',display:'flex' , marginLeft:'140px',fontSize:'25px',fontWeight:'200'}}> &#62;</div>
                </div>


             <br></br>
             <Line></Line> 


             <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'20px',fontWeight:'300' , marginLeft:'20px'}}>
                    <span >HOME SCREEN SETTINGS</span></div>

       
               <div style={{marginTop:'10px', display:'flex'}} >
                    <span style={{marginLeft:'20px',marginTop:'20px',marginRight:'5px' ,fontSize:'20px',fontWeight:'550'}}>
                        Fill cells of uninstalled apps  <div style={{marginTop:'-22px',display:'flex' , marginLeft:'183px',fontSize:'25px',fontWeight:'200'}}> <ToggleBtn></ToggleBtn></div></span>
                    
               </div>

               <div style={{marginTop:'10px', display:'flex'}} >
                    <span style={{marginLeft:'20px',marginTop:'20px',marginRight:'5px' ,fontSize:'20px',fontWeight:'550'}}>
                        Lock Home screen layout  <div style={{marginTop:'-22px',display:'flex' , marginLeft:'183px',fontSize:'25px',fontWeight:'200'}}> <ToggleBtn></ToggleBtn></div></span>
                    
               </div>


               <div style={{marginTop:'10px', display:'flex'}} >
                    <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550'}}>
                        icon size </span>
                    <div style={{marginTop:'20px',display:'flex' , marginLeft:'230px',fontSize:'25px',fontWeight:'200'}}> &#62;</div>
                </div>

                <div style={{marginTop:'10px', display:'flex'}} >
                    <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550'}}>
                        Home screen layout </span>
                    <div style={{marginTop:'20px',display:'flex' , marginLeft:'120px',fontSize:'25px',fontWeight:'200'}}> &#62;</div>
                </div>


                <div className="home-container "  >
                        <span style={{marginRight:'50px'}}>Global icon animations</span> 
                        <p style={{display:'flex', justifyItems:'center' ,fontSize:'14px',marginRight:'30px' }}>
                         Render animations on third party app icons
                            <div style={{display:'flex', marginLeft:'-70px' , fontSize:'25px',marginTop:'-15px',fontWeight:'200'}}> <ToggleBtn></ToggleBtn></div>
                        </p>
               </div> 

               <br></br>
               <Line></Line>

               <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'20px',fontWeight:'300' , marginLeft:'20px'}}>
                    <span >RECENTS</span></div>

                
                <div style={{marginTop:'10px', display:'flex'}} >
                    <span style={{marginLeft:'20px',marginTop:'20px',marginRight:'5px' ,fontSize:'20px',fontWeight:'550'}}>
                        Show memory status  <div style={{marginTop:'-22px',display:'flex' , marginLeft:'183px',fontSize:'25px',fontWeight:'200'}}> <ToggleBtn></ToggleBtn></div></span>
                    
                </div>


                <div style={{marginTop:'10px',marginBottom:'20px', display:'flex'}} >
                    <span style={{marginLeft:'20px',marginTop:'20px',marginRight:'5px' ,fontSize:'20px',fontWeight:'550'}}>
                        Show suggestions <div style={{marginTop:'-22px',display:'flex' , marginLeft:'183px',fontSize:'25px',fontWeight:'200'}}> <ToggleBtn></ToggleBtn></div></span>
                    
                </div>
        </>
    );

}