import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text)
      .then(() => console.log("Text copied"))
      .catch((err) => console.error("Copy failed", err));
  };

  const handleRemoveClick = () => {
    setText(text.split(/\s+/).join(" ").trim());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === 'dark' ? 'white' : 'black'
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === 'dark' ? '#212529' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black'
            }}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            placeholder="Enter text here"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear the text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
          Copy text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleRemoveClick}>
          Remove Extra Space
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === 'dark' ? 'white' : 'black'
        }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters
        </p>
        <p>
          {0.008 * (text.trim() === "" ? 0 : text.trim().split(/\s+/).length)} Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
