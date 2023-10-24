import React from 'react'
import BackArrow from '../../Components/BackArrow'
import Headingtxt from '../../Components/Headingtxt'
import ToggleBtn from '../../Components/ToggleBtn'
import '../CSS/privacyProtection.css'
import Line from '../../Components/Line'
import Lighttext from '../../Components/Lighttext'
import { useNavigate } from 'react-router-dom'


export default function PrivacyProtectionPassword() {
    
    const navigate = useNavigate();
    const goback=()=>{
        navigate('/password-security')
    }



   
  return (
    <>

       <BackArrow onClick={goback}></BackArrow>
        <Headingtxt headingtxt="Privacy protection password"></Headingtxt>
   
        <div style={{color:'#534d4d' , fontSize:'15px',marginTop:'25px',fontWeight:'300' , marginLeft:'25px'}}>
            <span >SET PASSWORDS</span></div> 

         


           




          <div className="ppp-container "  >
                <span style={{marginRight:'50px'}}>Privacy protection password</span> 
                <p style={{display:'flex', justifyItems:'center' ,fontSize:'14px',marginRight:'30px' }}>
                    Require password for every time private items are accessed
                    <div style={{display:'flex', marginLeft:'-30px' , fontSize:'25px',marginTop:'-15px',fontWeight:'200'}}> <ToggleBtn name="ppp_privacyProtection"></ToggleBtn></div>
                </p>
            </div>  


            <div style={{marginTop:'10px', display:'flex'}} >
            <span style={{marginLeft:'20px',marginTop:'20px' ,fontSize:'20px',fontWeight:'550'}}>
                Show pattern </span>
            <div style={{marginTop:'20px',display:'flex' , marginLeft:'59px',fontSize:'25px',fontWeight:'200'}}> <ToggleBtn  name="ppp_showPattern"></ToggleBtn></div>
            </div>  



            <div className="ppp-container "  >
                <span style={{marginRight:'50px'}}>Add Mi Account</span> 
                <p style={{display:'flex', justifyItems:'center' ,fontSize:'14px',marginRight:'30px' }}>
                    Use Mi Account to reset your password
                    <div style={{display:'flex', marginLeft:'-50px' , fontSize:'25px',marginTop:'-15px',fontWeight:'200'}}> <ToggleBtn  name="ppp_addMI"></ToggleBtn></div>
                </p>
            </div> 

            <br></br> 
            <Line></Line>

            <Lighttext text="THIS PASSWORD PROTECTS THE FOLLOWING ITEMS"></Lighttext>

            <p style={{marginLeft:'25px',marginTop:'30px',fontSize:'20px',fontWeight:'500'}}>Messages</p>

            <p style={{marginLeft:'25px',marginTop:'30px',fontSize:'20px',fontWeight:'500'}}>Photos</p>
            <p style={{marginLeft:'25px',marginTop:'30px',fontSize:'20px',fontWeight:'500'}}>Files</p>
            <p style={{marginLeft:'25px',marginTop:'30px',fontSize:'20px',fontWeight:'500'}}>Notes</p>
    </>
  )
}
