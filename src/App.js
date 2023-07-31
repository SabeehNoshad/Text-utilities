import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import React,{useState} from 'react';
import Textarea from './Components/Textarea';
import Alert from './Components/Alert';




function App() {
   // for changing the text next to the button
   const[BtnTxt,setBtnText]=useState("Enable Dark Mode") 
   const [alert,setAlert]=useState(null)       // use state for sceen alert
  const [mode,setMode]=useState('Light')    // dark mode and light mode 
  // toggle dark and light mode 
  const togglemode = () => {
   if(mode === 'Light'){
    setMode('Dark');
    setBtnText('Enable Light Mode');
   document.body.style.backgroundColor = '#032353';
   showAlert('DarkMode Enabled','success');
    
  }
  else {
    setMode('Light');
   document.body.style.backgroundColor = 'white';
   setBtnText('Enable Dark Mode');
   showAlert('LightMode Enabled','success');
 }
}
const showAlert=(message,Type)=>{
  setAlert({
    msg:message,
    type:Type
  });
  setTimeout(() => {
    setAlert(
      null
    )
  }, 1500);
}
  return (
    <>
  <Navbar title ="Text utilities"  About = "About Us" mode={mode} togglemode={togglemode} button={BtnTxt} />
  <Alert alert={alert} showAlert={showAlert} />
  <div className='container my-2 '>
 <Textarea heading ="Enter the Text below" mode={mode} showalert={showAlert} />
 {/* <Searchword mode={mode}/> */}
  {/* <About /> */}
  </div>
 
     </>
  );
}

export default App;
