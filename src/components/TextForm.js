import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was Clicked" + text);
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showAlert("Converted to UpperCase", "success");
    }
     const handleLoClick = () =>{
        let newtext = text.toLowerCase();
        settext(newtext);
        props.showAlert("Converted to LowerCase", "success");
    }
    const handleclearClick = () =>{
        settext("")
        props.showAlert("Text Cleared!", "success");
    }
    const handleCopy = () =>{
        let cotext = document.getElementById("myBox");
        cotext.select();
        navigator.clipboard.writeText(cotext.value);
        props.showAlert("Copy to Clipboard", "success");
    }
    const handleExtraSpace = () =>{
        let newtext = text.split(/[ ]+/);
        settext(newtext.join(" "));
        props.showAlert("Extra Spaces Removed", "success");
    }

    const handleOnChange = (event) =>{
        console.log("On change");
        settext(event.target.value)
    }

  const [text,settext] = useState("");
//   settext("new text"); //correct way to change the text

  return (
    <>
    <div className='container' style={{color: props.mode === "dark" ? "white" : "black"}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === 'dark' ? "white" : "black"}} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lopercase</button>
        <button className='btn btn-primary mx-2' onClick={handleclearClick}>Clear text</button>
        <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy text</button>
        <button className='btn btn-primary mx-2' onClick={handleExtraSpace}>Remove Extra spaces</button>
    </div>
    <div className="container my-3"  style={{color: props.mode === "dark" ? "white" : "black"}}>
        <h2>Your text summery</h2>
        <p>{text.split(" ").length} <b>words ,</b> {text.length} <b>characters</b> </p>
        <p>{0.008 * text.split(" ").length} <b>Minutes read</b> </p>
        <h2>preview</h2>
        <p>{text.length>0 ? text : "Enter something in the textBox above to preview it here"}</p>
    </div>
    </>
  )
}
