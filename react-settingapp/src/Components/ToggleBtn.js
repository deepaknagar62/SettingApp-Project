import React from 'react'
import './CSS/toggleBtn.css'

export default function ToggleBtn(){

    return(
        <>
        <label className="switch">
            <input type="checkbox" id="toggle"/>
            <span className="slider"></span>
          </label>
        
        </>
    )
}