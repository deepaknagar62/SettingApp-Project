import React, { useEffect, useState } from 'react';
import '../CSS/sleepPopup.css';
import axios from 'axios';

const SleepPopup = ({ onClose, onSleep }) => {

    const [selectedOption, setSelectedOption] = useState({ name: '', selectedOption: null });
    
  
    const fetchSelectedOption = async () => {
      try {
        const response = await axios.get('/api/select-option/sleepOption');
        setSelectedOption(response.data);
        
      } catch (error) {
        console.error('Error fetching selected option:', error);
      }
    };
  
    useEffect(() => {
      fetchSelectedOption();
    }, []);
  
    const handleSleep = async (name, selectedOption) => {
      try {
        const response = await axios.put('/api/select-option/sleepOption', { name, selectedOption });
        setSelectedOption(response.data);
      } catch (error) {
        console.error('Error storing selected option:', error);
      }
    };
  return (
    <div className="sleep-popup">
      <div className="popup-content">
        <h4 style={{ textAlign: 'center' }}>Sleep</h4>
        <div style={{ marginTop: '10px',fontSize:'20px', marginLeft: '20px' }}>
          <label  style={{display:'flex' ,marginTop:'10px'}} >
            <input
              type="radio"
              value="1 Minute"
              checked={selectedOption.selectedOption === "1 Minute"}
              onChange={() => handleSleep('1 Minute', '1 Minute')}
            />
            1 Minute {selectedOption.selectedOption === '1 Minute' && <span className="tick">✔</span>}
          </label>
          <label  style={{display:'flex' ,marginTop:'10px'}} >
            <input
              type="radio"
              value="2 Minutes"
              checked={selectedOption.selectedOption === "2 Minutes"}
              onChange={() => handleSleep('2 Minutes', '2 Minutes')}
            />
            2 Minutes {selectedOption.selectedOption === '2 Minutes' && <span className="tick">✔</span>}
          </label>
          <label  style={{display:'flex' ,marginTop:'10px'}} >
            <input
              type="radio"
              value="5 Minutes"
              checked={selectedOption.selectedOption === "5 Minutes"}
              onChange={() => handleSleep('5 Minutes', '5 Minutes')}
            />
            5 Minutes {selectedOption.selectedOption === '5 Minutes' && <span className="tick">✔</span>}
          </label>

          <label  style={{display:'flex' ,marginTop:'10px'}} >
            <input
              type="radio"
              value="10 Minutes"
              checked={selectedOption.selectedOption === "10 Minutes"}
              onChange={() => handleSleep('5 Minutes', '10 Minutes')}
            />
            10 Minutes {selectedOption.selectedOption === '10 Minutes' && <span className="tick">✔</span>}
          </label>
        </div>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SleepPopup;