
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import ReactAudioPlayer from 'react-audio-player';
import Login from './Pages/Login';
import Ragistor from './Pages/Ragistor';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Component/Main/Dashboard';
import AddAudio from './Component/Main/AddAudio';
import AudioPlayer from './Component/Main/AudioPlayer';
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function App() {
  const Token = localStorage.getItem('user')
  return (
    <div className='main'>
      <NotificationContainer/>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/registor' element={<Ragistor />} />
          <Route path='/audioUpload' element={<AddAudio />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/audioPlayer' element={<AudioPlayer/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
