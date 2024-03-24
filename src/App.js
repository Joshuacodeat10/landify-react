import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import './styles/mobile.css'
import Footer from './Footer';
import { useState } from 'react';
function App() {
  const [isColor, changeColor] = useState(false)
  const handleClick= () =>{

    changeColor(!isColor)
  }
  return (
    <div className="App"> 
      <button onClick={handleClick}>hoihoihio</button> 
    <div className={`class3 ${isColor ? 'male' : ''}`}>bigboklkj</div>
   
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
