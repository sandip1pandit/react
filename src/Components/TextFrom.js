import React, { useState } from "react";


export default function TextForm(props) {
  const [text, setText] = useState("");
  const [isBold, setIsBold] = useState(false); // State to track if text should be bold

  const handleupClick = () => {
    console.log("Upper case was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleloClick = () => {
    console.log("Lower case was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleonChange = (event) => {
    console.log("On change");
    setText(event.target.value);
    // props.toggleMode();
  };

  const handleclrClick = () => {
    setText("");
    props.showAlert("Text Cleared", "danger");
  };

  const handleboldClick = () => {
    setIsBold(!isBold); // Toggle bold state
    props.showAlert("Text Bolded", "success");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied", "success");
  };

  const handleCut = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    handleclrClick();
    props.showAlert("Text Cut", "success");
  };

  const extraSpace = () => {
    let newText = text.split(/\s+/); // Corrected regex to split by whitespace
    setText(newText.join(" ")); // Fixed parentheses
  };
//   const handleChange = (event) => {
//     // handleonChange(event);
    
// };
  return (
    <>
      <div className="my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black'}}>
        <div className="container" >
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <label htmlFor="myBox" className="form-label">
              Example textarea
            </label>
            <textarea
              className="form-control"
              value={text}
              onChange={handleonChange}
              style={{
                backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
                fontWeight: isBold ? 'bold' : 'normal', // Apply bold style
                color: props.mode === 'dark' ? 'white' : 'black' }}
              id="myBox"
              rows={8}
            />
            <button
              className="btn btn-primary mx-2 my-2"
              onClick={handleupClick}
            >
              Convert to Upper Case
            </button>
            <button
              className="btn btn-primary mx-2 my-2"
              onClick={handleloClick}
            >
              Convert to Lower Case
            </button>
            <button
              className="btn btn-primary mx-2 my-2"
              onClick={extraSpace}
            >
              Extra space
            </button>
            <button
              className="btn btn-primary mx-2 my-2"
              onClick={handleboldClick}
            >
              BOLD
            </button>
            <button
              type="submit"
              onClick={speak}
              className="btn btn-primary mx-2 my-2"
            >
              Speak
            </button>
            <button
              type="submit"
              onClick={handleCopy}
              className="btn btn-primary mx-2 my-2"
            >
              Copy
            </button>
            <button
              type="submit"
              onClick={handleCut}
              className="btn btn-primary mx-2 my-2"
            >
              Cut
            </button>
            <button
              className="btn btn-primary mx-2 my-2"
              onClick={handleclrClick}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
      <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>Your Text Summary</h1>
      <p>
        {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.replace(/\s/g, "").length} characters
      </p>
        <p>
          <b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</b>
        </p>
        <h2>Preview</h2>
        <p style={{ fontWeight: isBold ? "bold" : "normal" }}>{text}</p>{" "}
        {/* Conditionally render bold */}
      </div>
    </>
  );
}
