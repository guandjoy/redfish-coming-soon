import React from "react";
import ReactDOM from "react-dom";
import Spinner from "./Spinner";
import FooterCaption from "./FooterCaption";
import Logo from "./Logo";

import "./styles.css";

function App() {
  return (
    <div className="scene">
      <Logo className="logo" />
      <Spinner
        duration={40000}
        shiftStep={1600}
        numOfKeyPaths={10}
        numOfShapes={3}
        colors={["#3688FF", "#FF546C", "#22D163", "#3688FF"]}
        contrast={0.6}
        round={1}
        numOfPathSegments={10}
        type={"fill"}
        lable={false}
      />
      {/* <FooterCaption /> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
