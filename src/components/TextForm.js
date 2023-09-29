import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was Clicked" + text);
        let newtext = text.toUpperCase();
        settext(newtext)
    }
    const handleOnChange = (event) =>{
        console.log("On change");
        settext(event.target.value)
    }

  const [text,settext] = useState("Enter text here");
//   settext("new text"); //correct way to change the text

  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}
