import React from 'react'
import { useState } from 'react';
const Navbar = (props) => {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [dmode, setdMode] = useState('Enable DarkMode'); // Whether dark mode is enabled or not
  
  const click1 =()=>{
    if(mode === 'light' && dmode==='Enable DarkMode' ){
      setMode('dark');
      setdMode('Enable LightMode');
      
      document.body.style.backgroundColor = '#212024';
      document.getElementById("fromcpy").style.color = "white";
      document.getElementById('fromcpy').style.backgroundColor='#161716'
      document.getElementById('tocpy').style.color='white';
      document.getElementById('tocpy').style.backgroundColor='#212024';
      document.getElementById('translator-container').style.backgroundColor='#161716';
    }
    else{
      setMode('light');
      setdMode('Enable DarkMode');
      document.body.style.backgroundColor = '#f5f5f5';
      document.getElementById("fromcpy").style.color = "black";
      document.getElementById('fromcpy').style.backgroundColor='#FFFFFF'
      document.getElementById('tocpy').style.color='black';
      document.getElementById('tocpy').style.backgroundColor='#f5f5f5';
      document.getElementById('translator-container').style.backgroundColor='#FFFFFF';
      document.getElementById('but1').style.backgroundColor='#1B72E8';
      
    }
  }
  return (
    
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Translator</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        
                        <button id="but1" type="button" class="btn btn-primary" onClick={click1}>{dmode}</button>
                    </div>
  </div>
</nav>
  )
}

export default Navbar