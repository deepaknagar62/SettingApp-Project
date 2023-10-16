import './App.css';
import HomePage from './Screens/HomePage';
import './Screens/CSS/style.css'
import AboutPhone from './Screens/About-Phone-Section/AboutPhone';
import SimCards from './Screens/SIM-Cards-Networks-Section/SimCards';
import SoundAndVibration from './Screens/Sound-Vibration-Section/SoundAndVibration';
import DisplayAndBrightness from './Screens/DisplayAndBrightness';
import ConnectionAndSharing from './Screens/ConnectionAndSharing';
import LockScreen from './Screens/LockScreen';
import HomeScreen from './Screens/HomeScreen';
import Battery from './Screens/Battery';
import PasswordAndSecurity from './Screens/PasswordAndSecurity';
import AllSpecs from './Screens/About-Phone-Section/AllSpecs';
import BackupAndRestore from './Screens/About-Phone-Section/BackupAndRestore';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FactoryReset from './Screens/About-Phone-Section/FactoryReset';
import LocalMoblieBackup from './Screens/About-Phone-Section/LocalMoblieBackup';
import XiaomiCloud from './Screens/About-Phone-Section/XiaomiCloud';
import GoogleBackupMyData from './Screens/About-Phone-Section/GoogleBackupMyData';
import BackupAccounts from './Screens/About-Phone-Section/BackupAccounts';
import SimcardSettings from './Screens/SIM-Cards-Networks-Section/SimcardSettings';
import DataRoaming from './Screens/SIM-Cards-Networks-Section/DataRoaming';
import SilentDND from './Screens/Sound-Vibration-Section/SilentDND';
import SoundAdditionalSet from './Screens/Sound-Vibration-Section/SoundAdditionalSet';

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
          <Route path="/backup-restore" element={<BackupAndRestore/>}/>
          <Route path="/factory-reset" element={<FactoryReset/>}></Route>
          <Route path='/local-mobile-backup' element={<LocalMoblieBackup/>}></Route>
          <Route path='/xioami-cloud' element={<XiaomiCloud/>}></Route>
          <Route path='/turn-on-backups' element={<GoogleBackupMyData/>}></Route>
          <Route path='/backup-accounts' element={<BackupAccounts/>}></Route>


          <Route path='/simcard-settings' element={<SimcardSettings/>}></Route>
          <Route path='/data-roaming' element={<DataRoaming/>}></Route>

          
          <Route path='/silent-dnd' element={<SilentDND/>}></Route>
          <Route path='/sound-additional-settings' element={<SoundAdditionalSet/>}></Route>
          
         
        </Routes>
    
    </Router>
    
    
    </>
  );
}

export default App;
