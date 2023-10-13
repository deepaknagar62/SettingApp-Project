import './App.css';
import HomePage from './Screens/HomePage';
import './Screens/CSS/style.css'
import AboutPhone from './Screens/AboutPhone';
import SimCards from './Screens/SimCards';
import SoundAndVibration from './Screens/SoundAndVibration';
import DisplayAndBrightness from './Screens/DisplayAndBrightness';
import ConnectionAndSharing from './Screens/ConnectionAndSharing';
import LockScreen from './Screens/LockScreen';
import HomeScreen from './Screens/HomeScreen';
import Battery from './Screens/Battery';
import PasswordAndSecurity from './Screens/PasswordAndSecurity';
import AllSpecs from './Screens/AllSpecs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <> 
     <Router>
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-phone" element={<AboutPhone />} />
          <Route path="/simcards-network" element={<SimCards/>} />
          <Route path="/sound-vibration" element={<SoundAndVibration/>} />
          <Route path="/display" element={<DisplayAndBrightness/>} />
          <Route path="/connection-sharing" element={<ConnectionAndSharing/>} />
          <Route path="/lock-screen" element={<LockScreen/>} />
          <Route path="/home-screen" element={<HomeScreen/>} />
          <Route path="/battery" element={<Battery/>} />
          <Route path="/password-security" element={<PasswordAndSecurity/>} />



          <Route path="/all-specs" element={<AllSpecs/>} />
        </Routes>
    
    </Router>
    
    
    </>
  );
}

export default App;
