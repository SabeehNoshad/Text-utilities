import React,{useState} from 'react'
import "./search.css"

export default function Searchword(props) {

 const paragraph = props.text; 
  const [searchTerm, setSearchTerm] = useState("");
  const [highlightedText, setHighlightedText] = useState(paragraph);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);

    if (e.target.value) {
      const regex = new RegExp(e.target.value, "gi");
      setHighlightedText(paragraph.replace(regex, (match) => `<mark>${match}</mark>`));
    } else {
      setHighlightedText(paragraph);
    }
   
  }
  const clearfield=()=>{
    setSearchTerm(" ");
    props.showAlert("Text is cleared","success");
  }

  return (
    <div className="container mt-5" style={{backgroundColor : props.mode ==='Dark'? '#032353':'white', color: props.mode === 'Dark'?'white':'black'}}>
    <h4 >Word Search in Paragraph <button className="btn btn-primary my-1"onClick={clearfield} >Clear</button></h4>
    
    <div className="mb-3 my-1"  >
      <input
        type="text"
        className="form-control"
        placeholder="Enter a word to search"
        value={searchTerm}
        onChange={handleSearch}
        style={{backgroundColor : props.mode ==='Dark'? '#032353':'white', color: props.mode === 'Dark'?'white':'black'}}
      />
    </div>
    <div className="paragraph" >
      <p dangerouslySetInnerHTML={{ __html: highlightedText }}></p>
    </div>
  </div>
  )
}
