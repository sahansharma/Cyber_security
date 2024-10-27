import { useState } from 'react';
import './App.css';
import HeroSection from './components/Hero';
import Navigation from './components/Navigation';
import Encryption from './components/Encryption';
import EncryptionForm from './components/EncryptionForm';

const App = () =>{
  const [isEncryptionStarted, setIsEncryptionStarted] =useState(false);
  const togglePage=()=>{
    setIsEncryptionStarted((prev)=>!prev);
  };
  return <div>
    <Navigation />
    {isEncryptionStarted?<Encryption/>:<HeroSection toggle={togglePage}/>}
    <EncryptionForm/>
  </div>
};
export default App;