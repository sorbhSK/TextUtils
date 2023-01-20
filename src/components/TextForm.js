import React, { useState } from "react";

export default function TextForm(props) {
//   text = "new text" ; // Wrong way to change the text
    const handleUpClick = () =>{
        // console.log("UpperCase was clicked" +text)
        let newText = text.toUpperCase();
        setText(newText) // correct way to change the text
        props.showAlert("Converted to UpperCase","success");
    }

    const handledownClick = () =>{
        let newText = text.toLowerCase();
        setText(newText) // correc-t way to change the text
        props.showAlert("Converted to LowerCase","success");
    }
    const handleOnChange = (event) =>{
        console.log("on Change")
        setText(event.target.value)
    }
    const HandleToCapitalizedcase = (event) =>{
      let SplitText = text.split(" ");
      let TextAfterCapitalized = "" ;
      for(let i=0; i<SplitText.length ; i++){
        let Wordsplit = SplitText[i];
        let ToUpText = Wordsplit.charAt(0).toUpperCase() + Wordsplit.slice(1)
        TextAfterCapitalized += ToUpText + " ";
        setText(TextAfterCapitalized)
        props.showAlert("Converted to Capitalized Case","success");
      }
    }
  const [text, setText] = useState("");
  return (
    <>
    <div className="container">
      <h1 style={{color:props.mode==="light"?"black":"white"}}>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control"  style={{backgroundColor:props.mode==="light"?"white":"#1d2b39" , color:props.mode==="light"?"black":"white" }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div> 
      <button className="btn btn-primary mr-4" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary ml-4" onClick={handledownClick}>Convert to Lowercase</button>
      <button className="btn btn-primary my-4 mx-3" onClick={HandleToCapitalizedcase}>To Capitalized Case</button>
    </div>
    <div className="container my-4"  style={{color:props.mode==="light"?"black":"white"}}>
      <h1>Your text summary</h1>
      <p>{text.split(' ').length} words and {text.length} characters</p>
      <p>{0.008 * text.split(' ').length} Minutes required to read all words.</p>  {/* here 0.008 mins required to read one word. */}
      <h4>{text}</h4>
    </div>
    </>
  );
}
