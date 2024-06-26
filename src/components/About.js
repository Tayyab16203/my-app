import React from 'react'

export default function About(props) {
    
    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: "white"
    // })
    let myStyle = {
        color: props.mode === "dark" ? "white": "#042743",
        backgroundColor: props.mode === "dark" ? "rgb(36 74 104)": "white",
    }
  return (
    <div className='container'>
        <h1 className='my-2' style={{color: props.mode === "dark" ? "white": "#042743"}}>About us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analize your text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                TextUtils gives you a way to analyze your text quckly and efficiently.  Be it word count, charactor count or
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                TextUtils is a free character counter tool that provides instant character count and word count statistic for a given text.TextUtils report the number of words and characters. Thus it is sutaible for writing word/ character limit.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}> 
                The word counter software works in a web browser such as Chrome, FireFox, Internet Explore, Safari, opera.Its suit to count character in facebook, Blogs, book, excel document, pdf document, essays etc.
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
