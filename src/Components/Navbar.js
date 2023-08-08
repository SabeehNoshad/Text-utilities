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
         
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit" onClick={search}>Search</button>
      </form> */}
      
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

