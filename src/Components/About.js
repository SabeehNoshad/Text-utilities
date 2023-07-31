import React,{useState} from 'react'

export default function About() {

    const[btnText,setBtnText]=useState("Enable dark mode")
    const [mystyle,setmystyle]=useState({
        color:"white",
        background:"black",
    })
const toggle =()=>{
    if (mystyle.color === "white"){
       setmystyle({
        color:"black",
        background:"white", 
       }) 
       setBtnText("Enable Dark mode");
              
    }
    else {
        setmystyle({
            color:"white",
        background:"black", 
        })
    setBtnText("Enable Light Mode");
    }
}   
   
  return (
    <div className='container my-3' style={mystyle}>
    <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header"style={mystyle}>
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"style={mystyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item"style={mystyle}>
    <h2 className="accordion-header"style={mystyle}>
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={mystyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item"style={mystyle}>
    <h2 className="accordion-header" style={mystyle}>
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>

<div class="form-check form-switch">
  <input class="form-check-input" onClick={toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label class="form-check-label" for="flexSwitchCheckDefault">{btnText}</label>
</div>
    </div>
  )
}
