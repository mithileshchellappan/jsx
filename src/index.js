//import react & react dom libs

import React from "react";
import ReactDOM from "react-dom";

function getButtText(){
    return 'Click me';
}

//create react component
const App = () => {

    const text1 = 'click kar'
  return (
    <div>
      <label className="label" for="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {getButtText()}
      </button>
    </div>
  );
};
//take react comp and show on screen
ReactDOM.render(<App />, document.querySelector("#root"));
