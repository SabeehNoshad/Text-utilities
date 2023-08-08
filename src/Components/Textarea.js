
import React, {useState} from 'react';
import Searchword from './Searchword';




export default function Textarea(props) {  
   
    // convert to upper case letter
    const handleUpClick = () => {
        console.log("handle up click is clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Converted to Upper Case","success");
    }
    // upon on change handle we can write further in side the text box area
    const handleOnChange = (event) => {
        console.log("on change is triggered");
        setText(event.target.value);
    }
    // for clearing a text up 
    const clearText = () =>{
        let newText = "";
        setText(newText);
        props.showalert("Text is cleared","success");
    }
    //for lower case
    const lowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showalert("Converted to lower Case","success");
      }
   
    const [text,setText]=useState("");
   
   
  return (
    <>
    <h1 style={{backgroundColor : props.mode ==='Dark'? '#032353':'white',color: props.mode === 'Dark'?'white':'black',background :props.color =='danger'?'#0d6efd':'white'}}>{props.heading}
    
    <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick} >UpperCase</button> 
    <button className="btn btn-primary mx-1" onClick={lowerCase}>LowerCase</button>
    <button className="btn btn-primary mx-1" onClick={clearText}>Clear</button>
    </h1>
    
<div className="mb-3" >
  <textarea className="form-control" style={{backgroundColor : props.mode ==='Dark'? '#032353':'white',color: props.mode === 'Dark'?'white':'black'}} value = {text} onChange={handleOnChange}id="myBox" rows="8"></textarea>
</div>

        
<div className='container my-2'style={{backgroundColor : props.mode ==='Dark'? '#032353':'white',color: props.mode === 'Dark'?'white':'black'}} >
<h2>Your Text Summary</h2>
<p>{text.split(/\s+\n/).length} words & {text.length} characters</p>
<p>{0.08 *text.split(/\s+\n/).length} minutes to read</p>

<h3 style={{backgroundColor : props.mode ==='Dark'? '#032353':'white',color: props.mode === 'Dark'?'white':'black'}}>Preview</h3>
<div className='container' style={{overflow: text.auto}}>
<p>{text}</p>
</div>
</div>

<Searchword text={text} mode={props.mode}  showAlert={props.showalert} /> 

</>

  )
  }
