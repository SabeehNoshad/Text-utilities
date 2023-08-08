import './App.css';
import Navbar from './Components/Navbar';
import React,{useState} from 'react';
import Textarea from './Components/Textarea';
import Alert from './Components/Alert';

// import {
//   BrowserRouter as Router,
 
//   Route,
//   Routes as ReactRoutes,
 
// } from "react-router-dom";









function App() {
   
   const[BtnTxt,setBtnText]=useState("Enable Dark Mode") // for changing the text next to the button
   const [alert,setAlert]=useState(null)       // use state for sceen alert
  const [mode,setMode]=useState('Light')    // dark mode and light mode 

  const clearmode = () =>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
  }
  // toggle dark and light mode 
  const colr = (cls) => {
    clearmode();
    
    document.body.classList.add("bg-"+ cls);
    
  }
const togglemode = () =>{
    if(mode === 'Light'){
    setMode('Dark');
    setBtnText('Enable Light Mode');
   document.body.style.backgroundColor = '#032353';
   showAlert('DarkMode Enabled','success');
   setInterval(() => {
    document.title="Text (1)"
   }, 1500);
    
  }
  else {
    setMode('Light');
   document.body.style.backgroundColor = 'white';
   setBtnText('Enable Dark Mode');
   showAlert('LightMode Enabled','success');
 }
}
// alert for change in functionality
const showAlert=(message,Type)=>{ 
  setAlert({
    msg:message,
    type:Type
  });
  // remove the alert at set time out 
  setTimeout(() => {
    setAlert(
      null
    )
  }, 1500);
}
  return (
    <>
    <Navbar title ="Text utilities"  mode={mode} togglemode={togglemode} button={BtnTxt} colr={colr} />
    <Alert alert={alert} showAlert={showAlert} />
          <div className='container my-2 '>
            <Textarea heading ="Enter the Text below" mode={mode} showalert={showAlert}  /> 
             </div>
     </>
  );}

export default App;
