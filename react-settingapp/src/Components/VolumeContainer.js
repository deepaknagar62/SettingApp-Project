import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS/volumeContainer.css'
 export default function VolumeContainer({name}) {

  const [volume, setVolume] = useState(30);

  useEffect(() => {
    axios.get(`/get-api/volume-container?name=${name}`)
      .then(response => {
        setVolume(response.data.volume);
      })
      .catch(error => {
        console.error(error);
      });
  }, [name]);

  const onVolumeChange = (event) => {
    const newVolume = event.nativeEvent.offsetX / event.currentTarget.offsetWidth * 100;
    setVolume(newVolume);

    axios.put(`/put-api/volume-container?name=${name}`, { volume: newVolume })
      .then(response => {
        console.log(`${name} Volume updated:`, response.data.volume);
      })
      .catch(error => {
        console.error(error);
      });
  };
  
    return (
      <div className="volume-container4">
        <div className="volume-bar4" id="volume-bar" onClick={onVolumeChange}>
          <div className="volume-fill4" id="volume-fill" style={{ width: `${volume}%` }}></div>
        </div>
      </div>
    );
}

