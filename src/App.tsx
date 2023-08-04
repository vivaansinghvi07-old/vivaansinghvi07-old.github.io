import React from "react";
import Projects from "./components/Projects";
import { Route, Routes, HashRouter } from "react-router-dom";

function Hello() {
  return <p>Hello world!</p>
}

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
