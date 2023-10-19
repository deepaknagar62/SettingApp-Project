import './App.css';
import HomePage from './Screens/HomePage';
import './Screens/CSS/style.css'
import AboutPhone from './Screens/About-Phone-Section/AboutPhone';
import SimCards from './Screens/SIM-Cards-Networks-Section/SimCards';
import SoundAndVibration from './Screens/Sound-Vibration-Section/SoundAndVibration';
import DisplayAndBrightness from './Screens/Display-Section/DisplayAndBrightness';
import ConnectionAndSharing from './Screens/Connection-Sharing-Section/ConnectionAndSharing';
import LockScreen from './Screens/Lock-Screen-Section/LockScreen';
import HomeScreen from './Screens/Home-Screen-Section/HomeScreen';
import Battery from './Screens/Battery-Section/Battery';
import PasswordAndSecurity from './Screens/Password-Security-Section/PasswordAndSecurity';
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
import BrightnessLevel from './Screens/Display-Section/BrightnessLevel';
import ReadingMode from './Screens/Display-Section/ReadingMode';
import SystemFont from './Screens/Display-Section/SystemFont';
import TextSize from './Screens/Display-Section/TextSize';
import DeviceInVR from './Screens/Display-Section/DeviceInVR';
import FullscreenMode from './Screens/Display-Section/FullscreenMode';
import Casting from './Screens/Connection-Sharing-Section/Casting';
import Printing from './Screens/Connection-Sharing-Section/Printing';
import SystemPrintingService from './Screens/Connection-Sharing-Section/SystemPrintingService';
import DataUsage from './Screens/Connection-Sharing-Section/DataUsage';
import WirelessDisplay from './Screens/Connection-Sharing-Section/WirelessDisplay';
import ResetWiFiNetwork from './Screens/Connection-Sharing-Section/ResetWiFiNetwork';
import GlanceMi from './Screens/Lock-Screen-Section/GlanceMi';
import DefaultLauncher from './Screens/Home-Screen-Section/DefaultLauncher';
import InHomeScreen from './Screens/Home-Screen-Section/InHomeScreen';
import SystemNavigation from './Screens/Home-Screen-Section/SystemNavigation';
import ScreenLock from './Screens/Password-Security-Section/ScreenLock';
import FaceUnlock from './Screens/Password-Security-Section/FaceUnlock';
import UnlockViaBluetooth from './Screens/Password-Security-Section/UnlockViaBluetooth';
import PrivacyProtectionPassword from './Screens/Password-Security-Section/PrivacyProtectionPassword';
import EmergencyAlerts from './Screens/Password-Security-Section/EmergencyAlerts';
import EmergencySOS from './Screens/Password-Security-Section/EmergencySOS';


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
          

          <Route path='/brightness-level' element={<BrightnessLevel/>}></Route>
          <Route path='/reading-mode' element={<ReadingMode/>}></Route>
          <Route path='/system-fonts' element={<SystemFont/>}></Route>
          <Route path='/text-size' element={<TextSize/>}></Route>
          <Route path='/device-in-vr' element={<DeviceInVR/>}></Route>
          <Route path='/fullscreen-mode' element={<FullscreenMode/>}></Route>



          <Route path='/casting' element={<Casting/>}></Route>
          <Route path='/printing' element={<Printing/>}></Route>
          <Route path='/print-services' element={<SystemPrintingService/>}></Route>
          <Route path='/data-usage' element={<DataUsage/>}></Route>
          <Route path='/wireless-display' element={<WirelessDisplay/>}></Route>
          <Route path='/reset-wifi-networks' element={<ResetWiFiNetwork/>}></Route>

          
          
          <Route path='/glance-for-mi' element={<GlanceMi/>}></Route>


          <Route path='/default-home-screen' element={<DefaultLauncher/>}></Route>
          <Route path='/inside-home-screen' element={<InHomeScreen/>}></Route>
          <Route path='/system-navigation' element={<SystemNavigation/>}></Route>



          <Route path='/change-screen-lock' element={<ScreenLock/>}></Route>
          <Route path='/face-lock' element={<FaceUnlock/>}></Route>
          <Route path='/bluetooth-unlock' element={<UnlockViaBluetooth/>}></Route>
          <Route path='/privacy-protection-password' element={<PrivacyProtectionPassword/>}></Route>
          <Route path='/emergency-alerts' element={<EmergencyAlerts/>}></Route>
          <Route path='/emergency-sos' element={<EmergencySOS/>}></Route>


        </Routes>
    
    </Router>
    
    
    </>
  );
}

export default App;
