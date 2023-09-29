import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was Clicked" + text);
        let newtext = text.toUpperCase();
        settext(newtext)
    }
    const handleLoClick = () =>{
        // console.log("Uppercase was Clicked" + text);
        let newtext = text.toLowerCase();
        settext(newtext)
    }

    const handleOnChange = (event) =>{
        console.log("On change");
        settext(event.target.value)
    }

  const [text,settext] = useState("");
//   settext("new text"); //correct way to change the text

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lopercase</button>
    </div>
    <div className="container my-3">
        <h2>Your text summery</h2>
        <p>{text.split(" ").length} <b>words ,</b> {text.length} <b>characters</b> </p>
        <p>{0.008 * text.split(" ").length} <b>Minutes read</b> </p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
