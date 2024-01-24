import React,{useState} from 'react'

export default function TextForm(props) {


    const handleUpClick = () =>{
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
        navigator.clipboard.writeText(text);
        props.showAlert("Copy to Clipboard", "success");
    }
    const handleExtraSpace = () =>{
        let newtext = text.split(/[ ]+/);
        settext(newtext.join(" "));
        props.showAlert("Extra Spaces Removed", "success");
    }

    const handleOnChange = (event) =>{
        settext(event.target.value)
    }

    const [text,settext] = useState("");

  return (
    <>
    <div className='container' style={{color: props.mode === "dark" ? "white" : "black"}} >
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === "dark" ? "#13466e" : "white", color: props.mode === 'dark' ? "white" : "black"}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to Lopercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleclearClick}>Clear text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpace}>Remove Extra spaces</button>
    </div>
    <div className="container my-3"  style={{color: props.mode === "dark" ? "white" : "black"}}>
        <h2>Your text summery</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} <b>words ,</b> {text.length} <b>characters</b> </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} <b>Minutes read</b> </p>
        <h2>preview</h2>
        <p>{text.length>0 ? text : "Nothing to preview"}</p>
    </div>
    </>
  )
}
