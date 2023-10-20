
import { useEffect, useState } from 'react';
import './CSS/toggleBtn.css'
import axios from 'axios';
export default function ToggleBtn({name}){

    const [isToggled, setIsToggled] = useState(false);

    useEffect(() => {
      const fetchToggleButtonState = async () => {
        try {
          const response = await axios.get(`/api/toggle-button/${name}`);
          setIsToggled(response.data.state);
        } catch (error) {
          console.error('Failed to fetch toggle button state', error);
        }
      };
  
      fetchToggleButtonState();
    }, []);
  
    const handleToggle = async () => {
      const newState = !isToggled;
      setIsToggled(newState); 
  
      try {
        const response = await axios.put(`/api/toggle-button/${name}`, { state: newState });
        setIsToggled(response.data.state);
      } catch (error) {
        console.error('Failed to update toggle button state', error);
      }
    };
  

    return(
        <>

              
              <div className="toggle-container">
                <label className="toggle">
                    <input type="checkbox" checked={isToggled} readOnly />
                    <span className={`slider round ${isToggled ? 'checked' : ''}`} onClick={handleToggle}></span>
                </label>
             </div>
     </>
    )
}