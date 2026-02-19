import React, { useState } from "react";

// const myStyle = {
//   color: "white",
//   backgroundColor: "black",
// };

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });
  const [btnText, setbtnText] = useState({
    Text: "light mode",
    backgroundColor: "white",
    color: "black",
  });

  const toggleStyle = () => {
    // Check the current color and toggle styles
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        border: "2px solid black", // Add border for better visibility
      });
      setbtnText({
        Text: "dark mode", // Update only the Text property
        backgroundColor: "black",
        color: "white", // Update the color property
      });
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setbtnText({
        Text: "light mode", // Update only the Text property
        backgroundColor: "white",
        color: "black", // Update the color property
      });
    }
  };

  return (
    <>
      <div className="container" style={myStyle}>
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
        <div className="container my-3">
          <button
            type="button"
            className="btn btn-dark"
            style={{
              backgroundColor: btnText.backgroundColor, // Use btnText for background color
              color: btnText.color, // Use btnText for text color
            }}
            onClick={toggleStyle}
          >
            {btnText.Text}
          </button>
        </div>
      </div>
    </>
  );
}
