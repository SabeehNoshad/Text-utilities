import React from 'react';
import PropTypes from 'prop-types';
import image1 from '../Images/icons8-logo.svg';



export default function Navbar(props) {
 
  
  return (

     // <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
       <nav className="navbar navbar-expand-lg" style={{backgroundColor : props.mode ==='Dark'? 'black':'white',color: props.mode === 'Dark'?'white':'black'}} > 
  <div className="container-fluid" >
    <a className="navbar-brand" style={{color : props.mode === 'Dark'?'white':'black'}} to="/"> <img src={image1}  width="30" height="24"  ></img> {props.title}
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
         
    <div className='d-flex'>
  <div className='bg-primary rounded mx-2' onClick={()=>{props.colr('primary')}} style={{height:'15px', width:'15px'}}></div>
  <div className='bg-success rounded mx-2' onClick={()=>{props.colr('success')}} style={{height:'15px', width:'15px'}}></div>
  <div className='bg-danger rounded mx-2' onClick={()=>{props.colr('danger')}} style={{height:'15px', width:'15px'}}></div>
  <div className='bg-warning rounded mx-2' onClick={()=>{props.colr('warning')}} style={{height:'15px', width:'15px'}}></div>
</div> 
      
   <div className={`form-check form-switch text-${ props.mode ==='Dark'? 'light':'Dark'}`}>
      
  <input className="form-check-input"  onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.button}</label>
</div>
    </div>
  </div>
</nav>
  )
}
Navbar.prototype = {
    title : PropTypes.string.isRequired,
  
}

