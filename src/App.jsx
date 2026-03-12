import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Pageone from "./components/pageone";
import ResponsiveScale from "./components/src/components/ResponsiveScale";


function App() {
  return (
    <>
      <ResponsiveScale>
        <Pageone />
      </ResponsiveScale>
    </>
  );
}

export default App;

